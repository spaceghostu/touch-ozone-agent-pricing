import React from 'react'
import FormSection from '../FormSection';
import TextInput from '../FormComponents/TextInput';
import { useFormContext } from 'react-hook-form';

export default function CustomerDeliveryAddress() {

    const { register } = useFormContext()

    return (
        <FormSection title="CUSTOMER DELIVERY ADDRESS FOR THIS ORDER">
            <TextInput label="Building" width={100} register={register} name="building" />
            <TextInput label="Street" width={100} register={register} name="street" />
            <TextInput label="Suburb" width={100} register={register} name="suburb" />
            <TextInput label="City" width={70} register={register} name="city" />
            <TextInput label="Code" width={30} register={register} name="code" />
            <TextInput label="Contact Person" width={70} register={register} name="contactPerson" />
            <TextInput label="Cell No" width={30} register={register} name="cell" />
        </FormSection>
    )
}
