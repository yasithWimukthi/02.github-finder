import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    users : [],
    loading : false
  }

  async componentDidMount(){

    this.setState({loading : true});

    const res = await axios.get('https://api.github.com/users'); 
    //console.log(res.data);

    this.setState({
      users : res.data,
      loading : false
    });
  } 

  //SEARCH GIHUB USERS
  searchUsers = async (text)=>{
    //console.log(text);
    this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/users?q=${text}`); 
    //console.log(res.data);

    this.setState({
      users : res.data,
      loading : false
    });
  };

  render(){
    return (
      <div className="App">
          <Navbar />

          <div className="container">
              <Search searchUsers={this.searchUsers}></Search>
              <Users  users={this.state.users} loading={this.state.loading} />
          </div>
          
      </div>
    );
  }

}

export default App;
