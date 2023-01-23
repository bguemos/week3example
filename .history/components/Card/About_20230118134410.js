export default function Card({
    employeePosition= "none",
    colour= "orange",
    font = "0",
    image = "Woman3.svg"
}) {
    return(
        <div style={{backgroundColor: colour, fontSize:font}}>
         {
            colour === "lightPink?" ? <img src={'Woman5.svg'} width="50"/> :
            colour === "purple" ? <img src={'Woman2.svg'} width="50"/>:
                                <img src={image} width="50" />
         }
  
        </div>
    )
}