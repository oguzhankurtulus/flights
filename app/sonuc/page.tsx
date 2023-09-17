'use client';
import { useSearchParams } from 'next/navigation';
import { Fail } from './components/fail';
import { Success } from './components/success';

export default function CompletedPage() {
    const searchParams = useSearchParams();
    const isSuccess = searchParams.get('status') === 'AVAILABLE';
    return (
        <main className='flex min-h-screen flex-col p-8 gap-2 w-fit m-auto m-w-full min-w-[50%]'>
            {isSuccess ? <Success /> : <Fail />}
        </main>
    );
}
