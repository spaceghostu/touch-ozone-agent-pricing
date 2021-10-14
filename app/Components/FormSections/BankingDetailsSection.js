import React from 'react'
import RadioGroup from '../FormComponents/RadioGroup'
import FormSection from '../FormSection'
import TextInput from '../FormComponents/TextInput';
import LabelOnly from '../FormComponents/LabelOnly';
import { useFormContext } from 'react-hook-form';

export default function BankingDetailsSection() {

    const { register, watch, control } = useFormContext()

    const otherBank = watch('otherBank')

    return (
        <FormSection title="BANKING DETAILS">
            <RadioGroup width={100}
                disabled={otherBank}
                control={control}
                label="Bank"
                name="bank"
                options={[
                    { label: 'Std Bank' },
                    { label: 'FNB' },
                    { label: 'ABSA' },
                    { label: 'Nedbank' },
                ]} />
            <TextInput label="Other" width={100} name="otherBank" />
            <TextInput label="Branch Name" width={50} name="branchName" />
            <TextInput label="Account Type" width={50} name="accountType" />
            <TextInput label="Account No" width={50} name="accountNo" />
            <TextInput label="Account Holder" width={50} name="accountHolder" />
            <LabelOnly label="Date Opened" width={20} />
            <TextInput label="Month" width={40} name="dateOpenedMonth" />
            <TextInput label="Year" width={40} name="dateOpenedYear" />
        </FormSection>
    )
}
