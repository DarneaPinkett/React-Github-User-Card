import React from 'react'

const Card = ({user, img, bio}) => {
    return (
        <div className="card1">
            <img src={img} alt="carduser"/>
            <p className="name">Name: {user}</p>
            <p className="name">Bio: {bio}</p>
        </div>
    )
}

export default Card