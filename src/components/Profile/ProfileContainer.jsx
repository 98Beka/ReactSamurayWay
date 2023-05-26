import React, { useEffect } from "react";
import Profile from './Profile';
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from '../../redux/profile_reducer';
import { toggleIsFetching } from '../../redux/users_reducer';
import Preloader from "../common/Preloader/Preloader";
import { useParams } from "react-router-dom";

function ProfileContainer(props) {
    const { userId } = useParams();
    let currUserId = userId || 2
    props.toggleIsFetching(true);

    useEffect(() => {
        axios.get(`https://127.0.0.1:7292/api/Profiles/${currUserId}`)
            .then(responce => {
                props.setUserProfile(responce.data);
                props.toggleIsFetching(false);
            });
    }, [userId]);

    return (
        <div>
            {props.isFetching ? <Preloader /> : null}
            <Profile {...props} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let actionCreators = {
    setUserProfile,
    toggleIsFetching
}

export default connect(mapStateToProps, actionCreators)(ProfileContainer);