import { Card, CardContent } from '@/components/ui/card';

export interface RecordContent {
    name: string;
    code: string;
    city: {
        code: string;
        name: string;
    };
    country: {
        code: string;
        name: string;
    };
}

export interface FlightsProps {
    data: {
        originAirport: RecordContent;
        destinationAirport: RecordContent;
        arrivalDateTimeDisplay: string;
        departureDateTimeDisplay: string;
        flightDuration: string;
    };
}

export function FlightDetailsCard({ data }: FlightsProps) {
    return (
        <Card className='py-4'>
            <CardContent className='flex items-center gap-2 p-0 px-6 py-4'>
                <div className='flex flex-col'>
                    <span className='font-semibold text-xl'>{data.arrivalDateTimeDisplay}</span>
                    <p className='font-semibold text-thy-muted'>{data.originAirport.city.code}</p>
                    <p className='font-semibold text-thy-muted text-xs'>{data.originAirport.city.name}</p>
                </div>
                <div className='h-[2px] w-[240px] border border-thy-muted' />
                <div className='flex flex-col'>
                    <span className='font-semibold text-xl'>{data.departureDateTimeDisplay}</span>
                    <p className='font-semibold text-thy-muted text-right'>{data.destinationAirport.city.code}</p>
                    <p className='font-semibold text-thy-muted text-xs text-right'>
                        {data.destinationAirport.city.name}
                    </p>
                </div>
                <div className='ml-12 mr-6'>
                    <span className='text-thy-muted font-semibold'>Uçuş Süresi</span>
                    <p className='font-semibold'>{data.flightDuration}</p>
                </div>
            </CardContent>
        </Card>
    );
}
