import React from 'react'

import './SearchBox.css'


export const SearchBox = ({ placeholder, onSearchChange }) => (
    <input 
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={onSearchChange}
    />
)