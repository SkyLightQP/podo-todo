import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const IconWrapper = styled.button`
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
        box-shadow: rgba(52, 152, 219, 0.6) 3px 3px 10px;
        color: var(--color--hover);
    }

    &:focus {
        box-shadow: rgba(52, 152, 219, 0.6) 3px 3px 10px;
    }
`;

const TodoInputEnter: React.FC<React.ButtonHTMLAttributes<any>> = ({ ...props }) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <IconWrapper {...props}>
            <FontAwesomeIcon icon={faPencilAlt} />
        </IconWrapper>
    );
};

export default TodoInputEnter;
