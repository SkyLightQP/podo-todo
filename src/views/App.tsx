import React, { useState } from 'react';
import Title from '../atomics/Title';
import Container from '../utils/Container';
import SubTitle from '../atomics/SubTitle';
import styled from 'styled-components';
import TodoInput from '../components/TodoInput';
import { addTodo, entriesTodo } from '../todo/TodoManager';
import TodoCard from '../components/TodoCard';

const HeaderStyle = styled.header`
    margin-top: 1rem;
    margin-bottom: 1.5rem;
`;

const ListStyle = styled.div`
    display: flex;
    justify-content: center;
`;

const NoDataTextStyle = styled.p`
    margin: 0;
    text-align: center;
    font-family: 'Noto Serif KR', serif;
    font-size: 1.5rem;
`;

const App: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const all = entriesTodo();
    const todoMap = all.map((todo) => (
        <TodoCard key={todo.date} data={{ content: todo.content, date: todo.date, done: todo.done }} />
    ));

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

            <ListStyle>
                <div>{all.length <= 0 ? <NoDataTextStyle>No Data</NoDataTextStyle> : todoMap}</div>
            </ListStyle>
        </Container>
    );
};

export default App;
