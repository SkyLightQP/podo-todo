import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    width: 1400px;
    margin: 0 auto;
`;

const Container: React.FC = ({ children }) => {
    return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
