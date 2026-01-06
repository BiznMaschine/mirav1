import { useTranslation } from 'react-i18next';
import { PageHeader, Card, MilestoneCard } from '@mira/ui';
import { currentCustomer } from '../../data/mockData';

export default function CustomerMilestones() {
  const { t } = useTranslation();
  
  const milestones = [
    {
      id: 'milestone-001',
      title: t('customer.impact.milestones.milestoneTitle', { kg: 10 }),
      description: t('customer.impact.milestones.milestoneDescription', { kg: 10 }),
      achievedAt: new Date('2024-11-01'),
      metrics: { foodKg: 10 },
    },
    {
      id: 'milestone-002',
      title: t('customer.impact.milestones.milestoneTitle', { kg: 25 }),
      description: t('customer.impact.milestones.milestoneDescription', { kg: 25 }),
      achievedAt: new Date('2024-12-15'),
      metrics: { foodKg: 25, neuterings: 1 },
    },
    {
      id: 'milestone-003',
      title: t('customer.impact.milestones.milestoneTitle', { kg: 50 }),
      description: t('customer.impact.milestones.milestoneDescription', { kg: 50 }),
      achievedAt: new Date('2025-02-01'),
      metrics: { foodKg: 50, neuterings: 2, rescues: 1 },
    },
  ];

  return (
    <div>
      <PageHeader
        title={t('customer.impact.milestones.title')}
        subtitle={t('customer.impact.milestones.subtitle')}
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
