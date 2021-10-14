import React, { forwardRef } from 'react'
import InputWrapper from './InputWrapper'
import { CheckBox, Text } from "react-native";
import { Controller } from 'react-hook-form';
import styled from 'styled-components/native';

const CheckInput = forwardRef(({ label, innerLabel, width, name, control }, ref) => {

    return (
        <InputWrapper label={label} width={width}>
            <Inner>
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CheckBox
                            onBlur={onBlur}
                            onValueChange={onChange}
                            value={value}
                        />
                    )}
                    name={name}
                    defaultValue={false}
                />
                <InnerLabel>{innerLabel}</InnerLabel>
            </Inner>
        </InputWrapper>
    )
})


export default CheckInput

const InnerLabel = styled.Text`
    margin-left: 10px;
`

const Inner = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
`