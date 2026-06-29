import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Kiddovate',
  description: 'Kiddovate privacy policy — how we protect your family\'s data.',
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
