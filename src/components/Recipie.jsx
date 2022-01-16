const Recipie =(props)=>{
const ing_len = props.ingredients.length;
    return(
            <div className="recipe-items">

                <img calssName="image"src={props.img} alt={props.title}></img>
               <div className="desc-container">
                <h1 className="recipe-title">{props.title}</h1>

                <ul>

               <li>
               <p className="desc">{Math.round(props.cal)} cal</p>    
               </li> 

              <li>
               <p className="desc">{props.cousineType}</p>    
              </li> 

               <li>
               <p className="desc">{props.dietLabel}</p>    
               </li> 

               <li>
               <p className="desc">{props.mealType}</p>    
               </li> 

               <li>
               <p className="desc">{ing_len} ingredients</p>    
               </li> 


                </ul>

               </div>


            </div>
    );
}




export default Recipie;