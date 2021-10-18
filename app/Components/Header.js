import React from 'react'
import styled from 'styled-components/native';
import left from '../../assets/header-left.png'
import right from '../../assets/header-right.png'

export default function Header() {
    return (
        <Container>
            <Left source={left} />
            <Right source={right} />
        </Container>
    )
}

const Container = styled.View`
    flex-flow: row nowrap;
    justify-content: space-between;
    height: 150px;
    width: 100%;
    padding: 20px;
`

const Image = styled.Image`
    height: 150px;
    display: flex;
`
const Left = styled(Image)`
    width: 150px;
`
const Right = styled(Image)`
    width: 200px;
`