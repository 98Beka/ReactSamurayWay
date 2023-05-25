import {combineReducers, legacy_createStore as createStore} from "redux";
import profilePage from "./profile_reducer";
import dialogsPage from "./dialogs_reducer";
import sidebarPage from "./sidebar-reducer";
import usersPage from './users_reducer'

let reducers = combineReducers({
    profilePage,
    dialogsPage,
    sidebarPage,
    usersPage
});
let store = createStore(reducers);

window.store = store;

export default store;