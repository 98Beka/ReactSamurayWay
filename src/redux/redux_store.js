import {combineReducers, legacy_createStore as createStore} from "redux";
import profilePage from "./profile_reducer";
import dialogsPage from "./dialogs_reducer";
import sidebarPage from "./sidebar-reducer";
import usersPage from "./users_reducer"
import auth from "./auth_reducer";

let reducers = combineReducers({
    profilePage,
    dialogsPage,
    sidebarPage,
    usersPage,
    auth
});
let store = createStore(reducers);

window.store = store;

export default store;