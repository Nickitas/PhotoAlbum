import React from 'react'
import classes from './action_btn.module.scss'

const ActionBtn = ({children, ...props}) => {
    return (
        <a {...props} className={classes.ActionBtn} >
            {children}
        </a>
    )
}

export default ActionBtn