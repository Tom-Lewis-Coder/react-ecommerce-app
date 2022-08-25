import React from 'react'
import { AppBar, Toolbar,  IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../Assets/tCommerce.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
    const classes = useStyles()
    const location = useLocation()

  return (
    <div>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit' component={Link} to='/'>
                    <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
                    tCommerce
                </Typography>
                <div className={classes.grow} />
                { location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton aria-label='show cart items' color='inherit' component={Link} to='/cart'>
                        <Badge badgeContent={totalItems} color='secondary' overlap="rectangular"></Badge>
                        <ShoppingCart />
                    </IconButton>
                </div> )}
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar