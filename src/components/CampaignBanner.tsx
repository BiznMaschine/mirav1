/**
 * CampaignBanner Component
 * 
 * Collapsible banner displaying active campaign information,
 * progress, urgency, and call-to-action. Can be expanded to show full details.
 */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Badge, Button } from '@mira/ui';
import { AlertTriangle, Clock, Zap, ChevronDown, ChevronUp, Heart, ExternalLink } from 'lucide-react';
import { Campaign } from '../data/mockData';
import CampaignChallengeModal from './CampaignChallengeModal';

export interface CampaignBannerProps {
  campaign: Campaign;
  userContributionKg?: number;
  className?: string;
}

export default function CampaignBanner({ 
  campaign, 
  userContributionKg = 0,
  className 
}: CampaignBannerProps) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const progress = (campaign.currentKg / campaign.goalKg) * 100;
  
  const daysRemaining = campaign.endDate 
    ? Math.ceil((new Date(campaign.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : null;

  const campaignTypeLabel = 
    campaign.type === 'EMERGENCY' ? t('veto.campaign.emergencyCampaign') :
    campaign.type === 'SEASONAL' ? t('veto.campaign.seasonalCampaign') :
    campaign.type === 'THEMATIC' ? t('veto.campaign.thematicCampaign') : '';

  return (
    <Card noPadding className={`overflow-hidden ${className}`}>
      {/* Collapsed View */}
      <div 
        className="relative bg-gradient-to-r from-slate-50 to-white p-4 border-l-4 border-slate-300 cursor-pointer hover:from-slate-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="p-2 rounded-lg bg-forest-100 border border-forest-200 flex-shrink-0">
              <Heart className="w-4 h-4 text-forest-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <Badge variant="default" size="sm" className="bg-slate-100 text-slate-700 border-slate-200">
                  {campaignTypeLabel}
                </Badge>
                {campaign.impactMultiplier > 1 && (
                  <Badge variant="default" size="sm" className="bg-amber-50 text-amber-700 border-amber-200">
                    <Zap className="w-3 h-3 mr-1" />
                    {t('veto.campaign.xImpact', { multiplier: campaign.impactMultiplier })}
                  </Badge>
                )}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1 truncate">{campaign.name}</h3>
              {campaign.urgencyStatementKey ? (
                <a
                  href={campaign.urgencyStatementLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs text-slate-600 line-clamp-1 hover:text-forest-600 hover:underline flex items-center gap-1 transition-colors"
                >
                  {t(campaign.urgencyStatementKey)}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <p className="text-xs text-slate-600 line-clamp-1">{campaign.urgencyStatement}</p>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Progress indicator in collapsed view */}
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs font-medium text-slate-600">{Math.round(progress)}%</span>
              <div className="w-16 bg-slate-200 rounded-full h-1.5 mt-1">
                <div
                  className="bg-forest-600 h-1.5 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="flex-shrink-0"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <div className="border-t border-slate-200 bg-white p-6">
          <div className="space-y-4">
            {/* Campaign Details */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                <AlertTriangle className="w-4 h-4 text-slate-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{campaign.name}</h3>
                {campaign.urgencyStatementKey ? (
                  <a
                    href={campaign.urgencyStatementLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 leading-relaxed hover:text-forest-600 hover:underline flex items-center gap-1.5 transition-colors"
                  >
                    {t(campaign.urgencyStatementKey)}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <p className="text-sm text-slate-600 leading-relaxed">{campaign.urgencyStatement}</p>
                )}
              </div>
            </div>

            {/* Progress Section */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">{t('veto.campaign.campaignProgress')}</span>
                <span className="text-sm font-semibold text-slate-900">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div
                  className="bg-forest-600 h-2.5 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>{campaign.currentKg.toLocaleString()} kg</span>
                <span>{campaign.goalKg.toLocaleString()} kg {t('veto.campaign.goal')}</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-between gap-4">
              {userContributionKg > 0 && (
                <div className="flex-1 bg-slate-50 rounded-lg px-3 py-2 border border-slate-200">
                  <p className="text-xs text-slate-600 mb-0.5">{t('veto.campaign.yourContribution')}</p>
                  <p className="text-sm font-semibold text-forest-600">{userContributionKg.toLocaleString()} kg</p>
                </div>
              )}

              {daysRemaining !== null && daysRemaining > 0 && (
                <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2 border border-slate-200">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span>{t('veto.campaign.daysRemaining', { count: daysRemaining })}</span>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button 
              variant="primary" 
              className="w-full" 
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              {t('veto.campaign.joinChallenge')}
            </Button>
          </div>
        </div>
      )}

      <CampaignChallengeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        campaign={campaign}
        userContributionKg={userContributionKg}
      />
    </Card>
  );
}

