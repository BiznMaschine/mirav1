import { Card, Button, Badge, PageHeader } from '@mira/ui';

export default function SubscriptionDetail() {
  const subscription = {
    id: 'sub-001',
    product: 'Premium Dog Food',
    sku: '12kg',
    price: 69.99,
    frequency: 'Every 4 weeks',
    status: 'active',
    nextDelivery: '2025-01-15',
    startDate: '2024-12-01',
  };

  return (
    <div>
      <PageHeader
        title="Subscription Details"
        subtitle="Manage your subscription settings"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card noPadding>
          <div className="p-6 space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-1">Product</p>
              <p className="font-semibold text-slate-900">{subscription.product} ({subscription.sku})</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Monthly Price</p>
              <p className="font-semibold text-forest-600">€{subscription.price.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Delivery Frequency</p>
              <p className="font-semibold text-slate-900">{subscription.frequency}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Status</p>
              <Badge variant="success">{subscription.status}</Badge>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Next Delivery</p>
              <p className="font-semibold text-slate-900">{subscription.nextDelivery}</p>
            </div>
          </div>
        </Card>

        <Card noPadding>
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Actions</h3>
            <div className="space-y-3">
              <Button variant="secondary" className="w-full">
                Change Frequency
              </Button>
              <Button variant="secondary" className="w-full">
                Pause Subscription
              </Button>
              <Button variant="danger" className="w-full">
                Cancel Subscription
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
