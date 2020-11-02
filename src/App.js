import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    users : [],
    loading : false,
    alert : null
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

  // CLEAR USERS FROM STATE
  clearUsers = ()=>{
    this.setState({
      users : [],
      loading : false
    })
  };

  // SET ALERT
  setAlert = (message,type)=>{
    this.setState({
      alert : {
        message : message,
        type : type
      }
    })

    setTimeout(()=>{
      this.setState({
        alert : null
      })
    },5000)
    //console.log(message)
  };

  render(){
    return (
      <div className="App">
          <Navbar />

          <div className="container">
              <Alert alert={this.state.alert} />
              <Search 
                searchUsers={this.searchUsers} 
                clearUsers={this.clearUsers}
                showClear={this.state.users.length>0 ? true : false }
                setAlert={this.setAlert}>              
              </Search>
              <Users  users={this.state.users} loading={this.state.loading} />
          </div>
          
      </div>
    );
  }

}

export default App;
