import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const User = () => (
    <Wrapper>
        <Title>User</Title>
        <p>ユーザーのページです</p>
    </Wrapper>
);

export default User;
