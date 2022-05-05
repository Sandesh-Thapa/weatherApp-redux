import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {weatherAction} from '../redux/actions'
import Header from './Header'
import Main from './Main'

function App() {
  const dispatch = useDispatch()
  const weatherData = useSelector(state => state.weather)
  const {loading, weather, error} = weatherData

  useEffect(() => {
    dispatch(weatherAction())
  }, [dispatch])

  return (
    <div className="d-flex flex-column justify-content-between" style={{minHeight:'100vh'}}>
        <div>
          <Header/>
          {loading ?
            (
              <div className="text-center">
                <p className="mt-5">Loading...</p>
              </div>
            )
            : error ? 
            (
              <div className="text-center">
                <p className="mt-5">No city found!</p>
              </div>
            ) : 
            (
              <Main weather={weather} />
            )
          }
        </div>
        <div className="text-center bg-dark text-white py-4">
        Made with ❤ in CITE MERN stack program
        </div>
      </div>
  )
}

export default App