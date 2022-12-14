import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles()

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in your shopping cart, 
            <Link className={classes.link} to='/products' > start adding some</Link>!
        </Typography>
    )

    if (!cart.line_items) return 'Loading...'

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                { cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>    
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>Subtotal: { cart.subtotal.formatted_with_symbol }</Typography>
                <div>
                    <Button className={classes.emptyButton} onClick={handleEmptyCart} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                    <Button className={classes.checkoutButton} component={Link} to='/checkout' size='large' type='button' variant='contained' color='primary'>Checkout</Button>
                </div>
            </div>
        </>
    )

  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant='h4' gutterBottom >Your Shopping Cart</Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
    </Container>
  )
}

export default Cart