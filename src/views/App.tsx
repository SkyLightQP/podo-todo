import React, { useState } from 'react';
import Title from '../atomics/Title';
import Container from '../utils/Container';
import TodoList from '../components/TodoList';
import SubTitle from '../atomics/SubTitle';
import styled from 'styled-components';
import TodoInput from '../components/TodoInput';
import { addTodo } from '../todo/TodoManager';

const HeaderStyle = styled.header`
    margin-top: 1rem;
    margin-bottom: 1.5rem;
`;

const App: React.FC = () => {
    const [input, setInput] = useState<string>('');

    const onEnter = () => {
        if (input === '') return;
        addTodo(input);
        setInput('');
    };

    return (
        <Container>
            <HeaderStyle>
                <Title>Podo TODO</Title>
                <a href="https://github.com/SkyLightQP/podo-todo/" target="_blank" rel="noopener noreferrer">
                    <SubTitle>View on GitHub</SubTitle>
                </a>
            </HeaderStyle>

            <TodoInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') onEnter();
                }}
                onClick={onEnter}
            />

            <TodoList />
        </Container>
    );
};

export default App;
