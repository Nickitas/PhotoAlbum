import React from 'react'
import classes from './main_btn.module.scss'

const MainBtn = ({children, ...props}) => {
    return (
        <button {...props} className={classes.MainBtn} >
            {children}
        </button>
    )
}

export default MainBtn