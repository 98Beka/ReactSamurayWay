import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreaetor, updateNewPostTextActionCreator } from "../../../redux/profile_reducer";


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);


    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostCHange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostCHange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;