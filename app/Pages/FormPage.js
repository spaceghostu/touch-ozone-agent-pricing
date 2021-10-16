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
import { generatePdf } from '../generatePdf';

export default function FormPage() {

    const methods = useForm();
    const { handleSubmit, reset } = methods;
    const save = data => generatePdf(data);
    const email = data => generatePdf(data, true);

    const resetForm = () => reset(formDefaults);

    return (
        <FormProvider {...methods} >
            <PageWrapper>
                <CustomerSearchSection />
                <CustomerRegisteredDetailsSection />
                <CustomerContactDetailsSection />
                <BankingDetailsSection />
                <CustomerContactsSection />
                <CustomerQuotationSection />
                <CustomerDeliveryAddress />
                <CustomerAcceptanceSection />
                <Notice>
                    <Sup>1</Sup> Should the purchaser be a company, the signatory hereto warrants and binds himself in his personal capacity by virtue
                    of his signature hereto –{"\n"}
                    i. that he is duly authorised to sign this acceptance on behalf of the company;{"\n"}
                    ii. that the company will duly and punctually comply with its payment obligations in terms of this agreement
                </Notice>
                <ConfirmationSection />
                <Buttons>
                    <Button onPress={resetForm}>Reset</Button>
                    <Button onPress={handleSubmit(email)}>Email</Button>
                    <Button onPress={handleSubmit(save)}>Save</Button>
                </Buttons>
            </PageWrapper>
        </FormProvider>
    )
}


const Notice = styled.Text`
    padding: 20px;
`

export const Sup = styled.Text`
    font-size: 8px;
    position: relative;
    top: -6px;
`

const Buttons = styled.View`
    flex-direction: row;
    margin: 20px;
    justify-content: flex-end;
`
const Button = styled.Text`
    margin-left: 10px;
    margin-right: 10px;
    background-color: #bfbfbf;
    padding: 10px;
    border-width: 1px;
    user-select: none;
    &:hover {
        background-color: #ddd;
    }
`

const formDefaults = {
    "acceptanceDate": "",
    "accountHolder": "",
    "accountNo": "",
    "accountType": "",
    "authorityDesignation": "",
    "authorizingAgent": "",
    "bank": "",
    "branchName": "",
    "building": "",
    "canContact": "",
    "cell": "",
    "cellNo": "",
    "city": "",
    "code": "",
    "companyType": "",
    "contactPerson": "",
    "customer": "",
    "customerContact-HR-email": "",
    "customerContact-HR-name": "",
    "customerContact-HR-telephone": "",
    "customerContact-financeCreditors-email": "",
    "customerContact-financeCreditors-name": "",
    "customerContact-financeCreditors-telephone": "",
    "customerContact-operations-email": "",
    "customerContact-operations-name": "",
    "customerContact-operations-telephone": "",
    "customerContact-scmBuyer-email": "",
    "customerContact-scmBuyer-name": "",
    "customerContact-scmBuyer-telephone": "",
    "customerEmail": "",
    "dateOpenedMonth": "",
    "dateOpenedYear": "",
    "existingCustomer": false,
    "holdingCompany": "",
    "holdingCompanyListed": "",
    "initials": "",
    "name": "",
    "nonVAT": false,
    "orderNumber": "",
    "otherBank": "",
    "physicalAddress": "",
    "physicalCode": "",
    "postalAddress": "",
    "postalCode": "",
    "postalSameAsAbove": "",
    "quote-SKU 001-quantity": 0,
    "quote-SKU 001-total": 0,
    "quote-SKU 001-unit-price": 0,
    "quote-SKU 002-quantity": 0,
    "quote-SKU 002-total": 0,
    "quote-SKU 002-unit-price": 0,
    "quote-SKU 003-quantity": 0,
    "quote-SKU 003-total": 0,
    "quote-SKU 003-unit-price": 0,
    "quote-SKU 004-quantity": 0,
    "quote-SKU 004-total": 0,
    "quote-SKU 004-unit-price": 0,
    "quote-SKU 005-quantity": 0,
    "quote-SKU 005-total": 0,
    "quote-SKU 005-unit-price": 0,
    "quote-SKU 007-quantity": 0,
    "quote-SKU 007-total": 0,
    "quote-SKU 007-unit-price": 0,
    "quote-SKU 012-quantity": 0,
    "quote-SKU 012-total": 0,
    "quote-SKU 012-unit-price": 0,
    "quote-SKU 013-quantity": 0,
    "quote-SKU 013-total": 0,
    "quote-SKU 013-unit-price": 0,
    "quote-total": "",
    "quote-vat": "",
    "refNo": "",
    "registeredName": "",
    "registrationNo": "",
    "registrationNumber": "",
    "street": "",
    "suburb": "",
    "surname": "",
    "telNo": "",
    "telephoneNo": "",
    "tradingName": "",
    "vatNo": "",
    "website": "",
}