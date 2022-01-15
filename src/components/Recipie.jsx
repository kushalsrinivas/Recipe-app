const Recipie =(props)=>{

    return(
        <div>
            <h1>{props.title}</h1>
            <p> caloreis :{Math.round(props.cal)}</p>
            <img src={props.img} alt={props.title}></img>
        </div>
    );
}




export default Recipie;