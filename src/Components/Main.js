import React from 'react';
import { AddComment, LoginTop, CommentsList } from '../Components'


const Main = () => {
    return (
    <>
            <LoginTop />
            <AddComment />
            <CommentsList></CommentsList>
    </>
    )
};

export default Main;