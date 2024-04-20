
import { Route, Routes } from 'react-router-dom'
import './App.css'


import Read from './Components/Read'
import RegistrationForm from './Components/RegistrationForm'

function App() {

  return (
    <div className='container'>
      
      <Routes>
        <Route path='/' element={<Read></Read>}></Route>
        <Route path='/Create' element={ <RegistrationForm />}></Route>

      </Routes>
    </div>
  )
}

export default App
