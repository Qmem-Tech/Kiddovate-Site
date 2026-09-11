import { LegalPage } from '@/components/legal-page';
import { aboutUsContent } from '@/lib/about-us-content';

export default function AboutPage() {
  return <LegalPage documentId="about_us" fallback={aboutUsContent} />;
}
