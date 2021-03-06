import React from 'react'
import FormSection from '../FormSection'
import TextInput from '../FormComponents/TextInput';
import RadioGroup from '../FormComponents/RadioGroup';
import { useFormContext } from 'react-hook-form';

export default function CustomerContactDetailsSection() {

    const { watch } = useFormContext()

    const postalSameAsAbove = watch('postalSameAsAbove');

    return (
        <FormSection title="CUSTOMER CONTACT DETAILS">
            <TextInput label="Physical Address" width={100} name="physicalAddress" />
            <TextInput label="Code" width={100} name="physicalCode" />
            <RadioGroup width={100}
                label="Postal Address same as above"
                name="postalSameAsAbove"
                options={[
                    { label: 'Y' },
                    { label: 'N' },
                ]} />

            <TextInput disabled={postalSameAsAbove === "Y"} label="Postal Address" width={100} name="postalAddress" />
            <TextInput disabled={postalSameAsAbove === "Y"} label="Code" width={100} name="postalCode" />
            <TextInput label="Telephone Number" width={50} name="telNo" />
            <TextInput label="Email Address" width={50} name="customerEmail" />
            <TextInput label="Website" width={100} name="website" />
        </FormSection>
    )
}
