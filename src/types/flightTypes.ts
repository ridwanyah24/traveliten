export type FlightOffer = {
    token: string;
    segments: Segment[];
    priceBreakdown: PriceBreakdown;
    travellerPrices: TravellerPrice[];
    includedProductsBySegment: IncludedProductsBySegment[];
    amenities: Amenity[];
    totalTime: number;
    tripType:string;
    cabinClass: string;
    flightInfo: FlightInfo;
    carrierInfo: CarrierInfo;
  };
  
  type Segment = {
    departureAirport: Airport;
    arrivalAirport: Airport;
    departureTime: string;
    arrivalTime: string;
    legs: Leg[];
    isAtolProtected: boolean;
    showWarningDestinationAirport: boolean;
    showWarningOriginAirport: boolean;
    travellerCabinLuggage:IncludedProductsBySegment[];
  };
  
  type Airport = {
    type: string;
    code: string;
    name: string;
    city: string;
    cityName: string;
    country: string;
    countryName: string;
    province?: string;
  };
  
  type Leg = {
    departureTime: string;
    arrivalTime: string;
    departureAirport: Airport;
    arrivalAirport: Airport;
    cabinClass: string;
    flightInfo: FlightInfo;
    totalTime: number;
    carriersData: Carrier[];
    amenities: Amenity[]
  };

  
  type FlightInfo = {
    flightNumber: number;
    planeType?: string;
    facilities: Facility[];
  };
  
  type Facility = {
    category: string;
    type?: string;
    model?: string;
    legroom?: string;
    pitch?: number;
    pitchUnit?: string;
  };
  
  type CarrierInfo = {
    operatingCarrier: string;
    marketingCarrier: string;
    carriers: Carrier[];
  };
  
  type Carrier = {
    name: string;
    code: string;
    logo: string;
  };
  
  type Amenity = {
    category: string;
    type?: string;
    legroom?: string;
    pitch?: number;
    pitchUnit?: string;
  };
  
  type PriceBreakdown = {
    total: CurrencyAmount;
    baseFare: CurrencyAmount;
    fee: CurrencyAmount;
    tax: CurrencyAmount;
    totalRounded: CurrencyAmount;
    discount: CurrencyAmount;
    totalWithoutDiscount: CurrencyAmount;
    carrierTaxBreakdown: CarrierTaxBreakdown[];
  };
  
  type CurrencyAmount = {
    currencyCode: string;
    units: number;
    nanos: number;
  };
  
  type CarrierTaxBreakdown = {
    carrier: Carrier;
    avgPerAdult: CurrencyAmount;
    avgPerChild: CurrencyAmount;
  };
  
  type TravellerPrice = {
    travellerReference: string;
    travellerType: string;
    travellerPriceBreakdown: PriceBreakdown;
  };
  
  type IncludedProductsBySegment = {
    travellerReference: string;
    luggageAllowance: Product;
  };
  
  type TravellerProduct = {
    type: string;
    product: Product;
  };
  
  type Product = {
    luggageType: string;
    ruleType?: string;
    maxPiece?: number;
    maxWeightPerPiece?: number;
    massUnit?: string;
    sizeRestrictions?: SizeRestrictions;
  };
  
  type SizeRestrictions = {
    maxLength: number;
    maxWidth: number;
    maxHeight: number;
    sizeUnit: string;
  };
  