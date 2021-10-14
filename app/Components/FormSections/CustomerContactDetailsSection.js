import React from 'react'
import FormSection from '../FormSection'
import TextInput from '../FormComponents/TextInput';
import RadioGroup from '../FormComponents/RadioGroup';
import { useFormContext } from 'react-hook-form';

export default function CustomerContactDetailsSection() {

    const { register, watch } = useFormContext()

    const postalSameAsAbove = watch('postalSameAsAbove');

    return (
        <FormSection title="CUSTOMER CONTACT DETAILS">
            <TextInput label="Physical Address" width={100} register={register} name="physicalAddress" />
            <TextInput label="Code" width={100} register={register} name="physicalCode" />
            <RadioGroup width={100}
                label="Postal Address same as above"
                name="postalSameAsAbove"
                {...register("postalSameAsAbove")}
                options={[
                    { label: 'Y' },
                    { label: 'N' },
                ]} />
            {postalSameAsAbove === "N" && (
                <>
                    <TextInput label="Postal Address" width={100} register={register} name="postalAddress" />
                    <TextInput label="Code" width={100} register={register} name="postalCode" />
                </>
            )}
            <TextInput label="Telephone Number" width={50} register={register} name="telNo" />
            <TextInput label="Email Address" width={50} register={register} name="customerEmail" />
            <TextInput label="Website" width={100} register={register} name="website" />
        </FormSection>
    )
}
