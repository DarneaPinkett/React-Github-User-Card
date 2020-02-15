import React from 'react'

class Card extends React.Component{
    constructor(){
        super();
        this.state={
            userFollowers: []
        }
    }
    componentDidMount(){
        console.log("mount works");
        fetch('http://api.github.com/user/DarneaPinkett/followers')
        .then(res => res.json())
        .then(result => {console.log(result); this.setState({userFollowers: result})})
        .catch(err => console.log('error.', err));
    }
    render(){
        return (
            <div>
                {console.log("User", this.props.user)}
                <div>
                    <img src={this.props.user.avatar_url} alt="av"></img>
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.location}</p>
                </div>
                <div className="followers">
                    <h2>Followers:</h2>
                    {this.state.userFollowers.map((item) => <p>{item.login}</p>)}
                </div>
            </div>
        )
    }
}

export default Card