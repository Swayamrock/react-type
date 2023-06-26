import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions";
const Todo = () => {
    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducers.list);
    return (
      <>
        <div>
          <h1>Add your list here</h1>
          <div>
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i style={{ width: 200, display: "inline-block" }} onClick={() => dispatch(addTodo(inputData), setInputData(''))}>+</i>
          </div>
          <div>
            {list.map((elem) => {return (
                            <div key={elem.id}>
                            <h3>{elem.data}</h3>
                          <i style={{ width: 200, display: "inline-block" }} onClick={() => dispatch(deleteTodo(elem.id))}>+</i>
                          </div>
            ) })}

          </div>
          <div><button onClick={() => dispatch(removeTodo())}><span>Remove All</span></button></div>
        </div>
      </>
    );
}

export default Todo;