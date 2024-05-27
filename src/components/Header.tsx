import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { CiDark, CiLight } from "react-icons/ci";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`w-full bg-white flex justify-between px-4 md:px-12 py-4 shadow ${theme === "dark" ? "!bg-dark-blue text-white" : "!bg-white text-very-dark-blue-text"}`}>
            <p className='font-extrabold text-sm md:text-2xl cursor-pointer'>Where in the world?</p>
            <div className='flex items-center justify-center text-xs md:text-base font-semibold'>
                <button onClick={toggleTheme} className='flex gap-2 justify-evenly items-center'>
                    {
                        theme === "light" ? <CiDark className='text-xl' /> : <CiLight className='text-xl' />
                    }
                    <span>{`${theme === "light" ? "Dark" : "Light"}`} Mode</span></button>
            </div>
        </div>
    )
}

export default Header;
