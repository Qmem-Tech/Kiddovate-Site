export type LegalSection = {
  heading: string;
  body: string;
};

export function legalSectionsToFirestoreBody(sections: LegalSection[]): string {
  return sections
    .map((section) => `${section.heading}\n\n${section.body}`)
    .join('\n\n');
}

export const privacyPolicyContent = {
  title: 'Privacy Policy',
  lastUpdated: 'September 11, 2026',
  sections: [
    {
      heading: 'Introduction',
      body: 'Kiddovate ("we," "our," or "us") is committed to protecting the privacy of children and families who use our mobile application, website, and related services (collectively, the "Services"). This Privacy Policy explains what information we collect, how we use it, and the choices available to parents and guardians.\n\nOur Services are designed for children ages 1–7 and are built with child safety as our top priority. We take the Children\'s Online Privacy Protection Act (COPPA) and other applicable privacy laws seriously.',
    },
    {
      heading: 'Information We Collect',
      body: 'We collect only the minimum information needed to provide a safe and enjoyable experience:\n\n• Profile information: A child\'s first name (or nickname) and age, provided by a parent or guardian during setup.\n• Account information: If a parent creates an account, we may collect an email address and display name for account management and support.\n• Account identifiers: A technical user ID from Firebase, including if you use the app without creating a parent email login.\n• Usage data: Basic information about how the app is used (such as which activities are accessed) so we can improve our content and features. If a parent is signed in, this may be associated with their account email or name.\n• Device information: General device type and operating system version to ensure compatibility and performance.\n• Subscription information: If you purchase a subscription, payment is processed by Apple or Google. We receive confirmation of your subscription status but do not collect or store payment card details.\n• Newsletter information: If you join our website mailing list, we collect the parent name, child\'s name, and email address you enter on that form.\n\nWe do not collect precise geolocation, contact lists, photos, or other sensitive personal data from children.',
    },
    {
      heading: 'How We Use Information',
      body: 'We use the information we collect to:\n\n• Personalize the learning experience based on the child\'s age\n• Provide and improve our educational content and games\n• Manage subscriptions and account access\n• Respond to parent or guardian support requests\n• Maintain the security and proper functioning of our Services\n• Send optional newsletters or updates to parents who have opted in on our website',
    },
    {
      heading: 'Information Sharing',
      body: 'We do not sell, rent, or trade personal information — especially children\'s information — to third parties.\n\nWe may share limited data with trusted service providers who help us operate our Services, such as:\n\n• Firebase (Google) — authentication, database, and cloud storage\n• Google Analytics — visits and button clicks on the parent website, including App Store and Google Play links. This is not used inside the children\'s app\n• RevenueCat — subscription management\n• Apple App Store and Google Play — in-app purchase processing\n\nThese providers are contractually required to protect your data and may only use it to perform services on our behalf.',
    },
    {
      heading: 'Children\'s Privacy (COPPA)',
      body: 'Kiddovate is designed for children and we take COPPA compliance seriously:\n\n• We do not display third-party advertising in our app\n• We do not place YouTube, TikTok, or website links inside games or learning activities. Links to our website and social channels appear on parent-facing screens such as Account, About, and Contact\n• We do not condition a child\'s participation on providing more personal information than is reasonably necessary\n• Parents and guardians can review, update, or request deletion of their child\'s information at any time by contacting us or using the in-app account tools\n\nParents and guardians set up the child\'s profile. Where the law requires verifiable parental consent before we collect a child\'s personal information, we will obtain it before doing so.',
    },
    {
      heading: 'Data Security',
      body: 'We use industry-standard security measures to protect the information we collect, including encrypted connections (HTTPS/TLS) and secure cloud infrastructure. While no method of transmission over the internet is 100% secure, we work continuously to safeguard your family\'s data.',
    },
    {
      heading: 'Data Retention',
      body: 'We retain personal information only for as long as necessary to provide our Services and fulfill the purposes described in this policy. If you request deletion of your account or your child\'s profile, we will delete associated personal data within a reasonable timeframe, except where retention is required by law.',
    },
    {
      heading: 'Your Rights and Choices',
      body: 'Parents and guardians have the right to:\n\n• Access the personal information we hold about their child\n• Request correction of inaccurate information\n• Request deletion of their child\'s profile and associated data\n• Withdraw consent for data collection at any time\n• Opt out of marketing emails by using the unsubscribe link in any email\n\nTo exercise any of these rights, please contact us using the information below.',
    },
    {
      heading: 'Third-Party Links',
      body: 'Our website and parent-facing app screens may contain links to YouTube, TikTok, and www.kiddovate.app. These links are intended for parents and guardians, not for children during play. We are not responsible for the privacy practices of third-party websites and encourage you to review their privacy policies.',
    },
    {
      heading: 'Changes to This Policy',
      body: 'We may update this Privacy Policy from time to time. When we make material changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify parents through the app or by email. We encourage you to review this policy periodically.',
    },
    {
      heading: 'Contact Us',
      body: 'If you have questions about this Privacy Policy or wish to exercise your rights regarding your child\'s data, please contact us at:\n\nEmail: support@kiddovate.com\n\nWe will respond to your request within a reasonable timeframe.',
    },
  ],
};

/** Paste this into Firestore `app_legal/privacy_policy` as the `body` field. */
export const privacyPolicyFirestoreBody = legalSectionsToFirestoreBody(
  privacyPolicyContent.sections
);
