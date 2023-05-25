import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/640px-Great_Wave_off_Kanagawa2.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photoUrl} className={s.userPhoto}/>
            </div>
        </div>
    );
}

export default ProfileInfo;