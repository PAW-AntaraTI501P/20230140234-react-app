// import React from "react";

// const TodoList = ({ todos, onToggleCompleted, onDeleteTodo, onEditTodo }) => {
//   return (
//     <ul style={{ listStyle: "none", padding: 0 }}>
//       {todos.map((todo) => (
//         <li
//           key={todo.id}
//           style={{
//             margin: "10px 0",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <span
//             style={{
//               textDecoration: todo.completed ? "line-through" : "none",
//               fontWeight: "bold",
//             }}
//           >
//             {todo.task}
//           </span>
//           <div>
//             <button
//               style={{
//                 backgroundColor: "#4CAF50",
//                 color: "white",
//                 border: "none",
//                 padding: "5px 10px",
//                 marginRight: "5px",
//                 cursor: "pointer",
//               }}
//               onClick={() => onToggleCompleted(todo.id, todo.completed)}
//             >
//               {todo.completed ? "Batal" : "Selesai"}
//             </button>
//             <button
//               style={{
//                 backgroundColor: "#2196F3",
//                 color: "white",
//                 border: "none",
//                 padding: "5px 10px",
//                 marginRight: "5px",
//                 cursor: "pointer",
//               }}
//               onClick={() => onEditTodo(todo)}
//             >
//               Edit
//             </button>
//             <button
//               style={{
//                 backgroundColor: "#f44336",
//                 color: "white",
//                 border: "none",
//                 padding: "5px 10px",
//                 cursor: "pointer",
//               }}
//               onClick={() => onDeleteTodo(todo.id)}
//             >
//               Hapus
//             </button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

import React from "react";

const TodoList = ({ todos, onToggleCompleted, onDeleteTodo, onEditTodo }) => {
  const buttonStyle = {
    color: "white",
    border: "none",
    padding: "5px 10px",
    marginRight: "5px",
    cursor: "pointer",
    borderRadius: "4px",
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            margin: "10px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              fontWeight: "bold",
            }}
          >
            {todo.task}
          </span>
          <div>
            <button
              style={{ ...buttonStyle, backgroundColor: "#4CAF50" }}
              onClick={() => onToggleCompleted(todo.id, todo.completed)}
            >
              {todo.completed ? "Batal" : "Selesai"}
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: "#2196F3" }}
              onClick={() => onEditTodo(todo)}
            >
              Edit
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: "#f44336", marginRight: 0 }}
              onClick={() => onDeleteTodo(todo.id)}
            >
              Hapus
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;