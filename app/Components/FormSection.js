import React from 'react'
import styled from 'styled-components/native';

export default function FormSection({ title, titleCenter, children, column }) {
    return (
        <Wrapper>
            <Header titleCenter={titleCenter}>{title}</Header>
            <Body column={column}>{children}</Body>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

const Header = styled.Text`
    background-color: #bfbfbf;
    border-bottom-width: 0px;
    padding: 10px;
    font-weight: bold;
    text-align: ${props => props.titleCenter ? 'center' : 'start'};
    border-width: 1px;
`

const Body = styled.View`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    flex-wrap: wrap;
    margin-left: 1px;
`