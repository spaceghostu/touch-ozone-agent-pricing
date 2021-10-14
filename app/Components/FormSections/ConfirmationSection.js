import React from 'react'
import FormSection from '../FormSection';
import TextInput from '../FormComponents/TextInput';
import { useFormContext } from 'react-hook-form';

export default function ConfirmationSection() {

    const { register } = useFormContext()

    return (
        <FormSection title="CONFIRMATION OF RECEIPT OF ORDER">
            <TextInput label="Touch Ozone Reference Number" width={100} register={register} name="refNo" />
        </FormSection>
    )
}
