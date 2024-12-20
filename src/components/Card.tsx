import { useEffect} from "react";

interface  Props {
  display:string;
  hide: string;
  isFlipped: boolean;
  HandleClick: ()=> void;
}

function Card({display, hide, isFlipped, HandleClick}:Props) {

  let Flipped = isFlipped;

  useEffect(()=> {
    if(isFlipped){
      setTimeout(()=> {
        Flipped = false;
      }, 1000)
    }
  },[Flipped])

  return (
    <div className={`card group perspective`} >
        {/* <img src="https://picsum.photos/45" /> */}
      <div className={`absolute w-[70px] h-[70px] lg:w-[120px] lg:h-[90px] cursor-pointer transition-transform duration-500 transform ${Flipped ? 'rotate-y-180' : ''} ${hide}`} onClick={HandleClick}>
        <div className="front">
          <img onError={()=> {false}} src={Flipped ? display : "/icons/card-bg.jpeg"} className={'back'} loading="eager" />  
        </div>
      </div>
    </div>
  )
}

export default Card