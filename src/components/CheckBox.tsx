import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckBoxProps extends CheckboxPrimitive.CheckboxProps {

}

export function CheckBox(props: CheckBoxProps) {

    return (
        <CheckboxPrimitive.Root
            className='w-6 h-6 p-[2px] bg-gray-800 rounded '
            {...props}
        >
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='w-5 h-5 text-brand-500'/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}