import { LegalPage } from '@/components/legal-page';
import { termsOfServiceContent } from '@/lib/terms-of-service-content';

export default function TermsOfServicePage() {
  return <LegalPage documentId="terms_of_service" fallback={termsOfServiceContent} />;
}
