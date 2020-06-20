import React from 'react';
import Title from '../atomics/Title';
import Container from '../utils/Container';
import TodoList from '../components/TodoList';
import SubTitle from '../atomics/SubTitle';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    margin-top: 1rem;
    margin-bottom: 1.5rem;
`;

const App: React.FC = () => {
    return (
        <Container>
            <HeaderStyle>
                <Title>Podo TODO</Title>
                <a href="https://github.com/SkyLightQP/podo-todo/" target="_blank" rel="noopener noreferrer">
                    <SubTitle>View on GitHub</SubTitle>
                </a>
            </HeaderStyle>
            <TodoList />
        </Container>
    );
};

export default App;
