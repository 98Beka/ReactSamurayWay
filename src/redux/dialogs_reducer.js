const UPDATE_NEW_MASSAGE_BODY = 'UPDATE_NEW_MASSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) =>({ type: UPDATE_NEW_MASSAGE_BODY, body: body })

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;