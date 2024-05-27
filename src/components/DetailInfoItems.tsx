import React from 'react'
import { FullCountry } from '../interfaces/country';
import { useTheme } from '../contexts/ThemeContext';

interface DetailInfoItemsProps {
    selectedCountry: FullCountry;
}

const DetailInfoItems: React.FC<DetailInfoItemsProps> = ({ selectedCountry }) => {
    const { theme } = useTheme()
    const cardInfoItems = [
        {
            label: "Native Name:",
            value: selectedCountry.nativeName || 'N/A'
        },
        {
            label: "Population:",
            value: selectedCountry.population.toLocaleString()
        },
        {
            label: "Region:",
            value: selectedCountry.region
        },
        {
            label: "Sub Region:",
            value: selectedCountry.subregion
        },
        {
            label: "Capital:",
            value: selectedCountry.capital?.[0] || 'N/A'
        },
        {
            label: "Top Level Domain:",
            value: selectedCountry.topLevelDomain?.[0] || 'N/A'
        },
        {
            label: "Currencies:",
            value: Object.values(selectedCountry.currencies || {}).map(currency => currency.name).join(', ') || 'N/A'
        },
        {
            label: "Languages:",
            value: Object.values(selectedCountry.languages || {}).join(', ') || 'N/A'
        },
    ];

    return (
        <div className='flex flex-col gap-y-8'>
            <p className='font-extrabold text-3xl'>{selectedCountry.name.common}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                {cardInfoItems.map((item, index) => (
                    <span key={index} className='flex gap-1 text-sm'>
                        <p className='font-bold'>{item.label}</p>
                        <p>{item.value}</p>
                    </span>
                ))}
            </div>
            <div className='flex items-center gap-3'>
                <p className='font-bold text-sm'>Border Countries:</p>
                <div className='flex gap-2 flex-wrap'>
                    {selectedCountry.borders?.length > 0 ? (
                        selectedCountry.borders.map((border, index) => (
                            <span key={index} className={`shadow rounded-md px-2 py-1 text-sm ${theme === "dark" ? "bg-dark-blue" : "bg-white"}`}>
                                {border}
                            </span>
                        ))
                    ) : (
                        <p className='text-sm'>None</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DetailInfoItems