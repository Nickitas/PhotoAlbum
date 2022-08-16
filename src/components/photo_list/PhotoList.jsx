import React, { useState, useEffect } from 'react'
import CardItem from './cardItem/CardItem'
import classes from './photo_list.module.scss'


const PhotoList = ({setId}) => {

    const [data, setData] = useState([])
    
    const url = 'https://boiling-refuge-66454.herokuapp.com/images'
    useEffect(() => {
        fetch(url).then(e => e.json()).then(e => {
            setData(e)
        })
    }, [])

    return (
        <section className={classes.PhotoList}>
            <div className='container'>
                <div className={classes.wrapper}>
                    {
                        data.map((item, key) => <CardItem 
                                                    key={key} 
                                                    id={item.id} 
                                                    url={item.url} 
                                                    setId={setId} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default PhotoList