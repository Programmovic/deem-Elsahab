'use client';

import { useEffect } from 'react';

export default function GTM() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    (function (w: any, d: Document, s: string, l: string, i: string) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement; // ✅ Cast to HTMLScriptElement
      const dl = l !== 'dataLayer' ? '&l=' + l : '';

      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode?.insertBefore(j, f);
    })(window as any, document, 'script', 'dataLayer', 'GTM-WN9GFB44');
  }, []);

  return null;
}
