import { useState, useEffect } from "react"

function ToDoList() {
    const [index, setIndex] = useState("")
    const [toDo, setToDo] = useState([])
    function addToDo(){
        const newToDo = {text: index, id: toDo.length+1}
        setToDo([...toDo, newToDo])
    }
    function reset() {
        setToDo([])
    }
    function removed(id){
        setToDo(toDo.filter(check => check.id !== id));
    }
    useEffect(() => {
        const saveToDo = localStorage.getItem('toDos')
        if(saveToDo) {
            setToDo(JSON.parse(saveToDo))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDo))
    }, [toDo])
    return (
        <div>
            <ul>
                {toDo.map((checkList) =>(<li key={checkList.id}>{checkList.text}<button onClick={() => removed(checkList.id)} style={{ backgroundColor: 'green', color: 'white', fontSize: '20px', padding:'1px', marginLeft:'5px' }} >X</button></li>))}
            </ul>
            <input type="text" onChange={(event) => setIndex(event.target.value)} value={index}/>
            <button onClick={addToDo}>SUBMIT</button>
            <button onClick={reset}>RESET</button>
        </div>
    )
}
export default ToDoList 