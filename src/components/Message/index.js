import React from 'react';

const Message = ({text}) => {
    return (
        <div css={{ border: '1px solid gray', padding: '8px', borderRadius: 16, width: '150px', overflowX:'hidden'}}>
            {text}
        </div>
    );
};

export default Message;