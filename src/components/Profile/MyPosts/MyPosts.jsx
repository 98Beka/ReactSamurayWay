import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Brom', likesCount: 2},
        {id: 3, message: 'Truo', likesCount: 3}
    ]
    return (
        <div className={s.postsBlock}>
            my posts
            <div>
                <textarea></textarea>
                <button>add post</button>
                <button>remove</button>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
            </div>
        </div>
    );
}

export default MyPosts;