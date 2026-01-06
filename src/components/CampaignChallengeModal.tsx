/**
 * CampaignChallengeModal Component
 * 
 * Modal showing campaign challenge details and join flow
 * for the "Kein Mord für den Fußball" campaign.
 */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Button, Badge, ProgressBar } from '@mira/ui';
import { Target, Zap, Award, CheckCircle, TrendingUp, Clock, ExternalLink } from 'lucide-react';
import { Campaign } from '../data/mockData';

export interface CampaignChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: Campaign;
  userContributionKg?: number;
}

export default function CampaignChallengeModal({
  isOpen,
  onClose,
  campaign,
  userContributionKg = 0,
}: CampaignChallengeModalProps) {
  const { t } = useTranslation();
  const [hasJoined, setHasJoined] = useState(false);
  const [challengeProgress, setChallengeProgress] = useState(0);

  // Challenge data for "Kein Mord für den Fußball"
  const challengeData = {
    id: 'CHL-CMP-001',
    name: t('veto.challenge.moroccoDefender.name'),
    description: t('veto.challenge.moroccoDefender.description'),
    goal: 50, // kg
    current: challengeProgress,
    reward: {
      xp: 200,
      badge: t('veto.challenge.moroccoDefender.badge'),
    },
    multiplier: campaign.impactMultiplier,
    endDate: campaign.endDate,
  };

  const progress = (challengeData.current / challengeData.goal) * 100;
  const daysRemaining = campaign.endDate 
    ? Math.ceil((new Date(campaign.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : null;

  const handleJoin = () => {
    setHasJoined(true);
    // Simulate some initial progress
    setChallengeProgress(12);
  };

  const handleClose = () => {
    onClose();
    // Reset state when closing (for demo purposes)
    setTimeout(() => {
      setHasJoined(false);
      setChallengeProgress(0);
    }, 300);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={hasJoined ? t('veto.challenge.joined') : t('veto.challenge.joinChallenge')}
      description={hasJoined ? t('veto.challenge.trackProgress') : campaign.name}
      size="xl"
    >
      <div className="space-y-6">
        {/* Campaign Info */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-1">{campaign.name}</h3>
              {campaign.urgencyStatementKey ? (
                <a
                  href={campaign.urgencyStatementLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-forest-600 hover:underline flex items-center gap-1.5 transition-colors"
                >
                  {t(campaign.urgencyStatementKey)}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <p className="text-sm text-slate-600">{campaign.urgencyStatement}</p>
              )}
            </div>
            {campaign.impactMultiplier > 1 && (
              <Badge variant="default" size="sm" className="bg-amber-50 text-amber-700 border-amber-200">
                <Zap className="w-3 h-3 mr-1" />
                {t('veto.campaign.xImpact', { multiplier: campaign.impactMultiplier })}
              </Badge>
            )}
          </div>
          {daysRemaining !== null && daysRemaining > 0 && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock className="w-4 h-4" />
              <span>{t('veto.campaign.daysRemaining', { count: daysRemaining })}</span>
            </div>
          )}
        </div>

        {/* Challenge Details */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-forest-600" />
              <h4 className="font-semibold text-slate-900">{challengeData.name}</h4>
            </div>
            <p className="text-sm text-slate-600 mb-4">{challengeData.description}</p>

            {hasJoined ? (
              <>
                {/* Progress Display */}
                <div className="bg-white rounded-lg p-4 border border-slate-200 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">{t('veto.challenge.yourProgress')}</span>
                    <span className="text-sm font-semibold text-forest-600">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 mb-2">
                    <div
                      className="bg-forest-600 h-3 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>{challengeData.current} / {challengeData.goal} kg</span>
                    <span>{challengeData.goal - challengeData.current} kg {t('veto.challenge.toGo')}</span>
                  </div>
                </div>

                {/* Rewards Info */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-amber-600" />
                      <span className="text-xs text-slate-600">{t('veto.challenge.reward')}</span>
                    </div>
                    <p className="text-lg font-bold text-amber-700">{challengeData.reward.xp} XP</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 text-purple-600" />
                      <span className="text-xs text-slate-600">{t('veto.challenge.badge')}</span>
                    </div>
                    <p className="text-sm font-semibold text-purple-700">{challengeData.reward.badge}</p>
                  </div>
                </div>

                {/* Success Message */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-200 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-900 mb-1">{t('veto.challenge.joinedSuccess')}</p>
                    <p className="text-xs text-green-700">{t('veto.challenge.startContributing')}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Challenge Requirements */}
                <div className="bg-white rounded-lg p-4 border border-slate-200 mb-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">{t('veto.challenge.goal')}</span>
                      <span className="text-sm font-semibold text-slate-900">{challengeData.goal} kg</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">{t('veto.challenge.timeLimit')}</span>
                      <span className="text-sm font-semibold text-slate-900">
                        {daysRemaining} {t('veto.challenge.days')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">{t('veto.challenge.impactMultiplier')}</span>
                      <span className="text-sm font-semibold text-forest-600">
                        {challengeData.multiplier}x {t('veto.challenge.impact')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rewards Preview */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-amber-600" />
                      <span className="text-xs text-slate-600">{t('veto.challenge.reward')}</span>
                    </div>
                    <p className="text-lg font-bold text-amber-700">{challengeData.reward.xp} XP</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 text-purple-600" />
                      <span className="text-xs text-slate-600">{t('veto.challenge.badge')}</span>
                    </div>
                    <p className="text-sm font-semibold text-purple-700">{challengeData.reward.badge}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-slate-200">
          {hasJoined ? (
            <>
              <Button variant="secondary" onClick={handleClose} className="flex-1">
                {t('veto.challenge.close')}
              </Button>
              <Button variant="primary" onClick={handleClose} className="flex-1">
                {t('veto.challenge.viewProgress')}
              </Button>
            </>
          ) : (
            <>
              <Button variant="secondary" onClick={handleClose} className="flex-1">
                {t('common.cancel')}
              </Button>
              <Button variant="primary" onClick={handleJoin} className="flex-1">
                {t('veto.challenge.joinNow')}
              </Button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}

