import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'
import { CheckBox } from 'react-native';
import { useFormContext } from 'react-hook-form';

const RadioGroup = ({ options, width, label, name, disabled }) => {

    const { setValue, watch } = useFormContext();

    const handleChange = value => {
        if (!disabled) {
            setValue(name, value)
        }
    };

    const thisValue = watch(name);

    useEffect(() => {
        setValue(name, '');
    }, [])

    return (
        <Wrapper width={width}>
            {label && <Label>{label}</Label>}
            {options.map((option, index) => (
                <Option key={index}>
                    <OptionLabel>{option.label}</OptionLabel>
                    <CheckBox
                        disabled={disabled}
                        name={option.label}
                        onValueChange={() => handleChange(option.label)}
                        value={thisValue === option.label}
                    />
                </Option>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    flex: ${props => `1 1 ${props.width}%`};
    min-height: 28px;
`

const Label = styled.Text`
    flex: 1;
    padding: 5px;
    flex-wrap: nowrap;
    display: flex;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    margin-top: -1px;
    margin-left: -1px;
`

const Option = styled.View`
    flex: 1;
    padding: 5px;
    flex-wrap: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    margin-top: -1px;
    margin-left: -1px;
`

const OptionLabel = styled.Text`
    white-space: nowrap;
    ${({ disabled }) => disabled ? 'opacity: 0.7' : null};
    margin-right: 10px;
`

export default RadioGroup