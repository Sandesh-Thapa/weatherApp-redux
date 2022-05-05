import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {weatherAction} from '../redux/actions'

function Header() {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(weatherAction(city))
    setCity('')
  }


  return (
    <div className="bg-dark text-center text-white py-3">
      <h3 className="mb-3">Weather App</h3>
      <form onSubmit={handleSubmit}>
        <input className="br-5" type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
      </form>
    </div>
  )
}

export default Header