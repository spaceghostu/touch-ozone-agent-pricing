import React from 'react'
import FormSection from '../FormSection';
import TextInput from '../FormComponents/TextInput';
import { useFormContext } from 'react-hook-form';

export default function CustomerDeliveryAddress() {

    const { register } = useFormContext()

    return (
        <FormSection title="CUSTOMER DELIVERY ADDRESS FOR THIS ORDER">
            <TextInput label="Building" width={100} name="building" />
            <TextInput label="Street" width={100} name="street" />
            <TextInput label="Suburb" width={100} name="suburb" />
            <TextInput label="City" width={70} name="city" />
            <TextInput label="Code" width={30} name="code" />
            <TextInput label="Contact Person" width={70} name="contactPerson" />
            <TextInput label="Cell No" width={30} name="cell" />
        </FormSection>
    )
}
