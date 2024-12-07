import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GameBoard from './components/GameBoard'
import Menu from './components/Menu'

function App() {

  return (
    <>  
      <div className='maincontainer'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Menu/>} />
            <Route path='/play' element={<GameBoard/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
