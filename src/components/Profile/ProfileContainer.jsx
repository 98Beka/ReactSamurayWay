import React, { useDebugValue } from "react";
import Profile from './Profile';
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from '../../redux/profile_reducer';
import { toggleIsFetching } from '../../redux/users_reducer';
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://127.0.0.1:7292/api/Profiles/1`)
            .then(responce => {

                this.props.setUserProfile(responce.data);
                this.props.toggleIsFetching(false);
            });
    }
    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : null}
                <Profile {...this.props} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let actionCreators = {
    setUserProfile,
    toggleIsFetching
}

export default connect(mapStateToProps, actionCreators)(ProfileContainer);