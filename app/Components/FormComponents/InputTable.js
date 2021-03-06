import React from 'react'
import styled from 'styled-components/native'

export default function InputTable({ children, headers, widths, headersBold, headersCenter }) {

    return (
        <Wrapper>
            <Head>
                {headers.map((header, index) => (
                    <Th headersBold={headersBold}
                        headersCenter={headersCenter}
                        {...(widths ? { width: widths[index] } : {})}
                        key={index}>
                        {header}
                    </Th>
                ))}
            </Head>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.View`
    width: 100%;
    flex-direction: column;
`

const Head = styled.View`
    flex-direction: row;
    width: 100%;
`

const Th = styled.Text`
    display: flex;
    height: 28px;
    align-items: center;
    flex: ${({ width }) => width ? `1 1 ${width}%` : '1'};
    padding: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    margin-top: -1px;
    margin-left: -1px;
    ${({ headersCenter }) => headersCenter && 'justify-content: center'};
    ${({ headersBold }) => headersBold && 'font-weight: bold'};
`
export const Trow = styled.View`
    flex-direction: row;
`