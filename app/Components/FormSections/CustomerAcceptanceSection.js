import React from 'react'
import FormSection from '../FormSection';
import TextInput from '../FormComponents/TextInput';
import { useFormContext } from 'react-hook-form';

export default function CustomerAcceptanceSection() {

    const { register } = useFormContext()

    return (
        <FormSection title="CUSTOMER ACCEPTANCE">
            <TextInput label="Signature" width={100} register={register} name="signature" taller />
            <TextInput label="Name" width={100} register={register} name="name" />
            <TextInput label="Authority/Designation" sup="1" width={100} register={register} name="authorityDesignation" />
            <TextInput label="Date" width={100} register={register} name="acceptanceDate" />
            <TextInput label="Official Order Number" width={100} register={register} name="orderNumber" />
        </FormSection>
    )
}
