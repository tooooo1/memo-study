import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { countup } from "../features/tasksSlice";

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
    // const dispatch = useDispatch();

    // const tick = () => { 
    //     dispatch(countup(memos.del));
    // };

    // useEffect(() => {
    //     const timer = setInterval(() => tick(), 1000);
    //     return () => clearInterval(timer);
    // });

    return (
        <Wrapper>
            <ul>
			{memos.map((memo) => (
                <CommentItem id={memo.id} loginid = {memo.login} text={memo.text} year={memo.year} del={memo.del} month={memo.month} day={memo.day} />
			))}
		    </ul>
        </Wrapper>
    )
};

export default CommentsList;