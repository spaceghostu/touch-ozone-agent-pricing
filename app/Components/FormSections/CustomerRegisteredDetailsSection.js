import React from 'react'
import CheckInput from '../FormComponents/CheckInput'
import LabelOnly from '../FormComponents/LabelOnly'
import RadioGroup from '../FormComponents/RadioGroup'
import TextInput from '../FormComponents/TextInput'
import FormSection from '../FormSection'
import { useFormContext } from 'react-hook-form';

export default function CustomerRegisteredDetailsSection() {

    const { watch } = useFormContext()

    const nonVAT = watch('nonVAT')

    return (
        <FormSection title="CUSTOMER REGISTERED DETAILS">
            <RadioGroup width={100}
                name="companyType"
                options={[
                    { label: '(Pty) Ltd' },
                    { label: 'Ltd' },
                    { label: 'P/Ship' },
                    { label: 'CC' },
                    { label: 'Sole Prop' },
                    { label: 'Trust' },
                    { label: 'Ass' },
                    { label: 'Other' },
                    { label: 'Gov' },
                ]} />
            <TextInput label="Registered Name" width={100} name="registeredName" />
            <TextInput label="Registration Number" width={50} name="registrationNumber" />
            <TextInput label="Vat Number" width={35} name="vatNo" disabled={nonVAT} />
            <CheckInput innerLabel="Non-VAT" width={15} name="nonVAT" />
            <TextInput label="Trading Name / Division / Department" width={100} name="tradingName" />
            <TextInput label="Holding Company (if applicable)" width={70} name="holdingCompany" />

            <RadioGroup width={30}
                label="Listed"
                name="holdingCompanyListed"
                options={[
                    { label: 'Y' },
                    { label: 'N' },
                ]} />
            <TextInput label="Registration Number" width={100} name="registrationNo" />
            <RadioGroup width={100}
                label="Can our CFO contact you to obtain your latest audited financial results"
                name="canContact"
                options={[
                    { label: 'Y' },
                    { label: 'N' },
                ]} />
            <LabelOnly label='Contact Person' width={10} />
            <TextInput label="Initials" width={10} name="initials" />
            <TextInput label="Surname" width={30} name="surname" />
            <TextInput label="Telephone No" width={30} name="telephoneNo" />
        </FormSection>
    )
}
