/**
 * Footer Component
 * 
 * Global footer with attribution link to Fognini Tech.
 */

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-slate-200 bg-white py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-600">
          <p className="text-center sm:text-left">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <p className="text-center sm:text-right">
            {t('footer.createdBy')}{' '}
            <a
              href="https://www.fognini.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-600 hover:text-forest-700 underline font-medium transition-colors"
            >
              {t('footer.fogniniTech')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

