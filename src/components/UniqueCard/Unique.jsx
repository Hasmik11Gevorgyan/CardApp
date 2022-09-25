import "./Unique.css"
function Unique({card}){
    return <div className="unique-card" >
        <button>X</button>
        {card.number}
       
    </div>
}
export default Unique