import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Messages.module.css'

export type DialogItemType = {
  name: string
  id: number
}
const DialogItem = ({name, id}: DialogItemType) => {
  return (
      <div>
        <NavLink to={`/messages/${id}`} activeClassName={style.activeLink}>{name}</NavLink>
      </div>
  );
};

export default DialogItem;