import { BsArrowLeftCircleFill } from "react-icons/bs";
import { CgClose, CgRedo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

interface Props {
    score: number;
    time: number;
    moves: number;
    reset: ()=> void;
    close: ()=> void;
}

function GameEnd({score, time, moves, reset, close}:Props) {

    const navigate = useNavigate();

  return (
    <div className="absolute flex h-[90%] w-[70%] lg:h-[70%] lg:w-[30%] items-center justify-center bg-purple-200 flex-col rounded-md">
        <div className="flex w-full p-2 items-center justify-end">
            <CgClose className="text-lg font-bold cursor-pointer" onClick={close}/>
        </div>
        <div className="gameEndHeader">
            Title 
        </div>
        <div className="gameEndContent flex-col">
            <div className="basis-2/3 flex items-center justify-center w-full h-full bg-indigo-300">
                <p className="gameEndLabel">{`score: `}</p>
                <p className="text-5xl">{`${score}`}</p>
            </div>
            <div className="basis-1/3 flex items-center justify-around w-full h-full bg-yellow-100">
                <p className="gameEndLabel">{`time left: ${time}s`}</p>
                <p className="gameEndLabel">{`moves: ${moves}`}</p>
            </div>
        </div>
        <div className="gameEndFooter flex-col">
            <div className="flex flex-1 items-center justify-center w-[100%]" onClick={reset}>
                <div className="gameEndRetry cursor-pointer">
                    <CgRedo className="text-4xl" onClick={reset}/>
                    <p>Retry</p>
                </div>
            </div>
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