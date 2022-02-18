import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import { useSelector } from "react-redux";

const Wrapper = styled.div`
    && {
        display: flex;
        margin: 1rem;
        margin-top: 5rem;
        justify-content: center;
        background-color: #fbb034;
        padding: 1rem;
        border-radius: 12px;
    }
`;

const CommentsList = () => {
    const memos = useSelector((state) => state.tasks);

    return (
        <Wrapper>
            <ul>
			{memos.map((memo) => (
                <CommentItem id={memo.id} loginid = {memo.login} title={memo.text} completed={memo.status} />
			))}
		    </ul>
        </Wrapper>
    )
};

export default CommentsList;