import { useEffect, useState } from "react";

interface  Props {
  display:string;
  hide: string;
  isFlipped: boolean;
  index:string;
  HandleClick: ()=> void;
}

function Card({display, hide, isFlipped, index, HandleClick}:Props) {

  let Flipped = isFlipped;

  const [time, setTime] = useState(0);

  const unFlipCard = (flipped: boolean) => {
    // while(isFlipped){
    //   Flipped = true;

    //   let count = 1;

    //   const interval2 = setInterval(() => {
    //     if(count < 5){
    //       console.log(count);
    //       count++;
    //     }
    //     else{
    //       clearInterval(interval2);
    //       console.log('event ended');
    //       Flipped = false;
    //     }
    //   }, 100)
    // }  

    if(Flipped){
      Flipped = false;
    }
  }

  useEffect(()=> {
    let count = 0;
    if(isFlipped){
      setTimeout(()=> {
        Flipped = false;
      }, 1000)
    }
  },[Flipped])

  return (
    <div className={`card group perspective`} >
        {/* <img src="https://picsum.photos/45" /> */}
      <div className={`absolute w-[150px] h-[90px] cursor-pointer transition-transform duration-500 transform ${Flipped ? 'rotate-y-180' : ''} ${hide}`} onClick={HandleClick}>
        {
          Flipped ? 
          <img onError={()=> {false}} src={display} className={'back'}  />
          :
          <div className="front">
            {index}
          </div>
        }
      </div>
    </div>
  )
}

export default Card