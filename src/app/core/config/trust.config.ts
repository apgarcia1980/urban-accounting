interface TrustConfig {
  experienceYears: number | null;
  experienceSuffix: string;
  clientsSuffix: string;
  satisfiedClients: number | null;
  google: {
    rating: number | null;
    reviewCount: number | null;
    reviewsUrl: string | null;
  };
}

// Verified 2026-09-10: experience/client counters on https://www.urbanaccounting.net/.
// Google rating/count checked on the profile linked by the original site (URL below).
// Manual snapshot: review figures may change; update after checking the profile.
// Populate only with verified business figures and the actual Google Business Profile review URL.
// Null means unverified, never zero. The reference design is not a source of business data.
export const trustConfig: TrustConfig = {
  experienceYears: 20,
  experienceSuffix: '+',
  clientsSuffix: '+',
  satisfiedClients: 300,
  google: {
    rating: 5,
    reviewCount: 10,
    reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJy1qzEIa22YgRpZC7jNbu2LA',
  },
};
