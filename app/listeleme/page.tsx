'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup } from '@/components/ui/radio-group';
import { flights } from '@/lib/constants';
import { Fragment, useMemo, useState } from 'react';
import { CategoryCard } from './components/category-card';
import { FlightDetailsCard } from './components/flight-details';
import { PriceCard, SubCategories } from './components/price-card';
import { Promotion } from './components/promotion';
import { CLASS_TYPES } from './lib/constants';
import { sortByType } from './lib/utils';

export default function ListingPage() {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedItem, setSelectedItem] = useState<SubCategories[]>([]);
    const [showPromotion, setShowPromotion] = useState(false);
    const [sortType, setSortType] = useState('price');

    const handleSelection = (value: string) => setSelectedOption(value.split('-')[0]);
    const handleSelectSubCategories = (categories: SubCategories[]) => setSelectedItem(categories);
    const handleChangePromotion = (value: boolean) => setShowPromotion(value);

    const sortedFlights = useMemo(() => sortByType(flights, sortType), [sortType]);

    return (
        <main className='flex min-h-screen flex-col p-8 gap-2 w-fit m-auto'>
            <span className='bg-thy-red px-12 py-1 text-white w-fit'>Uçuş</span>
            <p className='text-thy-muted font-semibold text-2xl'>İstanbul - Antalya, 6 Yolcu</p>
            <Promotion onChangePromotion={handleChangePromotion} showPromotion={showPromotion} />
            <div>
                <div className='bg-thy text-white py-4 px-2 flex justify-end items-center gap-2 rounded-t'>
                    <span className='mr-6'>Sıralama Kriteri</span>
                    <Button
                        onClick={() => setSortType('price')}
                        variant={sortType === 'price' ? 'secondary' : 'outline'}
                    >
                        Ekonomi Ücreti
                    </Button>
                    <Button
                        onClick={() => setSortType('hours')}
                        variant={sortType === 'hours' ? 'secondary' : 'outline'}
                    >
                        Kalkış Saati
                    </Button>
                </div>
                <RadioGroup onValueChange={handleSelection}>
                    <div className='rounded-b bg-thy-header p-4 border-secondary border-2 flex flex-col gap-4'>
                        {sortedFlights.map(({ id, ...item }) => (
                            <Fragment key={id}>
                                <div className='flex justify-between items-center gap-4'>
                                    <FlightDetailsCard data={item} />
                                    <PriceCard
                                        data={item.fareCategories.ECONOMY}
                                        classType={CLASS_TYPES.ECONOMY}
                                        id={id}
                                        onSelectSubCategories={handleSelectSubCategories}
                                        showPromotion={showPromotion}
                                    />
                                    <PriceCard
                                        data={item.fareCategories.BUSINESS}
                                        classType={CLASS_TYPES.BUSINESS}
                                        id={id}
                                        onSelectSubCategories={handleSelectSubCategories}
                                        showPromotion={showPromotion}
                                    />
                                </div>
                                {id === selectedOption ? (
                                    <Card>
                                        <CardContent className='p-4 grid grid-cols-3 gap-4'>
                                            {selectedItem?.map((item) => (
                                                <CategoryCard
                                                    item={item}
                                                    key={item.brandCode}
                                                    showPromotion={showPromotion}
                                                />
                                            ))}
                                        </CardContent>
                                    </Card>
                                ) : null}
                            </Fragment>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </main>
    );
}
