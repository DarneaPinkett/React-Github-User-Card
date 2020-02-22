import React from "react";

const FollowersCard = ({followers, img}) => {
    return (
        <div className="card1">
            <img src={img} alt="githubuser" />
            <p className="name">Name: {followers}</p>
    <p className="name">Bio {}</p>
        </div>
    )
}

export default FollowersCard;