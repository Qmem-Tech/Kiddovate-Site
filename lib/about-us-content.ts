import { legalSectionsToFirestoreBody } from './privacy-policy-content';

export const aboutUsContent = {
  title: 'About Us',
  lastUpdated: 'September 10, 2026',
  sections: [
    {
      heading: 'Who We Are',
      body: 'Kiddovate is a learning app and media brand made for young children and the parents who raise them. We create playful games, songs, stories, and activities that help kids ages 1–7 build early skills — letters, numbers, language, music, and curiosity about the world — in a space designed to feel safe and joyful.\n\nWe build for families in English and Amharic, and we care as much about how a child feels while they play as we do about what they learn.',
    },
    {
      heading: 'What We Believe',
      body: 'Little kids learn best when they are having fun. Our job is to make that fun useful: short activities, colorful characters, and gentle repetition instead of pressure or noise.\n\nWe believe parents should stay in control. You choose the profile, you decide whether to create an account, and you manage any optional subscription. Children should be able to play without ads chasing them or links pulling them off the app.',
    },
    {
      heading: 'What You Will Find',
      body: 'Inside the Kiddovate app, families can:\n\n• Play educational games that grow with a child’s age\n• Learn through songs, stories, and hands-on activities\n• Keep a simple kid profile so the experience feels personal\n• Continue without an account, or sign in to sync across devices\n\nSome premium games and learning items may require a subscription. Subscriptions are billed through the App Store or Google Play, and you can cancel there at any time.',
    },
    {
      heading: 'Safety First',
      body: 'Kiddovate is built with child safety as a core requirement, not an afterthought. We do not show third-party advertising in the app. We collect only what we need to run the experience — typically a child’s first name or nickname and age, and a parent email if you create an account.\n\nParents can review, update, or delete a child’s information, and signed-in parents can delete their account from the app. If you have a question about privacy or your family’s data, write to us at support@kiddovate.com.',
    },
    {
      heading: 'Get in Touch',
      body: 'We would love to hear from parents, teachers, and partners.\n\nEmail: support@kiddovate.com\nWebsite: https://www.kiddovate.app\nYouTube: @kiddovate07 and @KiddovateEthiopia\n\nThank you for letting Kiddovate be part of your child’s day.',
    },
  ],
};

/** Paste this into Firestore `app_legal/about_us` as the `body` field. */
export const aboutUsFirestoreBody = legalSectionsToFirestoreBody(aboutUsContent.sections);
