import React from 'react'
import FormSection from '../FormSection'
import TextInput from '../FormComponents/TextInput';
import InputTable, { Td, Trow } from '../FormComponents/InputTable';
import LabelOnly from '../FormComponents/LabelOnly';

export default function CustomerContactsSection() {

    return (
        <FormSection title="CUSTOMER CONTACTS" column>
            <InputTable headers={[
                'Position',
                'Name',
                'Telephone',
                'Email address',
            ]}>
                <Trow>
                    <LabelOnly width={25} label="Operations (COO)" />
                    <TextInput width={25} name={`customerContact-operations-name`} />
                    <TextInput width={25} name={`customerContact-operations-telephone`} />
                    <TextInput width={25} name={`customerContact-operations-email`} />
                </Trow>
                <Trow>
                    <LabelOnly width={25} label="SCM - Buyer" />
                    <TextInput width={25} name={`customerContact-scmBuyer-name`} />
                    <TextInput width={25} name={`customerContact-scmBuyer-telephone`} />
                    <TextInput width={25} name={`customerContact-scmBuyer-email`} />
                </Trow>
                <Trow>
                    <LabelOnly width={25} label="Finance - Creditors" />
                    <TextInput width={25} name={`customerContact-financeCreditors-name`} />
                    <TextInput width={25} name={`customerContact-financeCreditors-telephone`} />
                    <TextInput width={25} name={`customerContact-financeCreditors-email`} />
                </Trow>
                <Trow>
                    <LabelOnly width={25} label="HR - Health/Compliance" />
                    <TextInput width={25} name={`customerContact-HR-name`} />
                    <TextInput width={25} name={`customerContact-HR-telephone`} />
                    <TextInput width={25} name={`customerContact-HR-email`} />
                </Trow>
            </InputTable>
        </FormSection>
    )
}
