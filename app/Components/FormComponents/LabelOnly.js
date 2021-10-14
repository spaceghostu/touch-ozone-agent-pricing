import React from 'react'
import styled from 'styled-components/native'

export default function LabelOnly({ label, width, noBorder, center }) {
    return (
        <Wrapper width={width} noBorder={noBorder}>
            <Inner center={center}>
                {label}
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    display: flex;
    ${({ noBorder }) => noBorder ? null : 'background-color: black'};
    flex: 1;
    white-space: nowrap;
    flex: ${props => `1 1 ${props.width}%`};
    font-weight: normal;
`

const Inner = styled.Text`
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: white;
    margin: 0.5px;
    width: 100%;
    ${({ center }) => center ? 'justify-content: center' : null}
`