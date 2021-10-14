import React from 'react'
import styled from 'styled-components/native'

export default function InputWrapper({ label, width, children, sup, noBorder, taller, noPadding }) {
    return (
        <Wrapper width={width} taller={taller}>
            <Inner noBorder={noBorder}>
                {label && <Label>{label}{sup && <sup>{sup}</sup>}</Label>}
                <Control noBorder={noBorder} noPadding={noPadding}>
                    {children}
                </Control>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    flex: ${props => `1 1 ${props.width}%`};
    background-color: black;
    ${props => props.taller ? 'height: 60px' : null};
    min-height: 28px;
`

const Inner = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: white;
    margin: ${props => props.noBorder ? '0' : '0.5px'};
    width: 100%;
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
    ${'' /* padding: ${({ noPadding }) => noPadding ? '0' : '5px'}; */}
    padding: 0;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-grow: 3;
`