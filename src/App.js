import React from 'react';
import axios from 'axios';



class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      user: [],
      followers: []
    }


  }

  componentDidMount() {
    axios.get("https://api.github.com/users/wb1110")
        .then((res) => {
          const user = res.data;
          this.setState({ user });
          // console.log(user)
        })
        .catch((err) => {
          console.log(err);
        })

    axios.get("https://api.github.com/users/wlongmire/followers")
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        })
  }

  render() {
    
    return(
    <div>
      <h1>GITHUB INFO</h1>
      <form>
        <input type="text" value="Github Handle"/>
        <input type="submit" value="Search"/>
      </form>
      <div>
        <img src={this.state.user.avatar_url} alt="William Buchanan Headshot"/>
        {/* res.name */}
        <h2>{this.state.user.name}</h2>
        {/* res.login */}
        <p>{this.state.user.login}</p>
        {/* res.public_repos */}
        <h3>TOTAL REPOS: {this.state.user.public_repos}</h3>
        {/* res.followers */}
        <h3>TOTAL FOLLOWERS: {this.state.user.followers}</h3>
      </div>
      <div>
        <h2>FOLLOWERS:</h2>
        {/* Map over followers to generate avatar_url and name */}
        
      </div>

      
    </div>);
  }
}

export default App;
