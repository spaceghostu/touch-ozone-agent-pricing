import React, { useState } from 'react'
import styled from 'styled-components/native';

export default function Button({ title, onPress }) {
    const [hover, setHover] = useState(false);
    return (
        <Container onPress={onPress}
            hover={hover}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <Text>
                {title}
            </Text>
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    margin-left: 10px;
    margin-right: 10px;
    background-color: #027ad6;
    border-radius: 4px;
    padding: 5px 10px;
    user-select: none;
    ${({ hover }) => hover ? 'background-color: #1f95f0;' : ''}
`

const Text = styled.Text`
    color: white;
`