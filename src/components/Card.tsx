import React from 'react'
import { Country } from '../interfaces/country';
import { useTheme } from '../contexts/ThemeContext';

interface CardProps {
    countryData: Country;
    setSelectedCountry: Function
}

const Card: React.FC<CardProps> = ({ countryData, setSelectedCountry }) => {
    const { theme } = useTheme()
    const cardInfoItems = [
        {
            label: "Population:",
            value: countryData.population.toLocaleString()
        },
        {
            label: "Region:",
            value: countryData.region
        },
        {
            label: "Capital:",
            value: countryData.capital?.[0]
        }
    ]

    return (
        <div onClick={() => setSelectedCountry(countryData)} className={`shadow rounded-md cursor-pointer hover:scale-[1.02] transition-all ${theme === 'dark' ? 'bg-dark-blue text-white' : 'bg-very-light-gray text-very-dark-blue-text'}`}>
            <img src={countryData.flags.png} alt={countryData.name.common} className="w-full h-32 object-cover rounded-t-md" />
            <div className='p-4 pb-8'>
                <h2 className="text-lg font-extrabold mb-2">{countryData.name.common}</h2>
                <div className='flex flex-col gap-1.5'>
                    {
                        cardInfoItems.map((item, index) => (
                            <span key={index} className='flex gap-1 text-sm'>
                                <p className='font-bold'>{item.label}</p>
                                <p>{item.value}</p>
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Card