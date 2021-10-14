import React from 'react'
import FormSection from '../FormSection';
import CheckInput from '../FormComponents/CheckInput';
import TextInput from '../FormComponents/TextInput';

export default function CustomerSearchSection() {

    return (
        <FormSection title="TOUCH OZONE (PTY) LTD CUSTOMER REGISTRATION AND SALES ORDER PROCESS" titleCenter>
            <CheckInput label="Existing Customer" width={30} name="existingCustomer" />
            <TextInput label="Search" width={70} name="customer" />
            <TextInput label="Authorized Agent" width={50} name="authorizingAgent" />
            <TextInput label="Cell Number" width={50} name="cellNo" />
        </FormSection>
    )
}
