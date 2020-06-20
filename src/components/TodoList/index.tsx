import React from 'react';
import styled from 'styled-components';
import TodoCard from '../TodoCard';
import { entriesTodo } from '../../todo/TodoManager';

const ListStyle = styled.div`
    display: flex;
    justify-content: center;
`;

const TodoList: React.FC = () => {
    return (
        <ListStyle>
            <div>
                {entriesTodo().map((todo) => (
                    <TodoCard key={todo.date} data={{ content: todo.content, date: todo.date, done: todo.done }} />
                ))}
            </div>
        </ListStyle>
    );
};

export default TodoList;
