import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const rawGaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const gaMeasurementId = rawGaId
    ? (rawGaId.startsWith('G-') ? rawGaId : `G-${rawGaId}`)
    : undefined;

export const metadata: Metadata = {
    title: 'Kiddovate - Playful Learning for Kids',
    description: 'Join the fun! Download Kiddovate today.',
    icons: {
        icon: '/app_logo.png',
        apple: '/app_logo.png',
    },
    openGraph: {
        title: 'Kiddovate',
        description: 'Play, Learn, Grow!',
        images: ['/app_logo.png'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen flex flex-col">
                {gaMeasurementId ? (
                    <>
                        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                              window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());
                              gtag('config', '${gaMeasurementId}');
                            `}
                        </Script>
                    </>
                ) : null}
                {children}
            </body>
        </html>
    );
}
