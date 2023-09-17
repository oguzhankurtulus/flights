import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CalendarIcon, ChevronRightIcon, MinusIcon, PersonIcon, PlusIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Home() {
    return (
        <main className='bg-thy flex min-h-screen flex-col items-center p-24'>
            <section className='mb-4 text-center text-white text-2xl'>
                <span>Merhaba</span>
                <h2>Nereyi keşfetmek istersiniz?</h2>
            </section>
            <div className='p-4 bg-thy-foreground flex gap-2 justify-center items-center'>
                <Input className='bg-white py-8 rounded-none' placeholder='Nereden' />
                <Input className='bg-white py-8 rounded-none' placeholder='Nereye' />
                <div className='flex gap-4 items-center px-2 py-4 bg-thy-dark text-white h-[66px]'>
                    <span>Tarih</span>
                    <CalendarIcon className='w-6 h-6 text-thy-muted' />
                </div>
                <Popover>
                    <PopoverTrigger asChild>
                        <div className='px-12 py-4 bg-thy-dark text-white cursor-pointer relative h-[66px] flex items-center'>
                            <PersonIcon className='w-6 h-6 text-thy-muted' />
                            <span className='absolute top-1 right-2'>1</span>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className='grid gap-8'>
                            <p className='text-thy-muted font-semibold text-sm'>Kabin ve yolcu seçimi</p>
                            <RadioGroup className='flex justify-between'>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='economy' id='e' />
                                    <Label className='cursor-pointer text-xs text-thy-muted font-semibold' htmlFor='e'>
                                        Economy Class
                                    </Label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='business' id='b' />
                                    <Label className='cursor-pointer text-xs text-thy-muted font-semibold' htmlFor='b'>
                                        Business Class
                                    </Label>
                                </div>
                            </RadioGroup>
                            <div className='flex justify-between'>
                                <p>Yolcu</p>
                                <div className='flex gap-4 items-center'>
                                    <Button type='button' variant='secondary' size='icon' className='w-8 h-8'>
                                        <MinusIcon className='text-thy-muted' />
                                    </Button>
                                    <span className='text-xs'>1</span>
                                    <Button type='button' variant='secondary' size='icon' className='w-8 h-8'>
                                        <PlusIcon className='text-thy-muted' />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Button type='submit' variant='destructive' size='icon' className='h-[66px] w-12 rounded-none' asChild>
                    <Link href='/listeleme'>
                        <ChevronRightIcon className='h-16 w-16' />
                    </Link>
                </Button>
            </div>
        </main>
    );
}
