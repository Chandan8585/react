import React from 'react'

const SearchBar = () => {
  return (
    <div className='search_bar'>
        <input type="text"  placeholder='Enter Restaurant Name' className='search_input'/>
        <button className='search_btn'>Search</button>
    </div>
  )
}

export default SearchBar