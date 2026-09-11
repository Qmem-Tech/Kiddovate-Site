import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Kiddovate',
  description: 'Kiddovate terms of service — how families may use the app and website.',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
