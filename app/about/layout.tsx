import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Kiddovate',
  description: 'Learn about Kiddovate — a safe learning app and media brand for kids ages 1–7.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
