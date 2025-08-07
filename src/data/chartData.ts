export interface ChartDataPoint {
  month: string;
  legal: number;
  legalUK: number;
  trCanada: number;
  taxAccounting: number;
  thomsonReuters: number;
}

export const wordsToReviewData: ChartDataPoint[] = [
  {
    month: "Jan",
    legal: 59,
    legalUK: 588,
    trCanada: 309,
    taxAccounting: 151,
    thomsonReuters: 6236,
  },
  {
    month: "Feb",
    legal: 229,
    legalUK: 759,
    trCanada: 431,
    taxAccounting: 326,
    thomsonReuters: 6427,
  },
  {
    month: "Mar",
    legal: 244,
    legalUK: 759,
    trCanada: 428,
    taxAccounting: 352,
    thomsonReuters: 6280,
  },
  {
    month: "Apr",
    legal: 269,
    legalUK: 594,
    trCanada: 255,
    taxAccounting: 368,
    thomsonReuters: 6260,
  },
  {
    month: "May",
    legal: 279,
    legalUK: 587,
    trCanada: 261,
    taxAccounting: 358,
    thomsonReuters: 1516,
  },
  {
    month: "Jun",
    legal: 294,
    legalUK: 592,
    trCanada: 259,
    taxAccounting: 15,
    thomsonReuters: 509,
  },
  {
    month: "Jul",
    legal: 294,
    legalUK: 597,
    trCanada: 41,
    taxAccounting: 16,
    thomsonReuters: 510,
  },
];

export const misspellingsData: ChartDataPoint[] = [
  {
    month: "Jan",
    legal: 59,
    legalUK: 47,
    trCanada: 28,
    taxAccounting: 96,
    thomsonReuters: 132,
  },
  {
    month: "Feb",
    legal: 49,
    legalUK: 38,
    trCanada: 79,
    taxAccounting: 95,
    thomsonReuters: 120,
  },
  {
    month: "Mar",
    legal: 48,
    legalUK: 38,
    trCanada: 79,
    taxAccounting: 94,
    thomsonReuters: 130,
  },
  {
    month: "Apr",
    legal: 64,
    legalUK: 25,
    trCanada: 48,
    taxAccounting: 100,
    thomsonReuters: 157,
  },
  {
    month: "May",
    legal: 50,
    legalUK: 51,
    trCanada: 25,
    taxAccounting: 64,
    thomsonReuters: 118,
  },
  {
    month: "Jun",
    legal: 51,
    legalUK: 37,
    trCanada: 19,
    taxAccounting: 64,
    thomsonReuters: 119,
  },
  {
    month: "Jul",
    legal: 36,
    legalUK: 19,
    trCanada: 19,
    taxAccounting: 119,
    thomsonReuters: 118,
  },
];

export interface TotalCountsDataPoint {
  month: string;
  misspellings: number;
  wordsToReview: number;
  approvedWords: number;
}

export const totalCountsData: TotalCountsDataPoint[] = [
  { month: "Jan", misspellings: 362, wordsToReview: 7343, approvedWords: 0 },
  { month: "Feb", misspellings: 381, wordsToReview: 8172, approvedWords: 0 },
  { month: "March", misspellings: 389, wordsToReview: 8063, approvedWords: 22 },
  { month: "April", misspellings: 394, wordsToReview: 7746, approvedWords: 59 },
  { month: "May", misspellings: 308, wordsToReview: 3001, approvedWords: 473 },
  { month: "June", misspellings: 290, wordsToReview: 1669, approvedWords: 223 },
  { month: "July", misspellings: 311, wordsToReview: 1458, approvedWords: 89 },
];

export const chartColors = {
  legal: "#1f4e79",
  legalUK: "#ff7f00",
  trCanada: "#2ca02c",
  taxAccounting: "#17becf",
  thomsonReuters: "#9467bd",
  misspellings: "#1f4e79",
  wordsToReview: "#ff7f00",
  approvedWords: "#2ca02c",
};
