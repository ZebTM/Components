import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard />
            <CommentDetail 
                author = "Sam" 
                timeAgo = "Today at 10:56PM" 
                text = "Great Blog!" 
                imageAvatar = {faker.image.avatar()}/>
            <CommentDetail 
                author = "Alex" 
                timeAgo = "Today at 3:04AM" 
                text = "Trash blog!" 
                imageAvatar = {faker.image.avatar()}/>
            <CommentDetail 
                author = "Jane" 
                timeAgo = "Today at 4:46PM" 
                text = "-_-" 
                imageAvatar = {faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));


