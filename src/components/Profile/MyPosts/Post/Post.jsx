import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://cdn.vox-cdn.com/thumbor/YlU6hUr2mMC1UQFJRxX2wbsoZF4=/0x0:1100x580/920x613/filters:focal(520x151:696x327):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71921482/bkq6gtrpcnw43vsm5zm62q3z.0.png"></img>
                {props.message}
            </div>
            <span>{'like ' + props.likesCount}</span>
        </div>
    );
}

export default Post;