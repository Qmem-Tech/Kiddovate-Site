import { LegalPage } from '@/components/legal-page';
import { privacyPolicyContent } from '@/lib/privacy-policy-content';

export default function PrivacyPolicyPage() {
  return <LegalPage documentId="privacy_policy" fallback={privacyPolicyContent} />;
}
