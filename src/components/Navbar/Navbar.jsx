import React from 'react'
import { AppBar, Toolbar,  IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart, Backspace } from '@material-ui/icons'
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
                { location.pathname === '/products' && (
                <div className={classes.button}>
                    <IconButton aria-label='show cart items' color='inherit' component={Link} to='/cart'>
                        <Badge badgeContent={totalItems} color='secondary' overlap="rectangular"></Badge>
                        <ShoppingCart />
                    </IconButton>
                </div> )}
                { location.pathname === '/cart' && (
                    <div className={classes.button}>
                        <IconButton aria-label='back to product page' color='inherit' component={Link} to='/products'>
                            <Backspace />
                        </IconButton>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar