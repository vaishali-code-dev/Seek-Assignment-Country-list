import { useState, useEffect, useRef } from "react";
import { Country } from "../interfaces/country";

const useCountries = () => {
	const countries = useRef<Country[]>([]);
	const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [region, setRegion] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				setIsLoading(true);
				const response = await fetch("https://restcountries.com/v3.1/all");
				const data: Country[] = await response.json();
				countries.current = data;
				setFilteredCountries(data);
			} catch (error) {
				console.error("Error fetching countries:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchCountries();
	}, []);

	useEffect(() => {
		filterCountries();
	}, [searchTerm, region]);

	const filterCountries = () => {
		let filtered = countries.current;

		if (searchTerm) {
			filtered = filtered.filter((country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()));
		}

		if (region) {
			filtered = filtered.filter((country) => country.region === region);
		}

		setFilteredCountries(filtered);
	};

	return {
		countries: filteredCountries,
		searchTerm,
		setSearchTerm,
		region,
		setRegion,
		isLoading,
	};
};

export default useCountries;
