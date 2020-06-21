import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
`;

const Container: React.FC = ({ children }) => {
    return (
        <ContainerStyle>
            <div>{children}</div>
        </ContainerStyle>
    );
};

export default Container;
