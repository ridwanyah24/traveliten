'use client'
import React, { useState } from 'react';
import { useAppDispatch } from '@/app/hooks/reduxHooks';
import { useGetFlightLocationQuery, useGetFlightsQuery, } from '@/slice/requestSlice';
import { DayPicker } from 'react-day-picker';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { formatDateToYYYYMMDD } from '../../app/util/util';
import { useRouter } from 'next/navigation';
import { FlightOffer } from '@/types/flightTypes';
import { addFlightOffer } from '@/slice/flightOfferSlice';
import { RotateCcw } from 'lucide-react';



export const AddFlightsPage = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { data: getFlightsLocations } = useGetFlightLocationQuery();
    const [id, setDestId] = useState("");
    const [type, setDestType] = useState("");
    const [depdate, setDepDate] = useState<Date | undefined>();
    const formattedDate2 = depdate ? formatDateToYYYYMMDD(depdate) : null;
  
    const { data: getFlights, isLoading:loading, isError:error } = useGetFlightsQuery({
      fromId: id,
      toId: type,
      departDate: formattedDate2,
    });
  
    const [selectedFlights, setSelectedFlight] = useState<FlightOffer | null>(
      null
    );
  
    const handleSelectFlightOffer = (flight: FlightOffer) => {
      setSelectedFlight(flight);
    };
  
    const handleSaveSelection = () => {
      if (selectedFlights) {
        dispatch(addFlightOffer(selectedFlights));
      }
      router.push("/");
    };
  
    return (
      <div className="flex flex-col p-6 lg:p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Add a Flight</h1>
  
        {/* Filters Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 bg-white p-6 rounded-lg shadow-md mb-8">
          {/* Departure Date Picker */}
          <div className="flex flex-col gap-2 mb-4 lg:mb-0">
            <label className="font-medium text-gray-700">Departure Date:</label>
            <DayPicker
              mode="single"
              selected={depdate}
              onSelect={setDepDate}
              className="rounded-lg border border-gray-300 bg-white p-3 shadow-sm"
            />
            <p className="text-sm text-gray-500 mt-2">
              {depdate ? `Selected: ${formattedDate2}` : "Please select a date."}
            </p>
          </div>
  
          {/* From Location */}
          <div className="flex flex-col gap-2 mb-4 lg:mb-0">
            <label className="font-medium text-gray-700">From:</label>
            <Select onValueChange={(e) => setDestId(e)}>
              <SelectTrigger className="w-[200px] rounded-md border-gray-300">
                <SelectValue placeholder="Select Departure" />
              </SelectTrigger>
              <SelectContent>
                {getFlightsLocations?.data?.map((data, index) => (
                  <SelectItem
                    className="flex gap-4"
                    value={data.id}
                    key={index}
                  >
                    {data.country}, {data.cityName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
  
          {/* To Location */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">To:</label>
            <Select onValueChange={(e) => setDestType(e)}>
              <SelectTrigger className="w-[200px] rounded-md border-gray-300">
                <SelectValue placeholder="Select Destination" />
              </SelectTrigger>
              <SelectContent>
                {getFlightsLocations?.data?.map((data, index) => (
                  <SelectItem value={data.id} key={index}>
                    {data.country}, {data.cityName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
  
        {/* Flight Selection */}
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Select a Flight:</h2>
          <Select
            onValueChange={(value) => handleSelectFlightOffer(JSON.parse(value))}
          >
            <SelectTrigger className="w-full lg:w-1/2 rounded-md border-gray-300">
              <SelectValue placeholder="Choose a Flight" />
            </SelectTrigger>
            <SelectContent>
              {loading ? (
                <div className="flex justify-center items-center py-4">
                  <RotateCcw className="animate-spin text-gray-500" size={24} />
                </div>
              ) : error ? (
                <div className="text-red-500 text-center py-2">
                  Error fetching flights. Please try again.
                </div>
              ) : getFlights?.data?.flightOffers?.length > 0 ? (
                getFlights?.data?.flightOffers.map(
                  (flightoffer: any, index: number) => (
                    <SelectItem value={JSON.stringify(flightoffer)} key={index}>
                      {flightoffer?.segments[0]?.departureAirport?.code} -{" "}
                      {flightoffer?.segments[0]?.arrivalAirport?.code}{" "}
                      {flightoffer?.segments[0]?.departureTime} -{" "}
                      {flightoffer?.segments[0]?.arrivalTime}
                    </SelectItem>
                  )
                )
              ) : (
                <div className="text-gray-500 text-center py-2">
                  loading
                </div>
              )}
            </SelectContent>
          </Select>
        </div>
  
        {/* Save Selection Button */}
        <div className="flex justify-end w-full mt-6">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 disabled:bg-gray-400"
            onClick={handleSaveSelection}
            disabled={!selectedFlights}
          >
            Save Selection
          </button>
        </div>
      </div>
    );
  };
