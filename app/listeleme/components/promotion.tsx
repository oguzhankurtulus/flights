'use client';
import { Switch } from '@/components/ui/switch';
import { Fragment } from 'react';

interface Props {
    showPromotion: boolean;
    onChangePromotion: (value: boolean) => void;
}

export function Promotion({ showPromotion, onChangePromotion }: Props) {
    const handleChange = (value: boolean) => onChangePromotion(value);
    return (
        <div className='flex flex-col gap-4 my-8'>
            <div className='flex gap-4 items-center'>
                <span className='font-semibold'>Promosyon Kodu</span>
                <Switch onCheckedChange={handleChange} />
            </div>
            {showPromotion ? (
                <Fragment>
                    <p className='text-thy-muted'>
                        Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini %50 indirimle satın
                        alabilirsiniz!
                    </p>
                    <p className='text-thy-muted'>
                        Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim yapılamamaktadır.
                    </p>
                </Fragment>
            ) : null}
        </div>
    );
}
