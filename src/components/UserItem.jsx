import React from 'react';
import './UserItem.css';

function UserItem(props) {
    const {name, email, isGoldClient, salary, avatar, deleteUsers, id} = props;

    return (
        <div className="user-item">
            <div className="user-item-info">
                <h3>{ name }</h3>
                <p>{ email }</p>
                <p>{ salary }</p>
                { isGoldClient
                    ? <p className="p-golden">Client GOLD</p>
                    : null
                }
            </div>
            <div className="user-item-media">
                <img src={ avatar } alt="avatar"/>
                <button onClick={() => {deleteUsers(id)}} >&#10539;</button>
            </div>
        </div>
    );
}

export default UserItem;