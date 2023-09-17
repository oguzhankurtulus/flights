import { Button } from '@/components/ui/button';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export function Fail() {
    return (
        <>
            <div className='flex items-center gap-4 py-8 border-b-2 mb-4'>
                <CrossCircledIcon className='bg-destructive rounded-full w-8 h-8 text-white' />
                <span className='font-bold text-xl'>Kabin seçiminiz tamamlanamadı.</span>
            </div>
            <div className='flex justify-end'>
                <Button asChild variant='destructive'>
                    <Link href='/'>Başa Dön</Link>
                </Button>
            </div>
        </>
    );
}
