import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./store/bankSlice";
import { addTodo, removeTodo } from "./store/todoSlice";
import { useState } from "react";

function App() {
  // Bank state
  const balance = useSelector((state) => state.bank.balance);
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [task, setTask] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Bank App Section */}
      <h1>Redux Bank App</h1>
      <h2>Balance: ${balance}</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />
      <br />
      <br />
      <button onClick={() => dispatch(deposit(amount))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(amount))}>Withdraw</button>

      <hr />

      <h1>To Do App</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      />

      <button
        onClick={() => {
          dispatch(addTodo({ text: task }));
          setTask("");
        }}
      >
        Add Task
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
