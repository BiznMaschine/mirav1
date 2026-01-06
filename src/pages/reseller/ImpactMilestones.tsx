import { useTranslation } from 'react-i18next';
import { PageHeader, Card, MilestoneCard } from '@mira/ui';

export default function ImpactMilestones() {
  const { t } = useTranslation();
  
  const milestones = [
    {
      id: 'milestone-001',
      title: t('reseller.impact.milestones.milestoneTitle', { kg: 100 }),
      description: t('reseller.impact.milestones.milestoneDescription', { kg: 100 }),
      achievedAt: new Date('2024-11-15'),
      metrics: { foodKg: 100 },
    },
    {
      id: 'milestone-002',
      title: t('reseller.impact.milestones.milestoneTitle', { kg: 500 }),
      description: t('reseller.impact.milestones.milestoneDescription', { kg: 500 }),
      achievedAt: new Date('2024-12-01'),
      metrics: { foodKg: 500, neuterings: 3 },
    },
    {
      id: 'milestone-003',
      title: t('reseller.impact.milestones.milestoneTitle', { kg: 1000 }),
      description: t('reseller.impact.milestones.milestoneDescription', { kg: 1000 }),
      achievedAt: new Date('2025-01-15'),
      metrics: { foodKg: 1000, neuterings: 7, rescues: 2 },
    },
  ];

  return (
    <div>
      <PageHeader
        title={t('reseller.impact.milestones.title')}
        subtitle={t('reseller.impact.milestones.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {milestones.map((milestone) => (
          <MilestoneCard
            key={milestone.id}
            title={milestone.title}
            description={milestone.description}
            achievedAt={milestone.achievedAt}
            metrics={milestone.metrics}
            onShare={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
