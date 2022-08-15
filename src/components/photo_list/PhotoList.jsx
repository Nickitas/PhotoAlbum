import React, { useState, useEffect } from 'react'
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
                        data.map((item, key) => { return (
                            <div key={key} className={classes.card} onClick={() => {
                                setId(item.id)
                            }}>
                                <div className={classes.picture}>
                                    <div className={classes.img} style={{
                                        background: `url(${item.url}) no-repeat center`,
                                        backgroundSize:'cover'}}>
                                    </div>
                                </div>
                                <div className={classes.details}>
                                    <p>id: {item.id}</p>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
        </section>
    )
}

export default PhotoList