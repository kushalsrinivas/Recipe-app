const Recipie =(props)=>{

    return(
            <div className="recipe-items">

                <h1 className="recipe-title">{props.title}</h1>
                <p className="cal"> caloreis :{Math.round(props.cal)}</p>
                <img calssName="image"src={props.img} alt={props.title}></img>

            </div>
    );
}




export default Recipie;