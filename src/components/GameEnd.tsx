import { BsArrowLeftCircleFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg"; //CgReset
import { useNavigate } from "react-router-dom";

interface Props {
    score: number;
    time: number;
    moves: number;
    reset: ()=> void;
    close: ()=> void;
}

function GameEnd({score, time, moves, close}:Props) {

    const navigate = useNavigate();

    const GameMessage =(gameScore:number, myMoves:number)=> {
        if(gameScore == 10 && myMoves >= 31){
            return "Congratulations!!!"
        }
        else if(gameScore == 10 && myMoves <= 30){
            return 'Congratulations, you won!!! Slick Moves ;)'
        }
        else if(gameScore == 10 && myMoves <= 20){
            return 'Congratulations, you won!!! Incredible performance XD'
        }
        else if(gameScore == 10 && myMoves <= 16){
            return 'Congratulations, you won!!! I gotta tell you, it was perfect :\')'
        }
        else if(gameScore < 10){
            return 'Unfortunate, better luck next time!'
        }
    }

  return (
    <div className="absolute flex h-[90%] w-[70%] lg:h-[70%] lg:w-[30%] items-center justify-center bg-purple-200 flex-col rounded-md">
        <div className="flex w-full p-2 items-center justify-end">
            <CgClose className="text-lg font-bold cursor-pointer" onClick={close}/>
        </div>
        <div className="gameEndHeader">
            Game Over
        </div>
        <div className="gameEndContent flex-col">
            <div className="basis-3/4 flex items-center justify-center w-[90%] h-full flex-col bg-indigo-300 rounded-t-lg">
                <div className="flex items-center justify-center w-full h-[40%]">
                    <p className="gameEndLabel">{`score: `}</p>
                    <p className="text-5xl">{`${score}`}</p>
                </div>
                <p className="text-lg p-5 text-center">{GameMessage(score, moves)}</p>
            </div>
            <div className="basis-1/4 flex items-center justify-around w-[90%] h-full bg-yellow-100 rounded-b-lg">
                <p className="gameEndLabel">{`time left: ${time}s`}</p>
                <p className="gameEndLabel">{`moves: ${moves}`}</p>
            </div>
        </div>
        <div className="gameEndFooter flex-col">
            {/* <div className="flex flex-1 items-center justify-center w-[100%]" onClick={reset}>
                <div className="gameEndRetry cursor-pointer">
                    <CgRedo className="text-4xl" onClick={reset}/>
                    <p>Retry</p>
                </div>
            </div> */}
            <div className="flex flex-1 items-center justify-center w-[100%]">
                <div className="flex items-center justify-center bg-red-300 rounded-md w-[45%] pt-2 pb-2 cursor-pointer" onClick={()=> navigate('/')}>
                    <BsArrowLeftCircleFill className="text-lg m-2"/>
                    <p>main menu</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GameEnd