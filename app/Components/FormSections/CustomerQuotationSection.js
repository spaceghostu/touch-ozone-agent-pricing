import React from 'react'
import FormSection from '../FormSection';
import TextInput from '../FormComponents/TextInput';
import InputTable, { Td } from '../FormComponents/InputTable';
import LabelOnly from '../FormComponents/LabelOnly';

export default function CustomerQuotationSection() {

    const Row = (code, description) => (
        <tr>
            <Td><LabelOnly noBorder center label={code} /></Td>
            <Td><LabelOnly noBorder center label={description} /></Td>
            <Td><TextInput noBorder name={`quote-SKU001-quantity`} /></Td>
            <Td></Td>
            <Td></Td>
        </tr>
    )

    return (
        <FormSection title="CUSTOMER QUOTATION / ORDER">
            <InputTable headers={[
                'Part Code',
                'Master Product Description',
                'Qty',
                'Unit Price',
                'Total',
            ]}>
                {Row('SKU 001', 'Phone and laptop')}
                {Row('SKU 002', 'White Office(Boxed)')}
                {Row('SKU 003', 'Hand (No box)')}
                {Row('SKU 004', 'Countertop (No box)')}
                {Row('SKU 005', 'Door (No box)')}
                {Row('SKU 007', 'Shoe insert')}
                {Row('SKU 0012', 'Small door/trolley handle sticker')}
                {Row('SKU 0013', 'Large door/trolley handle sticker')}
                <tr>
                    <Td colSpan="4">VAT (If applicable)</Td>
                    <Td><TextInput noBorder name="quote-vat" /></Td>
                </tr>
                <tr>
                    <Td colSpan="4">TOTAL - Including Shipping</Td>
                    <Td><TextInput noBorder name="quote-total" /></Td>
                </tr>
            </InputTable>
        </FormSection>
    )
}
