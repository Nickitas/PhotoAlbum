import React, { useEffect, useState } from 'react'
import MainBtn from '../UI/buttons/main_btn/MainBtn'
import classes from './modal_window.module.scss'

const ModalWindow = ({id, setId}) => {

    const [data, setData] = useState([])
    const [comment, setComment] = useState('')

    const url = `https://boiling-refuge-66454.herokuapp.com/images/${id}`
    useEffect(() => {
        fetch(url).then(e => e.json()).then(e => {
            setData(e.comments)
        })
    }, [])

    return (
        <section className={classes.ModalWindow}>
            <div className={classes.blur} onClick={() => setId('')}>
                <div className={classes.window} onClick={(e) => e.stopPropagation()}>
                    
                    <div className={classes.picture_block}>
                        <div className={classes.img} style={{
                            background: `url(https://picsum.photos/id/${id}/600/400) no-repeat center`,
                            backgroundSize:'cover'
                        }}></div>
                    </div>

                    <div className={classes.comments_list}>
                        <h5>All comments:</h5>
                        {
                            data.length>0?
                            <ul className={classes.list}>
                                {
                                    data.map((e, i) => <li key={i}>id: {e.id} "{e.text}" <span>{new Date(e.date * 1000).toLocaleString()}</span></li>)
                                }
                            </ul>
                            :
                            <p>комментариев пока нет</p>
                        }
                    </div>

                    <div className={classes.form}>
                        <label>Comment</label>
                        <textarea id='comment' onChange={(e) => setComment(e.target.value)}></textarea>
                        <p>Write a few sentences about the photo.</p>
                    </div>

                    <MainBtn onClick={() => {
                        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
                            method:'POST',
                                body:JSON.stringify({person_id:'1', name:'Nickita', comment:comment, date: new Date()}),
                                headers: {
                                  'Accept':'application/json',
                                  'Content-Type':'application/json'
                                },
                            }).then(e => e.status == 204 ? true : e.json()).then(e => {
                                console.log(e)
                            })
                    }}>Save</MainBtn>

                </div>
            </div>
        </section>
    )
}

export default ModalWindow