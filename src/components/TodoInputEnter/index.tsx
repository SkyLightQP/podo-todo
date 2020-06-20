import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4vw;
    height: 3.5rem;
    border: none;
    border-radius: 0 16px 16px 0;
    background-color: var(--color--background);
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 12px;

    cursor: pointer;

    &:hover {
        color: var(--color--hover);
    }
`;

const TodoInputEnter: React.FC = () => {
    return (
        <IconWrapper>
            <FontAwesomeIcon icon={faPencilAlt} />
        </IconWrapper>
    );
};

export default TodoInputEnter;
