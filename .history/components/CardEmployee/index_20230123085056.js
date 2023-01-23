export default function CardEmployee({
    employeeName= "none",
    colour= "orange",
    font = "0",
    image = "Woman3.svg"
}) {
    return(
        <div style={{backgroundColor: colour, fontSize:font}}>
         {
            color === "lightPink?" ? <img src={'/assets/Womanred.svg'} width="50"/> :
                                    
            color === "purple" ? <img src={'/assets/Woman2.svg'} width="50"/>:
                                  <img src={image} width="50" />
         }
        {employeeName}
        </div>
    )
}