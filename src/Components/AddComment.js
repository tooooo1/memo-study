import React from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";
import styled from 'styled-components';
import { Bt, Input } from './LoginTop'

const Wrapper = styled.div`
    && {
        display: flex;
        margin: 1rem;
        margin-top: 5rem;
        justify-content: center;
        background-color: #5a60a8;
        padding: 1rem;
        border-radius: 12px;
    }
`;

const CommentsList = ({ children, onClick, hide, ...rest }) => (
    <Wrapper>
        <Input {...rest}/>
        <Bt onClick={onClick} disabled={hide}>
            {children}
        </Bt>
    </Wrapper>
);

export default CommentsList;