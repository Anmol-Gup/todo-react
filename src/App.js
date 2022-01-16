import {useState,useEffect,useRef} from 'react';
import './App.css';
import Todo from './Todo';

function App() {

    const [newItem,setValue]=useState("");
	const [flag,setflag]=useState(false);
	const [index,setIndex]=useState(0);
	const [local, setLocal]=useState([]);
    const inputElement = useRef(null);

	useEffect(() => {
    let storage=localStorage.getItem('itemList');
		if(storage===null)
			setLocal([])
		else
			setLocal(JSON.parse(storage))
  }, [])

	const getItem=(event)=>{
		setValue(event.target.value)
	}

	const addItem=()=>{
		if(flag===true)
		{
			setflag(false)
			local[index]=newItem;
		}
		else
			local.push(newItem)
			
		setLocal(local)
		localStorage.setItem('itemList',JSON.stringify(local));
		setValue("");
	}
	const deleteItem=(event)=>{
		local.splice(event.target.id,1);
		setLocal([...local])
		localStorage.setItem('itemList',JSON.stringify(local));
	}

	const updateItem=(event)=>{
		inputElement.current.value=local[event.target.id.slice(1)]
		setflag(true)
		setIndex(event.target.id.slice(1))
	}

  return (
    <>
		<div className="container">
			<div className="todo">
				<h1>ToDo</h1>
				<div className="box">
					<div className="add">
						<input type="text" placeholder="Enter Task" value={newItem} ref={inputElement} onChange={getItem}/>
						<button className="btn" onClick={addItem}>
							<i className="fas fa-plus-circle"></i>
						</button>
					</div>
					<Todo local={local} update={updateItem} del={deleteItem} />
				</div>
			</div>
		</div>
	</>
  );
}

export default App;
