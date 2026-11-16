import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource-variable/inter/index.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';
import './globals.css';
import './theme.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollFX } from '@/components/Motion';
import { JsonLd } from '@/components/ui';
import { SITE } from '@/lib/site';
import { orgLd } from '@/lib/seo';

const GA = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Bitrix24 Partner in Bengaluru | CRM, Web, Mobile and IT Solutions | Ausumn Labs',
    template: '%s | Ausumn Labs'
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.legalName,
  formatDetection: { telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined};

export const viewport: Viewport = { themeColor: '#F5F4E9', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <JsonLd data={orgLd()} />
        <Header />
        <main id="main">{children}</main>
        <ScrollFX />
        <Footer />
        {GA && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
