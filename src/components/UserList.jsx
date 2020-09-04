import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

class UserList extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        const { users } = this.props;

        return (
            <div className="user-list">
                <h2>Lista utilizatorilor</h2>
                { users.map((user) => {
                    return (<UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        isGoldClient={ user.isGoldClient }
                        salary={ user.salary }
                        avatar={ user.avatar }
                        key={ user.id }
                        deleteUsers={this.props.deleteUsers}
                    />
                    )
                })}
            </div>
        );
    }
}

export default UserList;