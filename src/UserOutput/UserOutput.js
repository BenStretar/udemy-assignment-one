import React from 'react';

const UserOutput = (props) => {
    const style = {
        backgroundColor: 'grey',
        font: 'inherit',
        border: '1px solid red',
        padding: '8px',
        width: '500px',
        align: 'center'
      }
    return(
    <div style={style}>
        <p>Text goes here</p>
        <p>My username is {props.userName}</p>
    </div>
    )
}

export default UserOutput;