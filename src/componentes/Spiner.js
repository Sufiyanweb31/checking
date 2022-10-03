import React, { Component } from 'react'
import Loading from './loading.gif'

const Spiner = () => {
    return (
        <div className='text-center my-5'>
            <img src={Loading} alt="Loading" />
        </div>
    )
}

export default Spiner