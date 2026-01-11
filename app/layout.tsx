import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kiddovate - Learn Through Play',
  description: 'Educational Gaming App for Kids. Learn through fun games, interactive lessons, and creative activities!',
  keywords: 'educational app, kids learning, games for children, interactive learning, Kiddovate',
  authors: [{ name: 'Kiddovate Team' }],
  openGraph: {
    title: 'Kiddovate - Learn Through Play',
    description: 'Educational Gaming App for Kids',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-orange-50">
        {children}
      </body>
    </html>
  );
}
