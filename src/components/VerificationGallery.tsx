/**
 * VerificationGallery Component
 * 
 * Displays verification evidence photos in a grid layout
 * showing kg verified, date, and approval status.
 */

import { useTranslation } from 'react-i18next';
import { Card } from '@mira/ui';
import { Camera, CheckCircle } from 'lucide-react';
import { VerificationEvidence } from '../data/mockData';

export interface VerificationGalleryProps {
  verifications: VerificationEvidence[];
  className?: string;
}

export default function VerificationGallery({ 
  verifications, 
  className 
}: VerificationGalleryProps) {
  const { t } = useTranslation();

  return (
    <Card noPadding className={className}>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Camera className="w-5 h-5 text-forest-600" />
          <h3 className="font-semibold text-slate-900">{t('veto.verification.verificationEvidence')}</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {verifications.map((verification) => (
            <div key={verification.id} className="relative group">
              <div className="aspect-square rounded-lg bg-slate-200 overflow-hidden">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gradient-to-br from-forest-100 to-amber-100 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-slate-400" />
                </div>
              </div>
              <div className="absolute top-2 right-2">
                {verification.status === 'APPROVED' && (
                  <CheckCircle className="w-5 h-5 text-green-600 bg-white rounded-full" />
                )}
              </div>
              <div className="mt-1">
                <p className="text-xs font-medium text-slate-900">
                  {t('veto.verification.kgVerified', { kg: verification.kgVerified })}
                </p>
                <p className="text-xs text-slate-500">
                  {new Date(verification.date).toLocaleDateString()}
                </p>
                {verification.status === 'PENDING' && (
                  <p className="text-xs text-amber-600 mt-0.5">{t('veto.verification.pending')}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

