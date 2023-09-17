import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useMemo } from 'react';
import { toCamelCase } from '../lib/utils';
import { SubCategories } from './price-card';

interface Props {
    item: SubCategories;
    showPromotion: boolean;
}

export function CategoryCard({ item, showPromotion }: Props) {
    const isDisabled = useMemo(() => showPromotion && item.brandCode !== 'ecoFly', [item.brandCode, showPromotion]);
    const price = showPromotion && item.brandCode === 'ecoFly' ? item.price.amount / 2 : item.price.amount;
    return (
        <div>
            <div className='bg-thy-header flex justify-between px-2 py-4 pb-8 font-semibold'>
                <span>{toCamelCase(item.brandCode)}</span>
                <span>{`${item.price.currency} ${price}`}</span>
            </div>
            <div className='border border-b-0 min-h-[240px] text-thy-muted font-semibold text-sm'>
                {item.rights.map((right) => (
                    <p key={right} className='border-b p-2'>
                        {right}
                    </p>
                ))}
            </div>
            <Button
                variant={isDisabled ? 'secondary' : 'destructive'}
                className='rounded-none w-full'
                asChild={!isDisabled}
                disabled={isDisabled}
            >
                <Link
                    className='w-full h-fit'
                    href={`/sonuc?amount=${price}&currency=${item.price.currency}&status=${item.status}`}
                >
                    Uçuşu seç
                </Link>
            </Button>
        </div>
    );
}
