import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (

        <div className={s.content}>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/640px-Great_Wave_off_Kanagawa2.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;