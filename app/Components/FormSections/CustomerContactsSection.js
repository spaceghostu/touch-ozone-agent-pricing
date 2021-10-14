import React from 'react'
import FormSection from '../FormSection'
import TextInput from '../FormComponents/TextInput';
import InputTable, { Td } from '../FormComponents/InputTable';
import { useFormContext } from 'react-hook-form';
import LabelOnly from '../FormComponents/LabelOnly';

export default function CustomerContactsSection() {

    const { register } = useFormContext()

    return (
        <FormSection title="CUSTOMER CONTACTS" column>
            <InputTable headers={[
                'Position',
                'Name',
                'Telephone',
                'Email address',
            ]}>
                <tr>
                    <Td><LabelOnly noBorder label="Operations (COO)" /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-operations-name`} /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-operations-telephone`} /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-operations-email`} /></Td>
                </tr>
                <tr>
                    <Td><LabelOnly noBorder label="SCM - Buyer" /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-scmBuyer-name`} /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-scmBuyer-telephone`} /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-scmBuyer-email`} /></Td>
                </tr>
                <tr>
                    <Td><LabelOnly noBorder label="Finance - Creditors" /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-financeCreditors-name`} /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-financeCreditors-telephone`} /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-financeCreditors-email`} /></Td>
                </tr>
                <tr>
                    <Td><LabelOnly noBorder label="HR - Health/Compliance" /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-HR-name`} /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-HR-telephone`} /></Td>
                    <Td><TextInput noBorder register={register} name={`customerContact-HR-email`} /></Td>
                </tr>
            </InputTable>
        </FormSection>
    )
}
