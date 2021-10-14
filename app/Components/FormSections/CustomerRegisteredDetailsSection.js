import React from 'react'
import CheckInput from '../FormComponents/CheckInput'
import LabelOnly from '../FormComponents/LabelOnly'
import RadioGroup from '../FormComponents/RadioGroup'
import TextInput from '../FormComponents/TextInput'
import FormSection from '../FormSection'
import { useFormContext } from 'react-hook-form';

export default function CustomerRegisteredDetailsSection() {

    const { register, watch } = useFormContext()

    const nonVAT = watch('nonVAT')

    return (
        <FormSection title="CUSTOMER REGISTERED DETAILS">
            <RadioGroup width={100}
                {...register("companyType")}
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
            <TextInput label="Registered Name" width={100} register={register} name="registeredName" />
            <TextInput label="Registration Number" width={50} register={register} name="registrationNumber" />
            <TextInput label="Vat Number" width={35} register={register} name="vatNo" disabled={nonVAT} />
            <CheckInput innerLabel="Non-VAT" width={15} {...register("nonVAT")} name="nonVAT" />
            <TextInput label="Trading Name / Division / Department" width={100} register={register} name="tradingName" />
            <TextInput label="Holding Company (if applicable)" width={70} register={register} name="holdingCompany" />

            <RadioGroup width={30}
                {...register("holdingCompanyListed")}
                label="Listed"
                name="holdingCompanyListed"
                options={[
                    { label: 'Y' },
                    { label: 'N' },
                ]} />
            <TextInput label="Registration Number" width={100} register={register} name="registrationNo" />
            <RadioGroup width={100}
                {...register("canContact")}
                label="Can our CFO contact you to obtain your latest audited financial results"
                name="canContact"
                options={[
                    { label: 'Y' },
                    { label: 'N' },
                ]} />
            <LabelOnly label='Contact Person' width={10} />
            <TextInput label="Initials" width={10} register={register} name="initials" />
            <TextInput label="Surname" width={30} register={register} name="surname" />
            <TextInput label="Telephone No" width={30} register={register} name="telephoneNo" />
        </FormSection>
    )
}
