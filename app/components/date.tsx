import { CalendarIcon } from '@radix-ui/react-icons';

export function DateInput() {
    return (
        <div className='flex gap-4 items-center px-2 py-4 bg-thy-dark text-white h-[66px]'>
            <span>Tarih</span>
            <CalendarIcon className='w-6 h-6 text-thy-muted' />
        </div>
    );
}
