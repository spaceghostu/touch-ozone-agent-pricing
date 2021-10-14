import React from 'react'
import styled from 'styled-components/native'

export default function LabelOnly({ label, width, noBorder, center, bold }) {
    return (
        <Wrapper width={width} noBorder={noBorder} center={center} bold={bold}>
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.Text`
    display: flex;
    ${({ center }) => center ? 'justify-content: center' : null}
    flex: 1;
    white-space: nowrap;
    flex: ${props => `1 1 ${props.width}%`};
    font-weight: normal;
    padding: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    margin-top: -1px;
    margin-left: -1px;
    ${({ bold }) => bold && 'font-weight: bold;'}
`