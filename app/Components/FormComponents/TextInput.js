import React from 'react'
import InputWrapper from './InputWrapper'
import styled from 'styled-components/native';
import { Controller } from 'react-hook-form';

export default function TextInput({ label, width, sup, noBorder, name, taller, disabled, control }) {
    return (
        <InputWrapper label={label} width={width} sup={sup} noBorder={noBorder} taller={taller}>
            <Controller
                control={control}
                rules={{}}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        disabled={disabled}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
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
`