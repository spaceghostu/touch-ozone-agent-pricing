import React from 'react';
import styled from 'styled-components/native';
import PageWrapper from '../Components/PageWrapper';
import CustomerContactsSection from '../Components/FormSections/CustomerContactsSection';
import CustomerRegisteredDetailsSection from '../Components/FormSections/CustomerRegisteredDetailsSection';
import CustomerContactDetailsSection from '../Components/FormSections/CustomerContactDetailsSection';
import BankingDetailsSection from '../Components/FormSections/BankingDetailsSection';
import CustomerQuotationSection from '../Components/FormSections/CustomerQuotationSection';
import CustomerDeliveryAddress from '../Components/FormSections/CustomerDeliveryAddress';
import CustomerSearchSection from '../Components/FormSections/CustomerSearchSection';
import ConfirmationSection from '../Components/FormSections/ConfirmationSection';
import CustomerAcceptanceSection from '../Components/FormSections/CustomerAcceptanceSection';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from 'react-native';

export default function FormPage() {

    const methods = useForm();
    const { handleSubmit } = methods;
    const onSubmit = data => console.log(data);

    return (
        <FormProvider {...methods} >
            <PageWrapper>
                <CustomerSearchSection />
                <CustomerRegisteredDetailsSection />
                <CustomerContactDetailsSection />
                <BankingDetailsSection />
                {/* <CustomerContactsSection /> */}
                {/* <CustomerQuotationSection /> */}
                <CustomerDeliveryAddress />
                <CustomerAcceptanceSection />
                <Notice>
                    <Sup>1</Sup> Should the purchaser be a company, the signatory hereto warrants and binds himself in his personal capacity by virtue
                    of his signature hereto –{"\n"}
                    i. that he is duly authorised to sign this acceptance on behalf of the company;{"\n"}
                    ii. that the company will duly and punctually comply with its payment obligations in terms of this agreement
                </Notice>
                <ConfirmationSection />
                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </PageWrapper>
        </FormProvider>
    )
}


const Notice = styled.Text`
    padding: 20px;
`

const Sup = styled.Text`
    font-size: 8px;
    position: relative;
    top: -8px;
`