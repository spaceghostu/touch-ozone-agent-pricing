import React, { forwardRef } from 'react';
import styled from 'styled-components/native'
import { CheckBox } from 'react-native';
import { Controller } from 'react-hook-form';

const RadioGroup = forwardRef(({ options, width, label, name, disabled, control }, ref) => {
    return (
        <Wrapper width={width}>
            {label && <Label>
                <LabelInner>{label}</LabelInner>
            </Label>}
            {options.map((option, index) => (
                <Option key={index}>
                    <OptionInner>
                        <OptionLabel>{option.label}</OptionLabel>
                        <Controller
                            control={control}
                            rules={{
                                maxLength: 100,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <CheckBox
                                    disabled={disabled}
                                    onBlur={onBlur}
                                    onValueChange={onChange}
                                    value={value}
                                />
                            )}
                            name={name}
                            defaultValue={false}
                        />
                    </OptionInner>
                </Option>
            ))}
        </Wrapper>
    )
})


const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    flex: ${props => `1 1 ${props.width}%`};
    min-height: 28px;
`

const Label = styled.View`
    display: flex;
    flex: 1;
    white-space: nowrap;
    background-color: black;
`
const LabelInner = styled.Text`
    flex: 1;
    padding: 5px;
    flex-wrap: nowrap;
    display: flex;
    background-color: white;
    margin: 0.5px;
    width: 100%;
`

const Option = styled.View`
    background-color: black;
    display: flex;
    flex: 1;
`

const OptionInner = styled.View`
    flex: 1;
    padding: 5px;
    flex-wrap: nowrap;
    display: flex;
    background-color: white;
    margin: 0.5px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const OptionLabel = styled.Text`
    white-space: nowrap;
    ${({ disabled }) => disabled ? 'opacity: 0.7' : null};
    margin-right: 10px;
`

export default RadioGroup