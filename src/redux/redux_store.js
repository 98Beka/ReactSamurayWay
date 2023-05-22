import {combineReducers, legacy_createStore as createStore} from "redux";
import profilePage from "./profile_reducer";
import dialogsPage from "./dialogs_reducer";
import sidebarPage from "./sidebar-reducer";


let reducers = combineReducers({
    profilePage,
    dialogsPage,
    sidebarPage
});
let store = createStore(reducers);

export default store;