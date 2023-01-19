import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
// import './styles.css'

import useStyles from './styles'

const HomePage = () => {

  const classes = useStyles()

  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <Typography variant='h3' className={classes.title}>tCommerce</Typography>
            <Button component={Link} to='/products' type='button' className={classes.button}>Enter</Button>
        </div>
    </div>
  )
}

export default HomePage