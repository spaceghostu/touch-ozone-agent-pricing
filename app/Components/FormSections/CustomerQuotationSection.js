import React, { useEffect } from 'react'
import FormSection from '../FormSection';
import TextInput from '../FormComponents/TextInput';
import InputTable, { Td, Trow } from '../FormComponents/InputTable';
import LabelOnly from '../FormComponents/LabelOnly';
import { useFormContext } from 'react-hook-form';
import { MOQ_PRICES } from '../../constants';

export default function CustomerQuotationSection() {

    const { watch, setValue } = useFormContext();

    const totals = Object.keys(MOQ_PRICES).map(code => watch(`quote-${code}-total`))

    useEffect(() => {
        const total = totals.reduce((acc, item) => acc + item);
        const vat = total * 0.15;
        setValue('quote-vat', vat || 0);
        setValue('quote-total', total || 0);
    }, [totals]);

    return (
        <FormSection title="CUSTOMER QUOTATION / ORDER">
            <InputTable
                widths={[20, 30, 10, 20, 20]}
                headersCenter
                headersBold
                headers={[
                    'Part Code',
                    'Master Product Description',
                    'Qty',
                    'Unit Price',
                    'Total',
                ]}>
                <Row code="SKU 001" description="Phone and laptop" />
                <Row code="SKU 002" description="White Office(Boxed)" />
                <Row code="SKU 003" description="Hand (No box)" />
                <Row code="SKU 004" description="Countertop (No box)" />
                <Row code="SKU 005" description="Door (No box)" />
                <Row code="SKU 007" description="Shoe insert" />
                <Row code="SKU 012" description="Small door/trolley handle sticker" />
                <Row code="SKU 013" description="Large door/trolley handle sticker" />
                <Trow>
                    <LabelOnly center bold width={80} label="VAT (If applicable)" />
                    <TextInput currency alignRight width={20} name="quote-vat" />
                </Trow>
                <Trow>
                    <LabelOnly center bold width={80} label="TOTAL - Including Shipping" />
                    <TextInput currency alignRight width={20} name="quote-total" />
                </Trow>
            </InputTable>
        </FormSection>
    )
}

const getUnitPrice = (code, quantity) => {
    if (!quantity) return
    let result = 0;
    MOQ_PRICES[code].forEach((value, index) => {
        const [moq, price] = value;
        if (MOQ_PRICES[code][index + 1]) {
            const nextMoq = MOQ_PRICES[code][index + 1][0];
            if (quantity >= moq && quantity <= nextMoq) {
                result = price
            }
        } else {
            if (quantity >= moq) {
                result = price
            }
        }
    });
    return result
}

const Row = ({ code, description }) => {

    const { watch, setValue } = useFormContext();

    const quantity = watch(`quote-${code}-quantity`);

    useEffect(() => {
        const unitPrice = getUnitPrice(code, quantity);
        const total = unitPrice * quantity;
        setValue(`quote-${code}-unit-price`, isNaN(unitPrice) ? 0 : unitPrice);
        setValue(`quote-${code}-total`, isNaN(total) ? 0 : total);
    }, [quantity]);


    return (
        <Trow>
            <LabelOnly width={20} center label={code} />
            <LabelOnly width={30} center label={description} />
            <TextInput width={10} alignRight name={`quote-${code}-quantity`} />
            <TextInput currency alignRight readonly width={20} name={`quote-${code}-unit-price`} />
            <TextInput currency alignRight readonly width={20} name={`quote-${code}-total`} />
        </Trow>
    )
}