import React from 'react';
import styles from "./message.module.css";
import cn from 'classnames';

const Message = ({text, user }) => {
    return (
        <div className={cn(styles.message, {
            [styles.messageBot]: user.name === "Бот",
        })}>
            <img src={user.avatar} alt="avatar" className={cn(styles.messageAvatar)} />
            <div className={cn(styles.messageText)}>    
                <p className={cn(styles.messageName)}>{user.name}</p>
                <p>{text}</p>
            </div>
        </div>
        
    );
};

export default Message;