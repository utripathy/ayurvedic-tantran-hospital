import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Ayurveda Tantran Hospital',
    template: '%s | Ayurveda Tantran Hospital',
  },

  icons: {
    icon: '/icon.ico',
  },

  description:
    'Ayurveda Tantran Hospital provides holistic Ayurvedic healthcare, Panchakarma therapies, wellness treatments, and natural healing solutions.',

  keywords: ['Ayurveda', 'Ayurvedic Hospital', 'Panchakarma', 'Ayurvedic Treatment', 'Natural Healing', 'Wellness'],

  authors: [
    {
      name: 'Ayurveda Tantran Hospital',
    },
  ],

  creator: 'Ayurveda Tantran Hospital',

  metadataBase: new URL('https://ayurvedatantran.com'),

  openGraph: {
    title: 'Ayurveda Tantran Hospital',

    description: 'Holistic Ayurvedic healthcare and wellness treatments.',

    url: 'https://ayurvedatantran.com',

    siteName: 'Ayurveda Tantran Hospital',

    locale: 'en_US',

    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        {children}
        <Toaster position='top-right' richColors />
      </body>
    </html>
  );
}
