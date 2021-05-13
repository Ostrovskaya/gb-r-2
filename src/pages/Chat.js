import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Message from '@components/Message';
import {nanoid} from 'nanoid';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handlerAddMessage = (e) => {
        e.preventDefault();
        setMessages([...messages, {id: nanoid(), text: message }]);
        setMessage('');
    }
    return (
        <div css={{ textAlign: 'center' }}>
            <form onSubmit={(e) => handlerAddMessage(e)} >
                <TextField value={message} id="outlined-basic" label="Outlined" variant="outlined" onChange={e => setMessage(e.target.value)}/>
                <div css={{marginTop: '16px'}}>
                    <Button type="submit" variant="outlined" color="primary">
                        Отправить
                    </Button>
                </div>
                
            </form>
            <div css={{border: '1px solid green', padding: '16px', width: '500px', margin: '32px auto', borderRadius: 16}}>
                {messages.map(mes => (
                    <div key={mes.id} css={{marginBottom: '24px'}}>
                        <Message text={mes.text} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Chat;