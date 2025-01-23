"use client"
import Image from "next/image"
import { 
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogTrigger,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
 } from "./dialog"
import { Button } from "./button"
import { useRouter } from "next/navigation"

export const Nav = ()=>{
    const router = useRouter();
    return (
        <>
        <div className="w-full flex justify-between p-8 bg-white">
            <div className="flex gap-5 items-center w-1/3">
                <Image src={"/logo.svg"} width={56} height={56} alt={"logo"} onClick={()=>router.push("/")}/>
                <div className="flex gap-2 rounded-md items-center p-2 border border-gray-500 h-[56px]">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.693 20.4696L16.9989 15.7765C18.3594 14.1431 19.0378 12.048 18.893 9.92715C18.7482 7.80629 17.7914 5.82289 16.2215 4.38956C14.6516 2.95623 12.5895 2.18333 10.4642 2.23163C8.33898 2.27993 6.31416 3.14571 4.81099 4.64888C3.30782 6.15205 2.44204 8.17687 2.39374 10.3021C2.34544 12.4274 3.11834 14.4894 4.55167 16.0593C5.985 17.6293 7.9684 18.5861 10.0893 18.7309C12.2101 18.8757 14.3052 18.1973 15.9386 16.8368L20.6317 21.5308C20.7014 21.6005 20.7841 21.6558 20.8752 21.6935C20.9662 21.7312 21.0638 21.7506 21.1623 21.7506C21.2609 21.7506 21.3585 21.7312 21.4495 21.6935C21.5405 21.6558 21.6233 21.6005 21.693 21.5308C21.7626 21.4612 21.8179 21.3784 21.8556 21.2874C21.8933 21.1963 21.9127 21.0988 21.9127 21.0002C21.9127 20.9017 21.8933 20.8041 21.8556 20.713C21.8179 20.622 21.7626 20.5393 21.693 20.4696ZM3.91232 10.5002C3.91232 9.16519 4.3082 7.86015 5.0499 6.75011C5.7916 5.64008 6.84581 4.77492 8.07921 4.26403C9.31261 3.75314 10.6698 3.61946 11.9792 3.87991C13.2886 4.14036 14.4913 4.78324 15.4353 5.72724C16.3793 6.67125 17.0222 7.87398 17.2826 9.18335C17.5431 10.4927 17.4094 11.8499 16.8985 13.0833C16.3876 14.3167 15.5225 15.3709 14.4124 16.1126C13.3024 16.8543 11.9973 17.2502 10.6623 17.2502C8.87272 17.2482 7.15699 16.5364 5.89155 15.271C4.6261 14.0056 3.91431 12.2898 3.91232 10.5002Z" fill="#667185"/>
                    </svg>
                    <Dialog>
                        <DialogTrigger>
                            <input type="search" placeholder="search" className="h-[50px] w-[400px] text-gray-500"/>
                        </DialogTrigger>
                        <DialogContent className="gap-2">
                        <DialogHeader>
                            <DialogTitle>Search for a Flight, Hotel or Attraction Site</DialogTitle>
                        </DialogHeader>
                            <div className="flex justify-between w-full mt-10">
                                <DialogClose onClick={()=>router.push("/addFlightsPage")} className="text-white font-semibold bg-[#0D6EFD] p-2 rounded-lg">Search for Flight</DialogClose>
                                <DialogClose onClick={()=>router.push("/addHotelPage")} className="text-white font-semibold bg-[#0D6EFD] p-2 rounded-lg">Search for Hotel</DialogClose>
                                <DialogClose onClick={()=>router.push("/addAttraction")} className="text-white font-semibold bg-[#0D6EFD] p-2 rounded-lg">Search for Attraction</DialogClose>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div>
                {/* other nav items */}
            </div>
        </div>
        </>
    )
}