import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from './components/Card'
import GameBoard from './components/GameBoard'
import Menu from './components/Menu'
import GameEnd from './components/GameEnd'

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
