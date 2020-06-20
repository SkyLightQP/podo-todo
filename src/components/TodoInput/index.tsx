import React from 'react';
import styled from 'styled-components';
import TodoInputEnter from '../TodoInputEnter';

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const InputStyle = styled.input`
    box-sizing: border-box;
    width: 56vw;
    height: 3.5rem;

    padding: 1rem;
    margin-bottom: 3rem;

    border: none;
    background-color: var(--color--background);
    border-radius: 16px 0 0 16px;
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 12px;

    &:hover {
        box-shadow: rgba(52, 152, 219, 0.6) 3px 3px 10px;
    }

    &:focus {
        box-shadow: rgba(52, 152, 219, 0.6) 3px 3px 10px;
    }
    
    &::placeholder {
        font-size: 12px;
    }
`;

const TodoInput: React.FC = () => {
    return (
        <InputContainer>
            <InputStyle type="text" placeholder="추가할 TODO 내용을 입력하세요." />
            <TodoInputEnter />
        </InputContainer>
    );
};

export default TodoInput;
