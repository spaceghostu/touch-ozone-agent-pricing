import React from 'react'
import InputWrapper from './InputWrapper'
import styled from 'styled-components/native';

export default function TextInput({ label, width, sup, noBorder, name, taller, disabled }) {
    return (
        <InputWrapper label={label} width={width} sup={sup} noBorder={noBorder} taller={taller}>
            <Input disabled={disabled} />
        </InputWrapper>
    )
}

const Input = styled.TextInput`
    width: 100%;
    height: 100%;
    padding: 5px;
`