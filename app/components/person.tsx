'use client';
import { InputElement } from '@/components/custom/InputElement';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MinusIcon, PersonIcon, PlusIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CLASS_TYPES } from '../listeleme/lib/constants';

interface Props {
    form: UseFormReturn<any>;
}

export function PersonInput({ form }: Props) {
    const storageItems = JSON.parse(window.localStorage.getItem('values') || '{}');
    const [personNumber, setPersonNumber] = useState(storageItems?.person || 1);
    const handleMinus = () => {
        const { person } = form.getValues();
        if (person > 1) {
            form.setValue('person', person - 1);
            setPersonNumber(person - 1);
        }
    };
    const handlePlus = () => {
        const { person } = form.getValues();
        form.setValue('person', person + 1);
        setPersonNumber(person + 1);
    };
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className='px-12 py-4 bg-thy-dark text-white cursor-pointer relative h-[66px] flex items-center'>
                    <PersonIcon className='w-6 h-6 text-thy-muted' />
                    <span className='absolute top-1 right-2'>{personNumber}</span>
                </div>
            </PopoverTrigger>
            <PopoverContent>
                <div className='grid gap-8'>
                    <p className='text-thy-muted font-semibold text-sm'>Kabin ve yolcu seçimi</p>
                    <FormField
                        control={form.control}
                        name='flightClass'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <RadioGroup
                                        defaultValue={storageItems?.flightClass || CLASS_TYPES.ECONOMY}
                                        className='flex justify-between'
                                        onValueChange={field.onChange}
                                    >
                                        <div className='flex items-center space-x-2'>
                                            <FormItem>
                                                <FormControl>
                                                    <RadioGroupItem
                                                        value={CLASS_TYPES.ECONOMY}
                                                        id={CLASS_TYPES.ECONOMY}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                            <Label
                                                className='cursor-pointer text-xs text-thy-muted font-semibold'
                                                htmlFor={CLASS_TYPES.ECONOMY}
                                            >
                                                Economy Class
                                            </Label>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <FormItem>
                                                <FormControl>
                                                    <RadioGroupItem
                                                        value={CLASS_TYPES.BUSINESS}
                                                        id={CLASS_TYPES.BUSINESS}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                            <Label
                                                className='cursor-pointer text-xs text-thy-muted font-semibold'
                                                htmlFor={CLASS_TYPES.BUSINESS}
                                            >
                                                Business Class
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <div className='flex justify-between items-center'>
                        <p>Yolcu</p>
                        <div className='flex gap-4 items-center'>
                            <Button
                                type='button'
                                variant='secondary'
                                size='icon'
                                className='w-8 h-8'
                                onClick={handleMinus}
                            >
                                <MinusIcon className='text-thy-muted' />
                            </Button>
                            <span className='text-xs'>
                                <InputElement
                                    name='person'
                                    form={form}
                                    className='bg-none w-[48px] border-none p-2 inset-none shadow-none text-center'
                                    disabled
                                    type='number'
                                    min={1}
                                />
                            </span>
                            <Button
                                type='button'
                                variant='secondary'
                                size='icon'
                                className='w-8 h-8'
                                onClick={handlePlus}
                            >
                                <PlusIcon className='text-thy-muted' />
                            </Button>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
