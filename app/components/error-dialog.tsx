import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Props {
    open: boolean;
    onClose: () => void;
    origin: string[] | undefined;
    destination: string[] | undefined;
}

export function ErrorDialog({ open, onClose, origin, destination }: Props) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className='sm:max-w-[625px]'>
                <DialogHeader>
                    <DialogTitle>Hata!</DialogTitle>
                </DialogHeader>
                <div>Seçtiğiniz şehirler uçuş listemizde bulunmuyor. Aşağıdaki şehirleri tercih edebilirsiniz.</div>
                <div className='font-semibold'>Kalkış Noktaları</div>
                {origin?.join(',')}
                <div className='font-semibold'>Varış Noktaları</div>
                {destination?.join(',')}
                <DialogFooter>
                    <Button variant='outline' onClick={onClose}>
                        Tamam
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
