
import styled from 'styled-components/native';
import React from 'react'

export default function PageWrapper({ children }) {
    return (
        <PageOuter>
            <PageInner>
                {children}
            </PageInner>
        </PageOuter>
    )
}


const PageOuter = styled.View`
    display: flex;
    justify-content: center;
    width: 100%;
`

const PageInner = styled.View`
    border: 1px solid #000;
    display: flex;
    ${'' /* max-width: 800px; */}
    flex-direction: column;
`