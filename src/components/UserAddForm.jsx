import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            avatar: ''
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    updateAvatar(event) {
        const gender = event.target.value;
       if (gender === "male") {
            this.setState({avatar: 'https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png'});
       }else {
        this.setState({avatar: 'https://www.kindpng.com/picc/m/24-248442_female-user-avatar-woman-profile-member-user-profile.png'});
       }
    }


    render() {
        const {name, email, isGoldClient, avatar} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient, avatar)}
            >
                <h2>Adauga utilizatori</h2>
                <input
                    className="input-text"
                    type="text"
                    onChange={(event) => this.updateName(event)}
                    placeholder="NUME"
                    required
                />
                <input
                    className="input-text"
                    type="text"
                    onChange={(event) => this.updateEmail(event)}
                    placeholder="EMAIL"
                    required
                />
                <div className="checkbox-input">
                    <div className="client-gold">
                        <p>Client GOLD</p>
                        <input
                            type="checkbox"
                            className="is-gold-client"
                            value="true"
                            onChange={(event) => this.updateIsGoldClient(event)}
                        />
                    </div>

                    <p>Selecteaza un avatar</p>
                    
                    <div className="avatar-input">
                        <input 
                            type="radio" 
                            id="male" 
                            name="gender" 
                            value="male" 
                            onChange={(event) => this.updateAvatar(event)}
                            required
                        />
                        <label htmlFor="male">Male</label>
                        <input 
                            type="radio" 
                            id="female" 
                            name="gender" 
                            value="female" 
                            onChange={(event) => this.updateAvatar(event)}
                            required
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>

                <input className="submit-form" type="submit" value="Introdu utilizatorul" />
            </form>
        )
    }
}

export default UserAddForm;