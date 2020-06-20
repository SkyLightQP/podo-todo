import styled from 'styled-components';

const SubTitle = styled.p`
    margin: 0;
    text-align: center;
    font-family: 'Noto Serif KR', serif;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color: #333333;

    &:hover {
        text-shadow: rgba(52, 152, 219, 0.4) 3px 3px 10px;
        color: var(--color--hover);
    }
`;

export default SubTitle;
