export type Destination = {
    dest_type: string; // "district" or "city"
    cc1: string; // Country code
    city_name: string;
    label: string;
    longitude: number;
    latitude: number;
    type: string; // "di" or "ci"
    region: string;
    city_ufi: number | null;
    name: string;
    roundtrip: string;
    country: string;
    image_url: string;
    dest_id: string;
    nr_hotels: number;
    lc: string;
    hotels: number;
  };
  
 export type DestinationResponse = {
    status: boolean;
    message: string;
    timestamp: number;
    data: Destination[];
  };
  

// Price Breakdown Type
interface PriceBreakdown {
    taxExceptions: any[];
    strikethroughPrice: {
      currency: string;
      value: number;
    };
    grossPrice: {
      currency: string;
      value: number;
    };
    benefitBadges: {
      identifier: string;
      explanation: string;
      text: string;
      variant: string;
    }[];
  }
  
  // Check-in/Check-out Type
  interface CheckInOut {
    fromTime: string;
    untilTime: string;
  }
  
  // Property Type
  interface Property {
    id: number;
    accuratePropertyClass: number;
    priceBreakdown: PriceBreakdown;
    reviewScoreWord: string;
    checkoutDate: string;
    qualityClass: number;
    name: string;
    checkin: CheckInOut;
    ufi: number;
    position: number;
    countryCode: string;
    checkinDate: string;
    reviewCount: number;
    photoUrls: string[];
    longitude: number;
    blockIds: string[];
    isPreferred: boolean;
    latitude: number;
    optOutFromGalleryChanges: number;
    checkout: CheckInOut;
    reviewScore: number;
    wishlistName: string;
    isFirstPage: boolean;
    isPreferredPlus: boolean;
    rankingPosition: number;
    propertyClass: number;
    currency: string;
    mainPhotoId: number;
  }
  
  // Hotel Type
 export  interface Hotel {
    hotel_id: number;
    accessibilityLabel: string;
    property: Property;
  }

  export type AttractionsSearchResponse = {
    status: boolean;
    message: string;
    timestamp: number;
    data: {
      products: {
        id: string;
        __typename: string;
        title: string;
        productId: string;
        productSlug: string;
        taxonomySlug: string;
        cityUfi: number;
        cityName: string;
        countryCode: string;
      }[];
      destinations: {
        id: string;
        __typename: string;
        ufi: number;
        country: string;
        cityName: string;
        productCount: number;
        cc1: string;
      }[];
    };
  };

  type DistanceToCity = {
    value: number;
    unit: string;
  };
  
  type LocationData = {
    id: string;
    type: string;
    name: string;
    code: string;
    city?: string;
    cityName: string;
    regionName?: string;
    region?: string;
    country: string;
    countryName: string;
    countryNameShort?: string;
    photoUri: string;
    distanceToCity?: DistanceToCity;
    parent?: string;
  };
  
  export type LocationResponse = {
    status: boolean;
    message: string;
    timestamp: number;
    data: LocationData[];
  };

  
  

  
 
  
  