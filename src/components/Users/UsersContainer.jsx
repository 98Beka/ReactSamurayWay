import { connect } from "react-redux";
import { follow, setCurrentPage, toggleIsFetching, setUsers, setUsersTotalCount, unfollow } from "../../redux/users_reducer";
import React from 'react';
import axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://127.0.0.1:7292/api/Users?page=${this.props.currentPage}&pageSize=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setUsersTotalCount(responce.data.totalItemsCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://127.0.0.1:7292/api/Users?page=${pageNumber}&pageSize=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setUsersTotalCount(responce.data.totalItemsCount);
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let actionCreators = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
}

export default connect(mapStateToProps, actionCreators)(UsersComponent);
