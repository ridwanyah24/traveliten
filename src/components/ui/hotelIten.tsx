'use client'
import { useState } from "react"
import { DatePicker } from "./datepicker"
import { Button } from "./button"
import {
    Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from "./select"
import { useGetDestinationQuery, useGetHotelsQuery } from "@/slice/requestSlice"
import React from "react"
import { formatDateToYYYYMMDD } from "../../app/util/util"
import { set } from "date-fns"
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks"
import { addHotel, deleteHotelAtIndex, getAllHotels, setHotels } from "@/slice/hotelSlice"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"
import { ActivityItineraies } from "./activityIten"
import { FlightItenary } from "./flightIten"
  



export const HotelItineraies = () => {
    const dispatch = useAppDispatch();
    const hotels = useAppSelector(getAllHotels)
    
    const router = useRouter();
    console.log(hotels);

    const handleDeleteHotel = (index: number)=>{
        dispatch(deleteHotelAtIndex(index))
    }
    return (
        <div className="bg-[#344054] rounded-lg min-h-[300px] w-full p-4">
            <div className="flex justify-between w-full p-4">
                <svg width="88" height="28" viewBox="0 0 88 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 18.8748H22.125V7.7307L22.7353 7.60039C22.8818 7.57171 23.0212 7.51415 23.1453 7.43106C23.2693 7.34798 23.3756 7.24102 23.4579 7.11644C23.5402 6.99186 23.5969 6.85215 23.6246 6.70544C23.6524 6.55873 23.6506 6.40796 23.6195 6.26193C23.5884 6.1159 23.5286 5.97752 23.4434 5.85486C23.3583 5.7322 23.2496 5.62772 23.1236 5.5475C22.9977 5.46728 22.8571 5.41293 22.7099 5.38762C22.5628 5.36231 22.4121 5.36654 22.2666 5.40008L1.26656 9.90008C0.995421 9.95858 0.755451 10.1152 0.592735 10.3398C0.430019 10.5645 0.35603 10.8413 0.384977 11.1172C0.413924 11.393 0.543766 11.6485 0.749567 11.8345C0.955369 12.0204 1.22262 12.1238 1.5 12.1248C1.5797 12.1249 1.65919 12.1167 1.73719 12.1004L1.87594 12.0704V18.8748H1.5C1.20163 18.8748 0.915483 18.9933 0.704505 19.2043C0.493526 19.4152 0.375 19.7014 0.375 19.9998C0.375 20.2981 0.493526 20.5843 0.704505 20.7953C0.915483 21.0062 1.20163 21.1248 1.5 21.1248H22.5C22.7984 21.1248 23.0845 21.0062 23.2955 20.7953C23.5065 20.5843 23.625 20.2981 23.625 19.9998C23.625 19.7014 23.5065 19.4152 23.2955 19.2043C23.0845 18.9933 22.7984 18.8748 22.5 18.8748ZM4.125 11.5876L19.875 8.21258V18.8748H18V13.2498C18 12.9514 17.8815 12.6652 17.6705 12.4543C17.4595 12.2433 17.1734 12.1248 16.875 12.1248H7.125C6.82663 12.1248 6.54048 12.2433 6.3295 12.4543C6.11853 12.6652 6 12.9514 6 13.2498V18.8748H4.125V11.5876ZM15.75 15.4998H8.25V14.3748H15.75V15.4998ZM8.25 17.7498H15.75V18.8748H8.25V17.7498Z" fill="white"/>
                    <path d="M45.664 7.436V20H43.144V14.654H37.762V20H35.242V7.436H37.762V12.602H43.144V7.436H45.664ZM51.8523 20.162C50.8923 20.162 50.0283 19.952 49.2603 19.532C48.4923 19.1 47.8863 18.494 47.4423 17.714C47.0103 16.934 46.7943 16.034 46.7943 15.014C46.7943 13.994 47.0163 13.094 47.4603 12.314C47.9163 11.534 48.5343 10.934 49.3143 10.514C50.0943 10.082 50.9643 9.866 51.9243 9.866C52.8843 9.866 53.7543 10.082 54.5343 10.514C55.3143 10.934 55.9263 11.534 56.3703 12.314C56.8263 13.094 57.0543 13.994 57.0543 15.014C57.0543 16.034 56.8203 16.934 56.3523 17.714C55.8963 18.494 55.2723 19.1 54.4803 19.532C53.7003 19.952 52.8243 20.162 51.8523 20.162ZM51.8523 17.966C52.3083 17.966 52.7343 17.858 53.1303 17.642C53.5383 17.414 53.8623 17.078 54.1023 16.634C54.3423 16.19 54.4623 15.65 54.4623 15.014C54.4623 14.066 54.2103 13.34 53.7063 12.836C53.2143 12.32 52.6083 12.062 51.8883 12.062C51.1683 12.062 50.5623 12.32 50.0703 12.836C49.5903 13.34 49.3503 14.066 49.3503 15.014C49.3503 15.962 49.5843 16.694 50.0523 17.21C50.5323 17.714 51.1323 17.966 51.8523 17.966ZM61.1169 12.098V16.922C61.1169 17.258 61.1949 17.504 61.3509 17.66C61.5189 17.804 61.7949 17.876 62.1789 17.876H63.3489V20H61.7649C59.6409 20 58.5789 18.968 58.5789 16.904V12.098H57.3909V10.028H58.5789V7.562H61.1169V10.028H63.3489V12.098H61.1169ZM73.7114 14.798C73.7114 15.158 73.6874 15.482 73.6394 15.77H66.3494C66.4094 16.49 66.6614 17.054 67.1054 17.462C67.5494 17.87 68.0954 18.074 68.7434 18.074C69.6794 18.074 70.3454 17.672 70.7414 16.868H73.4594C73.1714 17.828 72.6194 18.62 71.8034 19.244C70.9874 19.856 69.9854 20.162 68.7974 20.162C67.8374 20.162 66.9734 19.952 66.2054 19.532C65.4494 19.1 64.8554 18.494 64.4234 17.714C64.0034 16.934 63.7934 16.034 63.7934 15.014C63.7934 13.982 64.0034 13.076 64.4234 12.296C64.8434 11.516 65.4314 10.916 66.1874 10.496C66.9434 10.076 67.8134 9.866 68.7974 9.866C69.7454 9.866 70.5914 10.07 71.3354 10.478C72.0914 10.886 72.6734 11.468 73.0814 12.224C73.5014 12.968 73.7114 13.826 73.7114 14.798ZM71.1014 14.078C71.0894 13.43 70.8554 12.914 70.3994 12.53C69.9434 12.134 69.3854 11.936 68.7254 11.936C68.1014 11.936 67.5734 12.128 67.1414 12.512C66.7214 12.884 66.4634 13.406 66.3674 14.078H71.1014ZM77.3507 6.68V20H74.8307V6.68H77.3507ZM82.9365 20.162C82.1205 20.162 81.3885 20.018 80.7405 19.73C80.0925 19.43 79.5765 19.028 79.1925 18.524C78.8205 18.02 78.6165 17.462 78.5805 16.85H81.1185C81.1665 17.234 81.3525 17.552 81.6765 17.804C82.0125 18.056 82.4265 18.182 82.9185 18.182C83.3985 18.182 83.7705 18.086 84.0345 17.894C84.3105 17.702 84.4485 17.456 84.4485 17.156C84.4485 16.832 84.2805 16.592 83.9445 16.436C83.6205 16.268 83.0985 16.088 82.3785 15.896C81.6345 15.716 81.0225 15.53 80.5425 15.338C80.0745 15.146 79.6665 14.852 79.3185 14.456C78.9825 14.06 78.8145 13.526 78.8145 12.854C78.8145 12.302 78.9705 11.798 79.2825 11.342C79.6065 10.886 80.0625 10.526 80.6505 10.262C81.2505 9.998 81.9525 9.866 82.7565 9.866C83.9445 9.866 84.8925 10.166 85.6005 10.766C86.3085 11.354 86.6985 12.152 86.7705 13.16H84.3585C84.3225 12.764 84.1545 12.452 83.8545 12.224C83.5665 11.984 83.1765 11.864 82.6845 11.864C82.2285 11.864 81.8745 11.948 81.6225 12.116C81.3825 12.284 81.2625 12.518 81.2625 12.818C81.2625 13.154 81.4305 13.412 81.7665 13.592C82.1025 13.76 82.6245 13.934 83.3325 14.114C84.0525 14.294 84.6465 14.48 85.1145 14.672C85.5825 14.864 85.9845 15.164 86.3205 15.572C86.6685 15.968 86.8485 16.496 86.8605 17.156C86.8605 17.732 86.6985 18.248 86.3745 18.704C86.0625 19.16 85.6065 19.52 85.0065 19.784C84.4185 20.036 83.7285 20.162 82.9365 20.162Z" fill="white"/>
                </svg>
                {hotels.length > 0 && (
                    <Button variant={"secondary"} className="w-[153px] text-[#0D6EFD] font-semibold" onClick={()=>router.push("/addHotelPage")}>
                        Add Hotel
                    </Button>
                    )}
                </div>
                {hotels.length === 0 ? (
                <div className="flex items-center justify-center">
                    <span className="flex flex-col gap-5 text-center text-white mt-10">
                        <p>No Request Yet</p>
                        <Button variant={"secondary"} className="w-[153px] text-black font-semibold" onClick={()=>router.push("/addHotelPage")}>Add Hotel</Button>
                    </span>
                </div>
            ) : (
                <>
                {hotels.map((hotel, index) => (
                    <div key={index} className="bg-white mb-10 rounded-md flex justify-between gap-2">
                        <section className="flex">
                            <Carousel className="w-[200px] p-2 flex">
                            <CarouselContent>
                                {hotel.property.photoUrls.map((photo, index) => (
                                    <CarouselItem key={index}>
                                        <img
                                        src={photo}
                                        alt="Carousel Slide 2"
                                        className=" w-[200px] h-[200px] object-cover"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            </Carousel>
                            <div className="flex flex-col p-2 flex-end">
                                <p className="text-[20px] font-semibold">{hotel.property.name}</p>
                                <p className="w-[500px] text-sm mb-5">{hotel.accessibilityLabel}</p>
                                <span className="flex gap-3 font-semibold">
                                    <p>Check in from: {hotel.property.checkin.fromTime}</p>
                                    <p>To: {hotel.property.checkin.untilTime}</p>
                                </span>
                                <span className="mt-10 flex text-[20px] gap-2 font-semibold">
                                    <p>{hotel.property.priceBreakdown.grossPrice.currency}</p>
                                    <p>{hotel.property.priceBreakdown.grossPrice.value.toFixed(2)}</p>
                                </span>
                            </div>
                        </section>
                        <div className="w-[50px] min-h-full cursor-pointer flex justify-center items-center bg-[#FBEAE9]" onClick={()=>{handleDeleteHotel(index)}}>
                            x
                        </div>
                    </div>
                ))}
                </>
            )}
        </div>
      
    );
};



  

