import { ActivityItineraies } from "./activityIten"
import { FlightItineraies } from "./flightIten"
import { HotelItineraies } from "./hotelIten"

export const Itenaries = () => {
    return (
        <>
       <div className="flex flex-col gap-5 mt-20 w-full " >
            <span className="flex flex-col gap-2 ">
                <p className="text-[#1D2433] font-semibold text-lg">Top Itineraies</p>
                <p className="text-sm ">Your trip itineraries are placed here</p>
            </span>
            <FlightItineraies />
            <HotelItineraies />
            <ActivityItineraies />
        </div>
        </>
    )
}
