'use client'
import React, { useState } from 'react';
import { useAppDispatch } from '@/app/hooks/reduxHooks';
import { useGetDestinationQuery, useGetHotelsQuery } from '@/slice/requestSlice';
import { addHotel, clearHotels } from '@/slice/hotelSlice';
import { DayPicker } from 'react-day-picker';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { formatDateToYYYYMMDD } from '../app/util/util';
import { Hotel } from '@/types/types';
import { useRouter } from 'next/navigation';

export const AddHotelPage = () => {
  const dispatch = useAppDispatch();
  const { data: getDestination } = useGetDestinationQuery();
  const [id, setDestId] = useState('');
  const [type, setDestType] = useState('');
  const [date, setArriDate] = useState<Date | undefined>();
  const [depdate, setDepDate] = useState<Date | undefined>();
  const formattedDate = date ? formatDateToYYYYMMDD(date) : null;
  const formattedDate2 = depdate ? formatDateToYYYYMMDD(depdate) : null;
  const router = useRouter();

  const { data: getHotels } = useGetHotelsQuery({
    dest_id: id,
    search_type: type,
    arrival_date: formattedDate,
    departure_date: formattedDate2,
  });

  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const handleSelectHotel = (hotel: Hotel) => {
    setSelectedHotel(hotel);
  };

  const handleSaveSelection = () => {
    if (selectedHotel) {
      dispatch(addHotel(selectedHotel));  
    }
    router.push("/");
  };

  return (
    <div className="flex flex-col p-6 lg:p-8 bg-gray-100">
      {/* Filters Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-10 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 mb-6 lg:mb-0">
          {/* Arrival Date Picker */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">Set Arrival Date:</label>
            <div className="relative">
              <DayPicker
                mode="single"
                selected={date}
                onSelect={setArriDate}
                className="rounded-lg shadow-md border border-gray-300 p-3 bg-white"
                footer={
                  <p className="text-sm text-gray-500 mt-2">
                    {date ? `Selected: ${formattedDate}` : 'Please select a date.'}
                  </p>
                }
              />
            </div>
          </div>

          {/* Departure Date Picker */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">Set Departure Date:</label>
            <div className="relative">
              <DayPicker
                mode="single"
                selected={depdate}
                onSelect={setDepDate}
                className="rounded-lg shadow-md border border-gray-300 p-3 bg-white"
                footer={
                  <p className="text-sm text-gray-500 mt-2">
                    {depdate ? `Selected: ${formattedDate2}` : 'Please select a date.'}
                  </p>
                }
              />
            </div>
          </div>
        </div>

        {/* Destination Filter */}
        <Select onValueChange={(e) => setDestId(e)}>
          <SelectTrigger className="w-[180px] rounded-full">
            <SelectValue placeholder="Destination" />
          </SelectTrigger>
          <SelectContent>
            {getDestination?.data?.map((data, index) => (
              <SelectItem className="flex gap-4" value={data.dest_id} key={index}>
                {data.country}, {data.city_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Type Filter */}
        <Select onValueChange={(e) => setDestType(e)}>
          <SelectTrigger className="min-w-[180px] w-fit rounded-full">
            <SelectValue placeholder="City or District" />
          </SelectTrigger>
          <SelectContent>
            {getDestination?.data?.map((data, index) => (
              <SelectItem value={data.dest_type} key={index}>
                {data.dest_type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Hotel Selection */}
      <div className="flex flex-col mt-6 w-full">
        <p className="font-semibold text-lg mb-4">Select a Hotel:</p>
        <Select onValueChange={(value) => handleSelectHotel(JSON.parse(value))}>
          <SelectTrigger className="w-full lg:w-1/2 rounded-md">
            <SelectValue placeholder="Choose a hotel" />
          </SelectTrigger>
          <SelectContent>
            {getHotels?.data?.hotels?.length > 0 ? (
              getHotels.data.hotels.map((hotel: any, index: number) => (
                <SelectItem value={JSON.stringify(hotel)} key={index}>
                  {hotel?.property?.name} -{' '}
                  {hotel?.property?.priceBreakdown?.grossPrice?.value}{' '}
                  {hotel?.property?.priceBreakdown?.grossPrice?.currency}
                </SelectItem>
              ))
            ) : (
              <div className="text-gray-500 text-center py-2">No hotel found</div>
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Save Selection Button */}
      <div className="flex justify-end w-full mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          onClick={handleSaveSelection}
          disabled={!selectedHotel}
        >
          Save Selection
        </button>
      </div>
    </div>
  );
};
