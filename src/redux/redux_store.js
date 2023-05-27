import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profilePage from "./profile_reducer";
import dialogsPage from "./dialogs_reducer";
import sidebarPage from "./sidebar-reducer";
import usersPage from "./users_reducer"
import auth from "./auth_reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage,
    dialogsPage,
    sidebarPage,
    usersPage,
    auth
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;