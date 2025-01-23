import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductResponse {
  __typename: string;
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  representativePrice: {
    __typename: string;
    chargeAmount: number;
    currency: string;
    publicAmount: number;
  };
  primaryPhoto: {
    __typename: string;
    small: string;
  };
  reviewsStats: {
    __typename: string;
    allReviewsCount: number;
    percentage: string;
    combinedNumericStats: {
      __typename: string;
      average: number;
      total: number;
    };
  };
  ufiDetails: {
    __typename: string;
    bCityName: string;
    ufi: number;
    url: {
      __typename: string;
      country: string;
    };
  };
  offers: Array<{
    supportedFeatures: {
      __typename: string;
      nativeApp: boolean;
    };
    flags: Array<{
      __typename: string;
      flag: string;
      value: boolean;
    }>;
    rank: number;
  }>;
}

interface ProductsState {
  products: ProductResponse[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.status = "loading";
      state.error = null;
    },
    setDestination(state, action: PayloadAction<ProductResponse[]>) {
        state.products = action.payload;
    },
    fetchProductsSuccess(state, action: PayloadAction<ProductResponse[]>) {
      state.status = "succeeded";
      state.products = action.payload;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    clearDestination(state) {
      state.products = [];
      state.status = "idle";
      state.error = null;
    },
    addDestination(state, action: PayloadAction<ProductResponse>) {
        state.products.push(action.payload);
    },
    deleteDestinationAtIndex(state, action: PayloadAction<number>) {
        state.products.splice(action.payload, 1); // Remove hotel at the specified index
    },
  },
});

export const {
  clearDestination,
  addDestination,
  deleteDestinationAtIndex, 
  setDestination,
} = productsSlice.actions;

export default productsSlice.reducer;

export const getAllActivities = (state: RootState) => state.activity.products