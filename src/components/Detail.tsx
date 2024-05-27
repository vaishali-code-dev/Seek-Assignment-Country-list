import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { FullCountry } from '../interfaces/country';
import DetailInfoItems from './DetailInfoItems';

interface CardContainerProps {
    selectedCountry: FullCountry;
    setSelectedCountry: React.Dispatch<React.SetStateAction<FullCountry | undefined>>
}

const Detail: React.FC<CardContainerProps> = ({ selectedCountry, setSelectedCountry }) => {

    return (
        <div className='md:mt-14 p-6'>
            <button className='flex gap-2 items-center p-2' onClick={() => setSelectedCountry(undefined)}>
                <IoIosArrowRoundBack className='text-2xl' /> <span>Back</span>
            </button>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 p-6'>
                <img src={selectedCountry.flags.png} alt={selectedCountry.name.common} className="w-full sm:w-2/3 object-cover rounded-t-md" />
                <DetailInfoItems selectedCountry={selectedCountry} />
            </div>
        </div>
    );
}

export default Detail;
