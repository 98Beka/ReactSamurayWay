import { act } from "react-dom/test-utils";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://runews24.ru/assets/components/phpthumbof/cache/7d67e0ff3f082b6848ca1340006b2b6e.e7b3df8d2521429058af50ff07f8cef7.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, photoUrl: 'https://runews24.ru/assets/components/phpthumbof/cache/7d67e0ff3f082b6848ca1340006b2b6e.e7b3df8d2521429058af50ff07f8cef7.jpg', followed: false, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
        { id: 3, photoUrl: 'https://runews24.ru/assets/components/phpthumbof/cache/7d67e0ff3f082b6848ca1340006b2b6e.e7b3df8d2521429058af50ff07f8cef7.jpg', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return { ...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type:SET_USERS, users })

export default usersReducer;