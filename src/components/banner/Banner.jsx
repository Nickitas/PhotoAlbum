import React from 'react'
import ActionBtn from '../UI/buttons/action_btn/ActionBtn'
import ava from '../../../public/img/ava.png'
import { Message, Call } from '../svg.module'
import classes from './banner.module.scss'

const Banner = () => {
    return (
        <header className={classes.Banner}>
            <div className='container'>
                <div className={classes.picture}></div>
                <div className={classes.content}>
                    <div className={classes.avatar}>
                        <div className={classes.img} style={{
                            background: `url(${ava}) no-repeat center`,
                            backgroundSize:'cover'
                        }}
                        ></div>
                    </div>
                    <div className={classes.heading}>
                        <h1 className={classes.author}>Ricardo Cooper</h1>
                        <div className={classes.actions}>
                            <ActionBtn href='mailto:ex@mail.com'><Message/>Message</ActionBtn>
                            <ActionBtn href='tel:89998880909'><Call/>Call</ActionBtn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
} 

export default Banner