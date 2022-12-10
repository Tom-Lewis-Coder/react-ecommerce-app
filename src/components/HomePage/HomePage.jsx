import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


const HomePage = () => {

  return (
    <div className="container">
        <div className="content">
            <div className='title'>tCommerce</div>
            <Link className='link' to='/products'>Enter</Link>
        </div>
    </div>
  )
}

export default HomePage