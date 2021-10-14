import React from 'react'
import FormSection from '../FormSection';
import TextInput from '../FormComponents/TextInput';

export default function ConfirmationSection() {

    return (
        <FormSection title="CONFIRMATION OF RECEIPT OF ORDER">
            <TextInput label="Touch Ozone Reference Number" width={100} name="refNo" />
        </FormSection>
    )
}
