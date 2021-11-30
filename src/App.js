import React from 'react';
import axios from 'axios';
import User from './components/User'
import FollowerList from './components/FollowerList';



class App extends React.Component {

    state = {
      user: {},
      followers: [],
      search: "wb1110"
    }


  

  handleChange = (event) => {
    this.setState({
      ...this.state,
      search: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get("https://api.github.com/users/${this.state.search")
    .then((res) => {
      this.setState({
        ...this.state,
        user: res.data 
      });
      // console.log(user)
    })
    .catch((err) => {
      console.log(err);
    })
    
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/${this.state.search")
        .then((res) => {
          this.setState({
            ...this.state,
            user: res.data 
          });
          // console.log(user)
        })
        .catch((err) => {
          console.log(err);
        })


  }

  componentDidUpdate(prevState) {
    if (this.state.user !== prevState.user) {
      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then((res) => {
        this.setState({
          ...this.state,
          followers: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  render() {
    
    return(
    <div>
      <h1>GITHUB INFO</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.search} onChange={this.handleChange}/>
        <input type="submit" value="Search"/>
      </form>
      <User user={this.state.user}/>
      <FollowerList followers={this.state.followers} />


      
    </div>);
  }
}

export default App;
