import {addMessageAC, messagesReducer} from "./messagesReducer";

test('new message should be added', () => {

  let startState = {
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

  const action = addMessageAC('new message')
  const endState = messagesReducer(startState, action)

  expect(endState['dialogs'].length).toBe(3)
  expect(endState['dialogs'][2].text).toBe('new message')
})