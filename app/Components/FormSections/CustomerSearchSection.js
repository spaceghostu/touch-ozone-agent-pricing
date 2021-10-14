import React from 'react'
import FormSection from '../FormSection';
import CheckInput from '../FormComponents/CheckInput';
import TextInput from '../FormComponents/TextInput';
import { useFormContext } from 'react-hook-form';
import Typeahead from '../FormComponents/Typeahead';

export default function CustomerSearchSection() {

    const { register, control } = useFormContext();

    const options = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
    ]

    return (
        <FormSection title="TOUCH OZONE (PTY) LTD CUSTOMER REGISTRATION AND SALES ORDER PROCESS" titleCenter>
            <CheckInput label="Existing Customer" width={30} name="existingCustomer" control={control} />
            {/* <Typeahead label="Search" width={70} name="customer" options={options} /> */}
            <TextInput label="Search" width={70} name="customer" />
            <TextInput label="Authorized Agent" width={50} name="authorizingAgent" />
            <TextInput label="Cell Number" width={50} name="cellNo" />
        </FormSection>
    )
}
