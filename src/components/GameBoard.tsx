import { useEffect, useState } from "react";
import Card from "./Card"
import { RiRefreshLine } from "react-icons/ri";
import data from "../data.json";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import GameEnd from "./GameEnd";


function GameBoard() {

  const [nums, setNums] = useState<[
    {
      image: "",
      CardNumber: 0,
      flipped: false
    }
  ]>([] as any);

  const navigate = useNavigate();

  const {state} = useLocation();
  const value = state;
  const [gameEnd, setGameEnd] = useState(false);
  const [started, setStarted] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(90);
  const [timeleft, setTimeLeft] = useState(0)

  const [currentCard, setCurrentCard] = useState(0);
  const [lastCard, setLastCard] = useState(0);

  const [matchedCards, setMatchedCards] = useState<number[]>([])
  const [matchedCards2, setMatchedCards2] = useState<number[]>([])

  const shuffleCards =()=> {
    const shuffledCards = [...data.cards]
    .sort(()=> Math.random() - 0.5)

    setNums(shuffledCards as any);
  }

  const checkSecondCard = async(index:number)=> {
    setCurrentCard(nums[index].CardNumber);
      
        if(lastCard - 10 == nums[index].CardNumber){
          if(score < 9){
            setScore(score+1);
          }
          else if(score == 9){
            setScore(score +1);
            setGameEnd(true);
            setTimeLeft(timer);
            //setTimeout(()=> setTimer(0), 100)
          }
          setLastCard(0);
          await setMatchedCards([...matchedCards, lastCard]);
          await setMatchedCards2([...matchedCards2, nums[index].CardNumber]);
        }
        else if(nums[index].CardNumber - 10 == lastCard){
          if(score < 9){
            setScore(score+1);
          }
          else if(score == 9){
            setScore(score +1);
            setGameEnd(true);
            setTimeLeft(timer);
            //setTimeout(()=> setTimer(0), 100)
          }
          setLastCard(0);
          await setMatchedCards([...matchedCards, lastCard]);
          await setMatchedCards2([...matchedCards2, nums[index].CardNumber]);
        }
        else{
          setLastCard(nums[index].CardNumber)
        }
  }

  const HandleClickEvent = async(index:number)=> {
    if(started){
      console.log(currentCard)
      setCurrentItem(nums[index].CardNumber);

      setMoves(moves + 0.5);
      if(lastCard == 0){
        setLastCard(nums[index].CardNumber);
      }
      else{
        setTimeout(()=> checkSecondCard(index), 500)
      }
    }
    else{
      alert('Press Start to continue');
    }
  }

  async function startCounter() {
    setStarted(true);

    const interval = setInterval(() => {
      setTimer((prevtime)=> {
        if(prevtime > 0){
          return prevtime - 1;
        }
        else{
          setGameEnd(true);
          clearInterval(interval)
          return prevtime
        }
      });
    }, 1000)
  }


  const Reset =()=> {
    if(value.gamemode == "easy"){
      window.location.reload();
      setTimer(90);
    }
    else if(value.gamemode == "normal"){
      window.location.reload();
      setTimer(70);
    }
    else{
      window.location.reload();
      setTimer(50);
    }
    console.log("clicked")

    // setMoves(0);
    // setScore(0);
    // setMatchedCards([]);
    // setMatchedCards2([]);
    // setStarted(false);
    // setGameEnd(false);
  }

  useEffect(() => {
    shuffleCards();

    if(value.gamemode == "easy"){
      setTimer(90);
    }
    else if(value.gamemode == "hard"){
      setTimer(50);
    }
    else{
      setTimer(70)
    }
  }, [])
  return (
    <div className="h-[90%] w-[90%] md:h-[70%] md:w-[70%] lg:h-[89vh] lg:w-[50vw] flex flex-col font-mono items-center justify-center">
        <div className="basis-1/5 w-full bg-purple-300 flex items-center justify-center flex-col rounded-t-md">
            <div className="basis-2/3 w-full flex items-center justify-between">
              <div className="basis-1/3 flex w-full items-start cursor-pointer" onClick={()=> navigate(-1)}>
                <FaArrowLeft className="text-xl m-3" />
              </div>
              <div className="basis-2/3 flex w-full">
                <p className="text-4xl flex w-full text-slate-800 justify-center">Title</p>
              </div>
              <div className="basis-1/3 flex w-full bg-green-200">
              </div>
            </div>
            <div className="basis-1/3 w-full flex items-center justify-evenly text-white bg-purple-800">
              <p>{`Score:${score}`}</p>
              <p>{`moves:${moves}`}</p>
              <p>{`timer:${timer}(s)`}</p>
              {
                started ? 
                <RiRefreshLine className="h-5 w-5 text-gray-400" onClick={Reset}></RiRefreshLine>
                :
                <div className="bg-slate-200 p-1 rounded-md text-black cursor-pointer" onClick={startCounter}>
                  {"Start"}
                </div>
                 
                }
            </div>
        </div>
        <div className="basis-4/5 w-full place-items-center bg-yellow-300 grid grid-cols-4 grid-rows-5 p-3 rounded-b-md">
          {
            nums.map((card, index) => (
            <Card display={card.image} key={index} index={""} HandleClick={async () => {(matchedCards.includes(card.CardNumber) || matchedCards2.includes(card.CardNumber)) ? null : HandleClickEvent(index);} } hide={(matchedCards.includes(card.CardNumber) || matchedCards2.includes(card.CardNumber)) ? "hidden" : ""} isFlipped={(currentItem == card.CardNumber)? true : false} />
          ))}
        </div>
        <div>
          <a href="https://www.pexels.com/photo/scrabble-board-game-on-shallow-focus-lens-1153929/"className="links">
            @Photo by Suzy Hazelwood on Pexels. 
          </a>
        </div>
        {
          gameEnd ?
          <GameEnd score={score} time={timeleft} moves={moves} reset={Reset} close={Reset} />
          :
          null
        }
    </div>
  )
}

export default GameBoard