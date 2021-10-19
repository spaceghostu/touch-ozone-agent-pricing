import React from 'react'
import InputWrapper from './InputWrapper'
import styled from 'styled-components/native';
import { Controller } from 'react-hook-form';
import LabelOnly from './LabelOnly';

export default function TextInput({ label, width, sup, noBorder, name, taller, disabled, control, readonly, currency, alignRight }) {

    return (
        <InputWrapper label={label} width={width} sup={sup} noBorder={noBorder} taller={taller}>
            <Controller
                control={control}
                rules={{}}
                render={({ field: { onChange, onBlur, value } }) => (
                    <MaskInput
                        readonly={readonly}
                        disabled={disabled || readonly}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        currency={currency}
                        alignRight={alignRight}
                    />
                )}
                name={name}
                defaultValue=""
            />
        </InputWrapper>
    )
}

const Input = styled.TextInput`
    width: 100%;
    height: 100%;
    padding: 5px;
    ${({ readonly }) => readonly && 'color: black;'}
    ${({ disabled }) => disabled && `
        background-color: #fdfdfd;
        cursor: not-allowed;
    `}
    ${({ currency }) => currency && 'opacity: 0;'}
    ${({ alignRight }) => alignRight && 'text-align: right;'}
`

const Mask = styled.Text`
    width: 100%;
    height: 100%;
    padding: 5px;
    position: absolute;
    ${({ alignRight }) => alignRight && 'text-align: right;'}
`

const MaskInput = (props) => {

    const currency = (value) => 'R ' + (Math.round(value * 100) / 100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");

    return (
        <>
            <Input {...props} />
            {props.currency && <Mask alignRight={props.alignRight}>{currency(props.value)}</Mask>}
        </>
    )
}