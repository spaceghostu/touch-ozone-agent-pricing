import React from 'react'
import styled from 'styled-components'

export default function InputTable({ children, headers }) {

    return (
        <Wrapper>
            <tbody>
                <Thead headers={headers} />
                {children}
            </tbody>
        </Wrapper>
    )
}

const Wrapper = styled.table`
    width: 100%;
    border-collapse: collapse;
`

const Th = styled.th`
    border: 1px solid black;
    height: 28px;
`

export const Td = styled(Th)``;

const Thead = ({ headers }) => (
    <tr>
        {headers.map((header, index) => (
            <Th key={index}>{header}</Th>
        ))}
    </tr>
)
