import { legalSectionsToFirestoreBody } from './privacy-policy-content';

export const termsOfServiceContent = {
  title: 'Terms of Service',
  lastUpdated: 'September 11, 2026',
  sections: [
    {
      heading: 'Agreement to These Terms',
      body: 'These Terms of Service ("Terms") govern your use of the Kiddovate mobile application, website, and related services (collectively, the "Services"). By downloading the app, creating an account, or using the Services, you agree to these Terms.\n\nKiddovate is designed for children ages 1–7 and is intended to be used under the supervision of a parent or legal guardian. If you are a parent or guardian, you are responsible for your child\'s use of the Services.',
    },
    {
      heading: 'Who May Use Kiddovate',
      body: 'Parents and guardians may set up a profile for a child and, if they choose, create a parent account with an email address and password.\n\nChildren should use the app only with a parent or guardian\'s permission. You represent that the information you provide (including your child\'s first name or nickname and age) is accurate and that you have the authority to provide it.',
    },
    {
      heading: 'Accounts and Profiles',
      body: 'You are responsible for keeping your parent account credentials confidential and for activity that occurs under your account.\n\nYou may update your child\'s profile in the app or request changes by contacting us. You may delete your parent account from the Account section of the app. Deleting an account does not automatically cancel an active subscription — please cancel that separately as described below.',
    },
    {
      heading: 'Subscriptions and Payments',
      body: 'Some features of the app may require a paid subscription. Subscriptions are billed and managed by the Apple App Store or Google Play, not by Kiddovate directly.\n\nBy purchasing a subscription, you agree to the payment terms of the applicable store. Prices, billing periods, and free-trial terms (if any) are shown at the time of purchase.\n\nYou can cancel auto-renewal at any time in your App Store or Play Store subscription settings. You will keep access until the end of the current billing period. Refunds, if available, are handled by Apple or Google according to their policies.\n\nDeleting your Kiddovate account does not cancel an active store subscription.',
    },
    {
      heading: 'Acceptable Use',
      body: 'You agree not to misuse the Services. For example, you may not:\n\n• Attempt to access another family\'s account or data\n• Interfere with or disrupt the Services\n• Copy, reverse engineer, or redistribute the app except as allowed by law\n• Use the Services for any unlawful purpose\n\nWe may suspend or terminate access if we reasonably believe these Terms have been violated.',
    },
    {
      heading: 'Intellectual Property',
      body: 'The Kiddovate name, logo, characters, games, stories, audio, and other content are owned by Kiddovate or its licensors and are protected by intellectual property laws. You may use the Services for personal, non-commercial family use only.\n\nYou may not copy or redistribute our content outside the app without our written permission.',
    },
    {
      heading: 'Third-Party Services',
      body: 'The Services rely on third parties to operate, including Firebase (Google) for authentication and data storage, RevenueCat for subscription status, and Apple or Google for in-app purchases.\n\nOur website and parent-facing app screens may also link to YouTube, TikTok, and www.kiddovate.app. Those links are intended for parents and guardians, not for children during play. We are not responsible for third-party sites or their terms.',
    },
    {
      heading: 'Disclaimers',
      body: 'The Services are provided for educational entertainment. We do not guarantee specific learning outcomes. The Services are provided "as is" and "as available," to the extent permitted by law.\n\nWe are not liable for delays or interruptions caused by your device, internet connection, or the app stores.',
    },
    {
      heading: 'Limitation of Liability',
      body: 'To the fullest extent permitted by law, Kiddovate and its operators will not be liable for any indirect, incidental, or consequential damages arising from your use of the Services. Our total liability for any claim relating to the Services will not exceed the amount you paid us for the Services in the twelve months before the claim, or if you paid nothing, twenty U.S. dollars (US $20).',
    },
    {
      heading: 'Changes to These Terms',
      body: 'We may update these Terms from time to time. When we make material changes, we will update the "Last updated" date and, where appropriate, notify parents through the app or by email. Continued use of the Services after an update means you accept the revised Terms.',
    },
    {
      heading: 'Contact Us',
      body: 'If you have questions about these Terms, please contact us at:\n\nEmail: support@kiddovate.com\n\nWe will respond within a reasonable timeframe.',
    },
  ],
};

/** Paste this into Firestore `app_legal/terms_of_service` as the `body` field. */
export const termsOfServiceFirestoreBody = legalSectionsToFirestoreBody(
  termsOfServiceContent.sections
);
