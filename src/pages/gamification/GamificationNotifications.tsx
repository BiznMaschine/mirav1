/**
 * GamificationNotifications Component
 * 
 * Notification system showcase:
 * - Notification types
 * - Channels
 * - Notification preferences
 * - Notification history
 * - Quiet hours
 */

import { useTranslation } from 'react-i18next';
import { PageHeader, Card, CardHeader, CardContent, Badge, Button } from '@mira/ui';
import { Bell, Smartphone, Mail, MessageSquare, Clock, Settings, CheckCircle2 } from 'lucide-react';

export default function GamificationNotifications() {
  const { t } = useTranslation();
  const notificationTypes = [
    { id: '1', type: 'order.paid', title: 'New Sale! 🎉', channel: ['push', 'in_app'], priority: 'high', enabled: true },
    { id: '2', type: 'commission.credited', title: 'Commission Credited', channel: ['push', 'in_app'], priority: 'normal', enabled: true },
    { id: '3', type: 'rank.changed', title: 'Congratulations! 🏆', channel: ['push', 'email', 'in_app'], priority: 'high', enabled: true, nonDisableable: true },
    { id: '4', type: 'streak.expiring', title: 'Streak at Risk! 🔥', channel: ['push'], priority: 'urgent', enabled: true, nonDisableable: true },
    { id: '5', type: 'challenge.completed', title: 'Challenge Completed! 🎯', channel: ['push', 'in_app'], priority: 'high', enabled: true },
    { id: '6', type: 'badge.earned', title: 'Badge Earned! 🏅', channel: ['push', 'in_app'], priority: 'high', enabled: true, nonDisableable: true },
  ];

  const channels = [
    { name: 'Push Notifications', icon: Smartphone, description: 'Time-sensitive alerts', priorityRange: 'urgent, high, normal' },
    { name: 'Email', icon: Mail, description: 'Weekly summaries, rank changes', priorityRange: 'high, normal, low' },
    { name: 'In-App', icon: MessageSquare, description: 'All gamification events', priorityRange: 'all' },
    { name: 'SMS', icon: Smartphone, description: 'Critical alerts only', priorityRange: 'urgent' },
  ];

  const recentNotifications = [
    { id: '1', title: 'Badge Earned! 🏅', body: 'You\'ve unlocked "First Sale"', time: '2 hours ago', read: false },
    { id: '2', title: 'Streak Milestone! 🔥', body: '30-day streak achieved', time: '1 day ago', read: true },
    { id: '3', title: 'New Sale! 🎉', body: 'Customer just ordered! You earned €25 + 5kg impact.', time: '2 days ago', read: true },
    { id: '4', title: 'Challenge Progress', body: 'Winter Impact Challenge: 64% complete', time: '3 days ago', read: true },
    { id: '5', title: 'Commission Credited', body: '€125 commission added to your account', time: '5 days ago', read: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('gamification.notifications.title')}
        subtitle={t('gamification.notifications.subtitle')}
      />

      {/* Notification Channels */}
      <Card>
        <CardHeader title={t('gamification.notifications.channels')} />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.name}
                  className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-slate-600" />
                    <h4 className="font-semibold text-slate-900">{t(`gamification.notifications.${channel.name.toLowerCase().replace(/\s+/g, '')}`, channel.name)}</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{channel.description}</p>
                  <p className="text-xs text-slate-500">{t('gamification.notifications.priority')}: {channel.priorityRange}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Notification Types */}
      <Card>
        <CardHeader title={t('gamification.notifications.types')} />
        <CardContent className="p-6">
          <div className="space-y-3">
            {notificationTypes.map((notif) => (
              <div
                key={notif.id}
                className="p-4 bg-slate-50 rounded-lg border border-slate-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-slate-900">{notif.title}</h4>
                      {notif.nonDisableable && (
                        <Badge variant="error" size="sm">Required</Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Event: {notif.type} • Priority: {notif.priority}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-slate-600">
                      {notif.channel.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}
                    </div>
                    {!notif.nonDisableable && (
                      <Button size="sm" variant={notif.enabled ? 'secondary' : 'primary'}>
                        {notif.enabled ? t('gamification.notifications.disable') : t('gamification.notifications.enable')}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader title={t('gamification.notifications.preferences')} />
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">{t('gamification.notifications.quietHours')}</p>
                <p className="text-xs text-slate-600">{t('gamification.notifications.noPushSMSDuringHours')}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900">22:00 - 08:00</p>
                <Button size="sm" variant="secondary">{t('gamification.notifications.change')}</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">{t('gamification.notifications.throttling')}</p>
                <p className="text-xs text-slate-600">{t('gamification.notifications.sameNotificationTypeLimited')}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900">{t('gamification.notifications.oncePer24h')}</p>
                <Button size="sm" variant="secondary">{t('gamification.notifications.change')}</Button>
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-2">
                <Bell className="w-4 h-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-slate-900">{t('gamification.notifications.priorityOverride')}</p>
                  <p className="text-xs text-slate-600">
                    {t('gamification.notifications.urgentNotificationsBypass')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification History */}
      <Card>
        <CardHeader title={t('gamification.notifications.recent')} />
        <CardContent className="p-6">
          <div className="space-y-2">
            {recentNotifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-3 rounded-lg border ${
                  notif.read
                    ? 'bg-slate-50 border-slate-200'
                    : 'bg-blue-50 border-blue-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-slate-900">{notif.title}</p>
                      {!notif.read && <Badge variant="info" size="sm">{t('gamification.notifications.new')}</Badge>}
                    </div>
                    <p className="text-sm text-slate-600 mb-1">{notif.body}</p>
                    <p className="text-xs text-slate-500">{notif.time}</p>
                  </div>
                  {!notif.read && (
                    <Button size="sm" variant="ghost">
                      <CheckCircle2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Non-Disableable Notifications Info */}
      <Card>
        <CardHeader title={t('gamification.notifications.required')} />
        <CardContent className="p-6">
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-2">
              <Settings className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900 mb-2">
                  {t('gamification.notifications.someNotificationsCannotBeDisabled')}
                </p>
                <p className="text-sm text-slate-600 mb-3">
                  {t('gamification.notifications.requiredForCompliance')}
                </p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• {t('gamification.notifications.rankChanges')}</li>
                  <li>• {t('gamification.notifications.streakAtRisk')}</li>
                  <li>• {t('gamification.notifications.badgeEarned')}</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

