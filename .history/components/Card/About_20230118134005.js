export default function Card({
    employeePosition= "none",
    colour= "orange",
    font = "0",
    image = "Woman3.svg"
}) {
    return(
        <div style={{backgroundColor: colour, fontSize:font}}>
         {
            colour === "hotPink?" ? <img src={'icon/Woman5.svg'} width="50"/> :
            colour === "purple" ? <img src={'icon/Woman2.svg'} width="50"/>:
                                <img src={image} width="50" />
         }
  
        </div>
    )
}