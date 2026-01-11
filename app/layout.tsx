import type { Metadata } from 'next';
import './globals.css';

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
                {children}
            </body>
        </html>
    );
}
