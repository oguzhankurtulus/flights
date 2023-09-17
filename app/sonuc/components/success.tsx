import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Amount } from './amount';

export function Success() {
    return (
        <>
            <div className='flex items-center gap-4 py-8 border-b-2 mb-4'>
                <CheckCircledIcon className='bg-thy-success rounded-full w-8 h-8 text-white' />
                <span className='font-bold text-xl'>Kabin seçiminiz tamamlandı.</span>
            </div>
            <Amount />
        </>
    );
}
