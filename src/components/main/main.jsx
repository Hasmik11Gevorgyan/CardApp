import  "./main.css";
 import Unique from "../UniqueCard/unique";
function Main({cards}){
   return <div className="main-container">
   
        {cards.map((card)=> <Unique card={card} key={card.key}   />)} </div>
   
}

export default Main