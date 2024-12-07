import { useNavigate } from 'react-router-dom'

function Menu() {

    const navigate = useNavigate();

  return (
    <div className='flex h-[70%] w-[80%] lg:h-[50vh] lg:w-[40vw] items-center justify-center flex-col font-mono'>
        <div className='basis-1/5 flex h-full w-full items-center justify-center bg-green-400 rounded-t-md'>
            <h1 className='text-2xl font-bold'>Welcome</h1>
        </div>
        <div className='basis-4/5 bg-green-700 flex h-full w-full flex-col items-center justify-start rounded-b-md'>
            <p className='pt-[10px] text-lg text-white'>Select Game Mode:</p>
            <div className='flex h-full w-full items-center justify-center flex-col'>
                <div className='gameModebtn' onClick={()=> navigate('play', {state: {gamemode: "easy"}})}>
                    Easy
                </div>
                <div className='gameModebtn' onClick={()=> navigate('play', {state: {gamemode: "normal"}})}>
                    Normal
                </div>
                <div className='gameModebtn' onClick={()=> navigate('play', {state: {gamemode: "hard"}})}>
                    Hard
                </div>
            </div>
            <div className='flex flex-col'>
                <a href="https://www.pexels.com/photo/scrabble-board-game-on-shallow-focus-lens-1153929/"className="links">
                    @Photo by Suzy Hazelwood on Pexels. 
                </a>
                <a href="https://www.flaticon.com/free-icons/cute" title="cute icons" className="links">@Cute icons created by Smashicons - Flaticon</a>
            </div>
        </div>
    </div>
  )
}

export default Menu