import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import AddDataPage from './components/pages/AddDataPage'
import UpdateDataPage from './components/pages/UpdateDataPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exaxt path='/' element={<AddDataPage />}/>
          <Route exaxt path='/update' element={<UpdateDataPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
