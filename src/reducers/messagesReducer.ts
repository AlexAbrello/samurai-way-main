import {DialogItemType} from "../components/body/Messages/DialogItem";
import {MessageType} from "../components/body/Messages/Message"

type InitialStateType = {
  users: DialogItemType[]
  dialogs: MessageType[]
}

export const initialState: InitialStateType = {
  users: [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Ben'},
    {id: 3, name: 'Curt'},
    {id: 4, name: 'Bob'},
    {id: 5, name: 'Jack'},
  ],
  dialogs: [
    {id: 1, text: 'Hello!'},
    {id: 2, text: 'How are you?!'}
  ]
}

export const messagesReducer = (initialState: InitialStateType, action: MessageReducerType): InitialStateType => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      return {...initialState, dialogs: [...initialState["dialogs"], {id: action.payload.id, text: action.payload.text}]}
    }
    default:
      return initialState
  }
}

type MessageReducerType = AddMessageType

type AddMessageType = ReturnType<typeof addMessageAC>

export const addMessageAC = (id: number, text: string) => {
  return {
    type: 'ADD-MESSAGE',
    payload: {
      id,
      text
    }
  } as const
}