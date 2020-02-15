import React from 'react'
import Card from "./Card"



const CardList = props => {
    console.log(props)

    return (
        <div>
            <Card 
            name={props.name}
            location={props.location}
            imgUrl={props.avatar_url}
            followers={props.followers}/>

        </div>
    )
}

export default CardList