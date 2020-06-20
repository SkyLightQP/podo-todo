import React from 'react';
import styled from 'styled-components';
import CardDateText from '../../atomics/CardDateText';
import TrashIcon from '../../atomics/TrashIcon';
import Switch from 'react-input-switch';
import { TodoPayload } from '../../payloads/TodoPayload';

const CardStyle = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;

    width: 60vw;
    height: 8rem;

    background-color: var(--color--background);
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 12px;

    padding: 2rem;
    margin-bottom: 2.3rem;
    cursor: pointer;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 8px 8px 20px;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

const CardBodyStyle = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

const CardLeftContainer = styled.div`
    width: 90%;
    flex: none;
`;

const CardRightContainer = styled.div`
    margin-top: 8px;
    margin-left: auto;
`;

const CardTextStyle = styled.p`
    width: 100%;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const SwitchWrapper = styled(Switch)`
    margin-right: 16px;
    margin-bottom: 2px;
`;

interface TodoCardProps {
    readonly data: TodoPayload;
}

const TodoCard: React.FC<TodoCardProps> = ({ data }) => {
    const date = new Date(data.date);

    return (
        <CardStyle>
            <CardBodyStyle>
                <CardLeftContainer>
                    <CardTextStyle>{data.content}</CardTextStyle>
                    <CardDateText>{date.toLocaleString()}</CardDateText>
                </CardLeftContainer>
                <CardRightContainer>
                    <SwitchWrapper value={data.done ? 1 : 0} />
                    <TrashIcon />
                </CardRightContainer>
            </CardBodyStyle>
        </CardStyle>
    );
};

export default TodoCard;
