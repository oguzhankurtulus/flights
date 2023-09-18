import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input, InputProps } from '../ui/input';

interface Props extends Omit<InputProps, 'form' | 'name' | 'label' | 'placeholder'> {
    form: UseFormReturn<any>;
    name: string;
    label?: string;
    placeholder?: string;
}

export function InputElement({ form, name, label, placeholder, ...props }: Props) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className='space-y-0 w-full'>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input className='bg-white py-8 rounded-none' placeholder={placeholder} {...field} {...props} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
