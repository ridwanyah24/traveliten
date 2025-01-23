'use client'
import { useRouter } from "next/navigation"
import { Button } from "./button"
import { Itenaries } from "./itineraies"

export const Dasboard = ()=> {
    return (
        <>
        <div className="p-4 bg-white flex flex-col gap-10">
            <ItenaryItems />
            <Itenaries />
        </div>
        </>
    )
}


const ItenaryItems = ()=>{
    return (
        <>
        <div className="flex flex-col gap-4">
            <p className="text-[24px] capitalize">Bahamas Family Trip</p>
            <span className="flex gap-2 text-[#676E7E]">
                <p>New York, United States of America </p> |
                <p>Solo Trip</p>
            </span>
            <div className="flex gap-10 items-center">
                <Activities />
                <Hotels />
                <Flights />
            </div>

        </div>
        </>
    )

}

const Activities = () => {
    const router = useRouter();
    return(
        <div className="flex flex-col gap-5 bg-[#000031] text-[#ffff] p-4 rounded-md w-[270px]">
            <span className="flex flex-col gap-2">
                <p className="text-[16px] font-semibold">Activities</p>
                <p className="text-[14px]">Build, personalize, and optimize your itineraries with our trip planner.</p>
            </span>
            <Button variant={"default"} className="w-[242px] font-semibold mx-auto h-[46px]" onClick={()=>router.push("/addAttraction")} >Add Activities</Button>
        </div>
    )
}

const Hotels = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-5 bg-[#E7F0FF] text-[#1D2433] p-4 rounded-md w-[270px]">
            <span className="flex flex-col gap-2">
                <p className="text-[16px] text-[#000000] font-semibold">Hotels</p>
                <p className="text-[14px]">Build, personalize, and optimize your itineraries with our trip planner.</p>
            </span>
            <Button variant={"default"} className="w-[242px] font-semibold mx-auto h-[46px] text-[#ffff]" onClick={()=>router.push("/addHotelPage")}>Add Hotels</Button>
        </div>
    )
}

const Flights = () => {
    return(
        <>
        <div className="flex flex-col gap-5 bg-[#0D6EFD] text-[#ffff] p-4 rounded-md w-[270px]">
            <span className="flex flex-col gap-2">
                <p className="text-[16px] font-semibold">Hotels</p>
                <p className="text-[14px]">Build, personalize, and optimize your itineraries with our trip planner.</p>
            </span>
            <Button variant={"secondary"} className="w-[242px] font-semibold mx-auto h-[46px] text-[#0D6EFD]">Add Flight</Button>
        </div>
        </>
    )
}
