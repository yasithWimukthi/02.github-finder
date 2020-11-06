import React, {Fragment} from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    users : [],
    user : {},
    loading : false,
    alert : null,
    repos : []
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

    this.setState(
      {
        loading : true
      }
      );
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`); 
    console.log(res.data);

    this.setState({
      users : res.data.items,
      loading : false
    });
  };

  // GET SINGLE GIHUB USER
  getUser = async (username)=>{

    this.setState(
      {
        loading : true
      });
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); 
    console.log("test");

    this.setState({
      user: res.data,
      loading : false
    });
  }

  // GET USER REPOS
  getUserRepos = async (username)=>{

    this.setState(
      {
        loading : true
      });
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); 
    console.log("test");

    this.setState({
      repos: res.data,
      loading : false
    });
  }


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
      <Router>
        <div className="App">
            <Navbar />

            <div className="container">
                <Alert alert={this.state.alert} />
                <Switch>
                  <Route exact path="/" render={props=>(
                    <Fragment>
                      <Search 
                        searchUsers={this.searchUsers} 
                        clearUsers={this.clearUsers}
                        showClear={this.state.users.length>0 ? true : false }
                        setAlert={this.setAlert}>              
                      </Search>
                      <Users  users={this.state.users} loading={this.state.loading} />
                    </Fragment>
                  )} />

                  <Route exact path='/about' component={About}/>

                  <Route exact path='user/:login' render={props=>(
                    <User 
                      {...props} 
                      getUser={this.getUser}
                      getUserRepos={this.getUserRepos} 
                      user={this.state.user}
                      repos={this.state.repos} 
                      loading={this.state.loading}/>
                  )}/>
                </Switch>

            </div>
            
        </div>
      </Router>
    );
  }

}

export default App;
