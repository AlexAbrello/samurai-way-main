import DialogItem, {DialogItemType} from "./DialogItem";
import Message, {MessageType} from "./Message";
import style from './Messages.module.css'

type DialogDataType = DialogItemType[]
type MessagesDataType = MessageType[]

export const Messages = () => {

  const dialogData: DialogDataType = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Ben'},
    {id: 3, name: 'Curt'},
    {id: 4, name: 'Bob'},
    {id: 5, name: 'Jack'},
  ]

  const messagesData: MessagesDataType = [
    {id: 1, text: 'Hello!'},
    {id: 2, text: 'How are you?!'}
  ]

  const dialogs = dialogData.map(e => <DialogItem name={e.name} id={e.id}/>)
  const messages = messagesData.map(e => <Message id={e.id} text={e.text}/>)

  return (
      <div className={style.wrapper}>
        <div className={style.nameList}>
          {dialogs}
        </div>
        <div>
          {messages}
        </div>
        <input type="text"/>
      </div>
  )
}