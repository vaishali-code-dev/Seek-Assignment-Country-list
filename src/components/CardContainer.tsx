import React from 'react';
import useCountries from '../hooks/useCountries';
import Card from './Card';
import { useTheme } from '../contexts/ThemeContext';
import CustomSelect from './CustomSelect';
import Skeleton from './Skeleton';

const regions = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania"
]

interface CardContainerProps {
    setSelectedCountry: Function
}

const CardContainer: React.FC<CardContainerProps> = ({ setSelectedCountry }) => {
    const { countries, searchTerm, setSearchTerm, region, setRegion, isLoading } = useCountries();
    const { theme } = useTheme();
    const getElementsToRender = () => {

        if (isLoading) {
            return Array(8).fill("").map((_, index) => (
                <Skeleton key={index} />
            ))
        }

        if (countries.length) {
            return countries.map((country) => (
                <Card key={country.cca3} countryData={country} setSelectedCountry={setSelectedCountry} />
            ))
        }
    }

    return (
        <div className="mx-auto pt-4 md:pt-8 px-8 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-6 gap-y-4">
                <input
                    type="text"
                    placeholder="Search for a country..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`p-2.5 w-full md:w-2/3 text-[0.9rem] rounded shadow ${theme === "dark" ? "bg-dark-blue" : "bg-white"}`}
                />
                <CustomSelect
                    options={regions}
                    value={region}
                    onChange={setRegion}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {getElementsToRender()}
            </div>
        </div>
    );
};

export default CardContainer;
