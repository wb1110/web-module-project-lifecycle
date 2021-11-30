import React from 'react'

class User extends React.Component {
    render () {
        const { user } = this.props;
        return ( 
            <div>
                <img src={user.avatar_url} alt="User Image"/>
                <h2>{user.name}</h2>
                <p>{user.login}</p>
                <h3>TOTAL REPOS: {user.public_repos}</h3>
                <h3>TOTAL FOLLOWERS: {user.followers}</h3>
            </div>
        )
    }
    
}

export default User