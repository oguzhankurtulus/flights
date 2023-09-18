import { RecordContent } from '../components/flight-details';
import { SubCategories } from '../components/price-card';

interface SubData {
    brandCode: string;
    price: {
        amount: number;
        currency: string;
    };
    order: number;
    status: string;
    rights: string[];
}

export interface Data {
    id: string;
    originAirport: RecordContent;
    destinationAirport: RecordContent;
    arrivalDateTimeDisplay: string;
    departureDateTimeDisplay: string;
    flightDuration: string;
    fareCategories: {
        ECONOMY: {
            subcategories: SubData[];
        };
        BUSINESS: {
            subcategories: SubData[];
        };
    };
}

export const getEcoFlyOption = (data: SubCategories[]): SubCategories | undefined => {
    if (!Array.isArray(data)) return;
    return data.find(({ brandCode }) => brandCode === 'ecoFly');
};

export const toCamelCase = (text: string) => `${text[0].toUpperCase()}${text.substring(1, text.length)}`;

export const sortByType = (data: Data[], type: string) => {
    let sortedData: Data[] = data;
    const newData = [...data];
    if (type === 'price') {
        sortedData = newData.sort(
            (a, b) =>
                //@ts-ignore
                a.fareCategories.ECONOMY.subcategories.find(
                    ({ brandCode }: { brandCode: string }) => brandCode === 'ecoFly'
                ).price.amount -
                //@ts-ignore
                b.fareCategories.ECONOMY.subcategories.find(
                    ({ brandCode }: { brandCode: string }) => brandCode === 'ecoFly'
                ).price.amount
        );
    }
    if (type === 'hours') {
        //@ts-ignore
        sortedData = newData.sort((a, b) => a.arrivalDateTimeDisplay - b.arrivalDateTimeDisplay);
    }
    return sortedData;
};
