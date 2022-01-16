const Todo=(props)=>{
    return(
      <ul>
        {
            props.local.map((value,index)=>{
              return(
                  <li className="list" key={index}>
                    <p>{value}</p>
                    <div className="icons" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                        <i className="fas fa-edit" aria-hidden="true" id={'i'+index} onClick={props.update}></i>
                        <i className="fa fa-times" aria-hidden="true" onClick={props.del} id={index}></i>
                    </div>
                </li>
                )
              })
        }
       </ul>
    )
  }
  
  export default Todo;