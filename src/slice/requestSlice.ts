import { RootState } from "@/store/store";
import { AttractionsSearchResponse, DestinationResponse } from "@/types/types";
import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"


const baseQuery = fetchBaseQuery({
    baseUrl: "https://booking-com15.p.rapidapi.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
        // Set the required headers
        headers.set("x-rapidapi-key", "91c600e9damsh2952301969a78ccp105f47jsn637b7ae58a58");
        headers.set("x-rapidapi-host", "booking-com15.p.rapidapi.com");

        // const token = getState()?.auth?.token;
        // if (token) {
        //     headers.set("Authorization", `Bearer ${token}`);
        // }

        return headers;
    },
});


interface GetHotelsQueryParams {
    dest_id: string;
    search_type: string;
    arrival_date: string | null;
    departure_date: string | null;
}

interface GetActivityQueryParams {
    id: string
}

export const request = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: [],
    endpoints: (builder) => ({
        getDestination: builder.query<DestinationResponse, void>({
            query: () => ({
                url: `/hotels/searchDestination?query=man`,
            }),
        }),
        getHotels: builder.query<any, GetHotelsQueryParams>({
            query: ({ dest_id, search_type, arrival_date, departure_date }) => ({
                url: `/hotels/searchHotels`,
                params: {
                    dest_id,
                    search_type,
                    departure_date,
                    arrival_date,
                },
            }),
        }),
        getAttractionLocation: builder.query<AttractionsSearchResponse, void>({
            query: ()=>({
                url: `/attraction/searchLocation?query=new`
            })
        }),
        getAttraction: builder.query<any, GetActivityQueryParams>({
            query: ({id})=> ({
                url: `/attraction/searchAttractions`,
                params: {
                    id,
                }
            })
        }),
    }),
});


export const {
    useGetDestinationQuery,
    useGetHotelsQuery,
    useGetAttractionLocationQuery,
    useGetAttractionQuery,
} = request