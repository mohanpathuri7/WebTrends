import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';  // import Script here

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'WebTrends 2025 - Latest Web Development Trends',
  description: 'Discover the cutting-edge technologies and design patterns shaping the future of web development in 2025.',
  keywords: 'web development, 2025 trends, Next.js, React, modern design, AI interfaces',
  openGraph: {
    title: 'WebTrends 2025',
    description: 'Explore the latest web development trends for 2025',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LSDVFW4ZW9"
          strategy="afterInteractive"
          async
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LSDVFW4ZW9');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        {/* Google Tag Manager inserted automatically */}
        <GoogleTagManager gtmId="GTM-KNZ293DS" />
      </body>
    </html>
  );
}
