import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dymych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'}
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'You'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'ddd'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    );
}

export default Dialogs;