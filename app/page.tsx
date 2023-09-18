'use client';
import { InputElement } from '@/components/custom/InputElement';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { flights } from '@/lib/constants';
import { getDestinationCities, getOriginCities } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRightIcon } from '@radix-ui/react-icons';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { DateInput } from './components/date';
import { ErrorDialog } from './components/error-dialog';
import { PersonInput } from './components/person';
import { Title } from './components/title';
import { CLASS_TYPES } from './listeleme/lib/constants';

const formSchema = z.object({
    from: z.string({ required_error: 'Bu alan zorunludur!' }),
    to: z.string({ required_error: 'Bu alan zorunludur!' }),
    person: z.number().default(1),
    flightClass: z.string().default(CLASS_TYPES.ECONOMY),
});

export default function Home() {
    const router = useRouter();
    const storageItems = JSON.parse(window.localStorage.getItem('values') || '{}');
    const initialValues = Object.keys(storageItems)?.length
        ? storageItems
        : { person: 1, flightClass: CLASS_TYPES.ECONOMY };

    const [error, setError] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    });
    const origin = useMemo(() => getOriginCities(flights), []);
    const destination = useMemo(() => getDestinationCities(flights), []);

    const handleSubmitForm = (values: z.infer<typeof formSchema>) => {
        if (!origin?.includes(values.from) || !destination?.includes(values.to) || values.from === values.to) {
            setError(true);
        } else {
            setError(false);
            router.push('/listeleme');
            window.localStorage.setItem('values', JSON.stringify(values));
        }
    };
    const handleClose = () => setError(false);

    return (
        <main className='bg-thy flex min-h-screen flex-col items-center p-24'>
            <Title />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmitForm)}>
                    <div className='p-4 bg-thy-foreground flex gap-2 justify-center items-start'>
                        <InputElement placeholder='Nereden' form={form} name='from' />
                        <InputElement placeholder='Nereye' form={form} name='to' />
                        <DateInput />
                        <PersonInput form={form} />
                        <Button type='submit' variant='destructive' size='icon' className='h-[66px] w-12 rounded-none'>
                            <ChevronRightIcon className='h-16 w-16' />
                        </Button>
                    </div>
                </form>
            </Form>
            <ErrorDialog open={error} onClose={handleClose} destination={destination} origin={origin} />
        </main>
    );
}
