import React from 'react'
import styled from 'styled-components/native'
import { Sup } from '../../Pages/FormPage'

export default function InputWrapper({ label, width, children, sup, noBorder, taller, noPadding }) {
    return (
        <Wrapper width={width} taller={taller}>
            {label && <Label>{label}{sup && <Sup>{sup}</Sup>}</Label>}
            <Control noBorder={noBorder} noPadding={noPadding}>
                {children}
            </Control>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    flex: ${props => `1 1 ${props.width}%`};
    ${props => props.taller ? 'height: 60px' : null};
    min-height: 28px;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    margin-top: -1px;
    margin-left: -1px;
`

const Label = styled.Text`
    display: flex;
    align-items: center;
    padding: 5px;
    ${props => props.noBorder ? '' : `
        border-right-width: 1px;
        border-right-color: solid;
        border-right-style: black;
    `}
    flex: 1;
    white-space: nowrap;
`

const Control = styled.View`
    display: flex;
    padding: 0;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-grow: 3;
`