import React from 'react'
import classes from "./LoadingSpinner.module.css"
const LoadingSpinner = () => {
    return (
        <div className={classes.loaderDiv}>
            <span className={classes.loader}>
                <span></span>
                <span></span>
            </span>
            <p>Loading ...</p>
        </div>
    )
}

export default LoadingSpinner
