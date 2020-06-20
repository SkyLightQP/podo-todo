import React from 'react';
import styled from 'styled-components';
import TodoCard from '../TodoCard';

const ListStyle = styled.div`
    display: flex;
    justify-content: center;
`;

const TodoList: React.FC = () => {
    return (
        <ListStyle>
            <div>
                <TodoCard data={{ content: 'dddd', date: 1592664745828, done: false }} />
                <TodoCard data={{ content: 'dddd', date: 1592664745828, done: true }} />
                <TodoCard data={{ content: 'dddd', date: 1592664745828, done: false }} />
                <TodoCard data={{ content: 'dddd', date: 1592664745828, done: true }} />
                <TodoCard data={{ content: 'dddd', date: 1592664745828, done: false }} />
            </div>
        </ListStyle>
    );
};

export default TodoList;
