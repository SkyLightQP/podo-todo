import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const IconWrapper = styled(FontAwesomeIcon)`
    cursor: pointer;

    &:hover {
        color: var(--color--hover);
    }
`;

const TrashIcon: React.FC = () => {
    return <IconWrapper icon={faTrashAlt} />;
};

export default TrashIcon;
