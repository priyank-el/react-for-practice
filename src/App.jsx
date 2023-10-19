import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import AddDataPage from './components/pages/AddDataPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exaxt path='/' element={<AddDataPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
