import React from 'react';
import styled from 'styled-components';
import TodoCard from '../TodoCard';
import { entriesTodo } from '../../todo/TodoManager';
import Title from '../../atomics/Title';

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

const TodoList: React.FC = () => {
    const all = entriesTodo();
    const todoMap = all.map((todo) => (
        <TodoCard key={todo.date} data={{ content: todo.content, date: todo.date, done: todo.done }} />
    ));

    return (
        <ListStyle>
            <div>{all.length <= 0 ? <NoDataTextStyle>No Data</NoDataTextStyle> : todoMap}</div>
        </ListStyle>
    );
};

export default TodoList;
