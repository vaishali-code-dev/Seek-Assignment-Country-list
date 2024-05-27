import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";

interface CustomSelectProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();

    const handleSelect = (option: string) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className={`relative inline-block w-full text-[0.8rem] max-w-48 md:ml-auto font-normal`}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 shadow rounded-md cursor-pointer text-[0.8rem] flex gap-2 items-center justify-between ${theme === "dark" ? "!bg-dark-blue text-white" : "!bg-white text-black"
                    }`}
            >
                {value || "Filter by Region"}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isOpen && (
                <ul
                    className={`absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md ${theme === "dark" ? "!bg-dark-blue text-white" : "!bg-white text-black"
                        }`}
                >
                    <li onClick={() => handleSelect("")} className="p-2 cursor-pointer hover:bg-gray-200">
                        Filter by Region
                    </li>
                    {options.map((option) => (
                        <li key={option} onClick={() => handleSelect(option)} className="p-2 cursor-pointer hover:bg-gray-200">
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
