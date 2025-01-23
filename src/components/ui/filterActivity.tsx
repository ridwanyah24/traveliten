'use client'
import React, { useState } from 'react';
import { useAppDispatch } from '@/app/hooks/reduxHooks';
import { useGetAttractionLocationQuery, useGetAttractionQuery} from '@/slice/requestSlice';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { addDestination, ProductResponse } from '@/slice/destinationSlice';

export const AddActivityPage = () => {
    const dispatch = useAppDispatch();
    const { data: getLocation } = useGetAttractionLocationQuery();
    const [id, setDestId] = useState('');
    const [type, setDestType] = useState('');
    const router = useRouter();

    console.log(getLocation);;
    

    const { data: getActivity } = useGetAttractionQuery({id:id || type});

    const [selectedActivity, setSelectActivity] = useState<ProductResponse | null>(null);

    const handleSelectActivity = (activity: ProductResponse) => {
        setSelectActivity(activity);
        };

        const handleSaveSelection = () => {
            if (selectedActivity) {
                dispatch(addDestination(selectedActivity));  
            }
        router.push("/");
    }; 

    return (
    <div className="flex flex-col p-6 lg:p-8 bg-gray-100">
      {/* Filters Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-10 mb-8">

        {/* Destination Filter */}
        <Select onValueChange={(e) => setDestId(e)}>
          <SelectTrigger className="w-[180px] rounded-full">
            <SelectValue placeholder="Select a Desitnation" />
          </SelectTrigger>
          <SelectContent>
            {getLocation?.data?.destinations?.map((data, index) => (
              <SelectItem className="flex gap-4" value={data.id} key={index}>
                {data.cityName}, {data.country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

            <p>Or</p>

        {/* Product Filter */}
        <Select onValueChange={(e) => setDestType(e)}>
          <SelectTrigger className="min-w-[180px] w-fit rounded-full">
            <SelectValue placeholder="City or District" />
          </SelectTrigger>
          <SelectContent>
            {getLocation?.data?.products.map((data, index) => (
              <SelectItem value={data.id} key={index}>
                {data.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Activity Selection */}
      <div className="flex flex-col mt-6 w-full">
        <p className="font-semibold text-lg mb-4">Select a Hotel:</p>
        <Select onValueChange={(value) => handleSelectActivity(JSON.parse(value))}>
          <SelectTrigger className="w-full lg:w-1/2 rounded-md">
            <SelectValue placeholder="Choose a destination" />
          </SelectTrigger>
          <SelectContent>
            {getActivity?.data?.products?.length > 0 ? (
              getActivity?.data?.products?.map((activity: any, index: number) => (
                <SelectItem value={JSON.stringify(activity)} key={index}>
                  {activity?.name} 
                </SelectItem>
              ))
            ) : (
              <div className="text-gray-500 text-center py-2">No Destination Found</div>
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Save Selection Button */}
      <div className="flex justify-end w-full mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          onClick={handleSaveSelection}
          disabled={!selectedActivity}
        >
          Save Selection
        </button>
      </div>
    </div>
  );
};
