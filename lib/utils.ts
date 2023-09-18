import { Data } from '@/app/listeleme/lib/utils';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getOriginCities = (data: Data[]) => {
    if (!Array.isArray(data)) return;
    const cities = data.map(({ originAirport }) => originAirport.city.name);
    return Array.from(new Set(cities));
};

export const getDestinationCities = (data: Data[]) => {
    if (!Array.isArray(data)) return;
    const cities = data.map(({ destinationAirport }) => destinationAirport.city.name);
    return Array.from(new Set(cities));
};
