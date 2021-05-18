import React from 'react';
import Message from './message';
import styles from "./messageList.module.css";
import cn from 'classnames';

const MessageList = ({messages}) => {
    return (
        <div className={cn(styles.messageList)}>
            {messages.map(mes => (
                <div key={mes.id} css={{marginBottom: '24px'}}>
                    <Message text={mes.text} user={mes.user}/>
                </div>
            ))}
        </div>
    );
};

export default MessageList ;