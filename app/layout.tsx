import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'NEXFUGA | India’s AI-Powered Smart Infrastructure Platform',
  description:
    'Transforming enterprise buildings, industrial sites, and urban spaces across India with integrated AI, IoT, Solar Energy, BMS, EV Charging, and Smart Automation.',
  keywords: [
    'Smart Infrastructure India',
    'AI Building Automation',
    'Commercial BMS Systems',
    'Enterprise IoT',
    'Solar Rooftop Integration',
    'NEXFUGA',
  ],
  authors: [{ name: 'NEXFUGA Technologies' }],
  openGraph: {
    title: 'NEXFUGA | AI-Powered Smart Infrastructure',
    description:
      'Intelligent, sustainable, and secure infrastructure solutions for modern enterprises in India.',
    url: 'https://nexfuga.com',
    siteName: 'NEXFUGA',
    images: [
      {
        url: 'https://nexfuga.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NEXFUGA Smart Infrastructure Platform',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXFUGA | Smart Infrastructure Platform',
    description: 'AI-driven IoT, BMS, Security, and Energy Solutions.',
    images: ['https://nexfuga.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NEXFUGA',
    url: 'https://nexfuga.com',
    logo: 'https://nexfuga.com/logo.png',
    description: 'AI-Powered Smart Infrastructure & Automation Solutions in India.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://linkedin.com/company/nexfuga',
      'https://twitter.com/nexfuga',
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-[#F8FAFC] text-[#0B132B] antialiased selection:bg-[#00D2FF]/20 selection:text-[#0072CE]">
        {children}
      </body>
    </html>
  );
}