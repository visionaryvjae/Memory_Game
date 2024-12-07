import { useEffect} from "react";

interface  Props {
  display:string;
  hide: string;
  isFlipped: boolean;
  index:string;
  HandleClick: ()=> void;
}

function Card({display, hide, isFlipped, index, HandleClick}:Props) {

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