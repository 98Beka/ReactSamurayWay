import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>add post</button>
                <button>remove</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi bro'/>
                <Post message='Hi siter'/>
            </div>
        </div>
    );
}

export default MyPosts;