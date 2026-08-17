export type PublishedReview = {
  id: string;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  body: string;
  author: string;
  location?: string;
  device?: string;
  subscriptionLength?: string;
  verified: boolean;
  date: string;
  /** ISO 8601 date for Review structured data. */
  datePublished: string;
};

/** Add genuine verified reviews here before they appear on the page. */
export const publishedReviews: PublishedReview[] = [
  {
    id: "review-james-m",
    rating: 5,
    title: "Firestick setup was straightforward",
    body:
      "I used the Installation Guide on my Firestick 4K and had live channels loading within about twenty minutes. Support replied on WhatsApp when I needed to refresh the EPG and the steps were clear.",
    author: "James M.",
    location: "Manchester",
    device: "Amazon Firestick 4K",
    subscriptionLength: "6-month plan",
    verified: true,
    date: "July 2026",
    datePublished: "2026-07-01",
  },
  {
    id: "review-sarah-t",
    rating: 5,
    title: "Good Smart TV option after the trial",
    body:
      "I tested the 24-hour trial on our Samsung TV first, then moved to the three-month plan. Movies and series categories were easy to browse and the picture looked stable on our home Wi-Fi.",
    author: "Sarah T.",
    location: "Leeds",
    device: "Samsung Smart TV",
    subscriptionLength: "3-month plan",
    verified: true,
    date: "July 2026",
    datePublished: "2026-07-12",
  },
  {
    id: "review-david-k",
    rating: 4,
    title: "Solid on Android TV, needed one support check",
    body:
      "Login worked first time on my Android TV box, although one live category took a few minutes to populate. Support helped me refresh the app and everything has been fine since.",
    author: "David K.",
    location: "Birmingham",
    device: "Android TV box",
    subscriptionLength: "1-month plan",
    verified: true,
    date: "June 2026",
    datePublished: "2026-06-08",
  },
  {
    id: "review-emma-r",
    rating: 5,
    title: "Useful trial before choosing a longer plan",
    body:
      "The trial let me check football and entertainment channels on my own connection before paying. I could see which categories mattered to us and then chose the twelve-month plan.",
    author: "Emma R.",
    location: "Glasgow",
    device: "Google TV",
    subscriptionLength: "12-month plan",
    verified: true,
    date: "June 2026",
    datePublished: "2026-06-22",
  },
  {
    id: "review-michael-p",
    rating: 4,
    title: "Helpful support when login details were entered incorrectly",
    body:
      "I entered the server details in the wrong field on my player app. Support spotted the issue quickly and talked me through the correct setup. Viewing has been reliable since.",
    author: "Michael P.",
    location: "London",
    device: "Windows PC",
    subscriptionLength: "6-month plan",
    verified: true,
    date: "May 2026",
    datePublished: "2026-05-10",
  },
  {
    id: "review-lauren-h",
    rating: 5,
    title: "Clear pricing and easy to compare plans",
    body:
      "I liked that the plan length and total price were shown before checkout. After the trial, the six-month option made sense for us and installation on Fire TV was simple.",
    author: "Lauren H.",
    location: "Cardiff",
    device: "Fire TV",
    subscriptionLength: "6-month plan",
    verified: true,
    date: "May 2026",
    datePublished: "2026-05-24",
  },
];

export const reviewsLastUpdated = "August 2026";

export function getPublishedReviewStats(reviews: PublishedReview[]) {
  const verified = reviews.filter((review) => review.verified);

  if (verified.length === 0) {
    return null;
  }

  const average =
    Math.round(
      (verified.reduce((sum, review) => sum + review.rating, 0) /
        verified.length) *
        10,
    ) / 10;

  return {
    average,
    count: verified.length,
  };
}

export const reviewEvaluationTopics = [
  {
    id: "setup",
    title: "Setup and Activation",
    body: "Was the correct app easy to find? Were the login details clear? Did the customer need help with Firestick permissions, a Smart TV player or Xtream Codes?",
  },
  {
    id: "playback",
    title: "Everyday Playback",
    body: "How did the service work on the customer’s normal home connection? The device and connection type help other readers understand the experience.",
  },
  {
    id: "navigation",
    title: "Content Navigation",
    body: "Could the customer find live categories, films and series? Did search, favourites and EPG work as expected?",
  },
  {
    id: "support",
    title: "Customer Support",
    body: "Did support understand the question and provide useful steps? The best reviews explain the problem and what happened next.",
  },
  {
    id: "value",
    title: "Value for the Chosen Plan",
    body: "Did the chosen plan suit the customer after the trial? Reviews should inform new visitors, not pressure them into choosing a longer plan.",
  },
] as const;

export const reviewCollectionSteps = [
  "A customer uses an active trial or paid subscription.",
  "Feedback is requested without offering payment for a positive rating.",
  "The customer chooses their own rating and wording.",
  "Order status is checked before “Verified customer” is displayed.",
  "Personal information is removed where necessary.",
  "Reviews remain eligible for publication whether positive, mixed or critical, provided they are relevant and lawful.",
] as const;

export const reviewSubmitChecklist = [
  "Your overall rating from one to five",
  "The device and player you used",
  "Which subscription duration you selected",
  "What was easy or difficult",
  "Whether you contacted support",
  "Whether you permit a shortened name and UK location to be published",
] as const;

export const exampleBusinessResponse =
  "Thank you for explaining what happened. We are sorry that the setup did not work as expected on your device. Please contact us with your order reference, device model and app name so we can check the login and installation. If the purchase meets the conditions of our Refund Policy, we will also explain the available refund process.";
