export interface Country {
	cca3: string;
	name: {
		common: string;
	};
	population: number;
	region: string;
	capital?: string[];
	flags: {
		png: string;
	};
}

export interface FullCountry extends Country {
	subregion: string;
	nativeName: string;
	topLevelDomain: string[];
	currencies: { name: string }[];
	languages: { name: string }[];
	borders: string[];
}
