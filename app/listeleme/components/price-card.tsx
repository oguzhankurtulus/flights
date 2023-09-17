'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useMemo } from 'react';
import { CLASS_TYPES } from '../lib/constants';
import { getEcoFlyOption } from '../lib/utils';

export interface SubCategories {
    brandCode: string;
    price: {
        amount: number;
        currency: string;
    };
    order: number;
    status: string;
    rights: string[];
}

interface Props {
    classType: CLASS_TYPES;
    data: {
        subcategories: SubCategories[];
    };
    id: string;
    onSelectSubCategories: (data: SubCategories[]) => void;
    showPromotion: boolean;
}

export function PriceCard({ classType, data, id, onSelectSubCategories, showPromotion }: Props) {
    const ecoFly = useMemo(() => getEcoFlyOption(data.subcategories), [data]) || {
        price: { amount: 0, currency: 'TRY' },
    };
    const value = `${id}-${classType}`;
    const handleSelect = () => onSelectSubCategories(data.subcategories);
    const price = showPromotion ? ecoFly.price.amount / 2 : ecoFly?.price?.amount;

    return (
        <Card className='py-4'>
            <CardContent className='flex items-center gap-4 p-0 px-2 py-6'>
                <div className='flex items-center gap-2'>
                    <RadioGroupItem value={value} id={value} onClick={handleSelect} />
                    <Label htmlFor={value} className='text-thy-muted font-bold cursor-pointer'>
                        {classType.toLocaleUpperCase()}
                    </Label>
                </div>
                <div>
                    <span className='font-semibold text-thy-muted text-xs'>Yolcu Başına</span>
                    <p className='font-bold text-lg'> {`${ecoFly?.price.currency} ${price}`}</p>
                </div>
                <ChevronDownIcon className='text-thy-muted ml-6 h-6 w-6' />
            </CardContent>
        </Card>
    );
}
