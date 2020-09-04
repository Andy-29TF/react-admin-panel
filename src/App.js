import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: '#003049',
      textColor: 'white',
      users: [],
      posts: [],
      displayUsersOrPosts: true,
      displayHeaderSet: 'none' 
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        
        const salaries =[ 0, '3100LEI', '2300LEI', '3400LEI'];
        const avatar = [0, 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80']
        data.forEach(user => {
          user.isGoldClient = true;
          user.salary = salaries[user.id];
          user.avatar = avatar[user.id];
        });
        
        this.setState({users: data});
      })

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then( response => response.json())
        .then( data2 => {
          data2 = data2.filter(post => post.id <= 3);
          this.setState({posts: data2});
        })

  }

  changeBackgroundColor(event) {
    this.setState({background: event.target.value});
  }

  changeTextColor(event) {
    this.setState({textColor: event.target.value});
  }

  popUpSet() {
    if (this.state.displayHeaderSet === 'none') {
      this.setState({displayHeaderSet: 'grid'});
    } else {
      this.setState({displayHeaderSet: 'none'});
    }
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });
    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient, avatar) {
    event.preventDefault();
    event.target.reset();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            avatar
          }
        ]
      }
    });
  }

  deleteUsers(id) {
          const newUsers = this.state.users.filter( elem => elem.id !== id );
          
          this.setState({users: newUsers});

  }


  render() {

    
    return(
      <div className="app" style={{background: this.state.background , color: this.state.textColor}}>
        <header>
          <h1>Admin panel - Proiectul 1</h1>

          <button onClick={(event) => this.popUpSet(event)}>&#9776;</button>

          <div className="header-set" style={{display: this.state.displayHeaderSet}}>
            <p>Schimba culoarea fundalului</p>
            <input id="changeBackgroundColor" type="color" onChange={(event) => this.changeBackgroundColor(event)}/>
            
            <p>Schimba culoarea textului</p>
            <input id="changeTextColor" type="color" onChange={(event) => this.changeTextColor(event)}/>
          </div>
        </header>
       
       <section>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient, avatar) => this.submitAddForm(event, name, email, isGoldClient, avatar)}/>
        
        <div className="user-post-container">
          {
            this.state.displayUsersOrPosts
              ?<button className="btn-display" onClick={(event) => {this.setState({displayUsersOrPosts: false})}} ><span></span>Afiseaza postari</button>
              :<button className="btn-display" onClick={(event) => {this.setState({displayUsersOrPosts: true})}} ><span></span>Afiseaza useri</button>
          }
          {
            this.state.displayUsersOrPosts
              ?<UserList users={this.state.users} deleteUsers={(id) => {this.deleteUsers(id)}} />
              :<PostList posts={ this.state.posts}/>
          }

        </div>
       </section>




      </div>
    );
  }
}

export default App;
