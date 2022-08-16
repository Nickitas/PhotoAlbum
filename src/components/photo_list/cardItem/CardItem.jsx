import React from 'react'
import classes from './card_item.module.scss'

const CardItem = ({id, url, setId}) => {
    return (
        <div className={classes.Card} onClick={() => setId(id)}>
            <div className={classes.picture}>
                <div className={classes.img} style={{
                    background: `url(${url}) no-repeat center`,
                    backgroundSize:'cover'}}>
                </div>
            </div>
            <div className={classes.details}>
                <p>id: {id}</p>
            </div>
        </div>
    )
}

export default CardItem