'use client';
import { useSearchParams } from 'next/navigation';

export function Amount() {
    const searchParams = useSearchParams();

    return (
        <div className='flex justify-between items-center'>
            <span className='text-2xl text-thy-muted'>Toplam tutar</span>
            <span className='text-2xl text-thy-price font-semibold'>{`${searchParams.get(
                'currency'
            )} ${searchParams.get('amount')}`}</span>
        </div>
    );
}
