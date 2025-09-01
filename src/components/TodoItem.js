// // src/components/TodoItem.js

// import React from "react";

// const TodoItem = ({ todo, onToggleCompleted, onDeleteTodo }) => {
//   return (
//     <li
//       style={{
//         marginBottom: "10px",
//         border: "1px solid white",
//         padding: "10px",
//         borderRadius: "8px",
//         backgroundColor: todo.completed ? "#2d3d3d" : "transparent",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           width: "100%",
//           justifyContent: "space-between",
//         }}
//       >
//         <h3
//           style={{
//             margin: 0,
//             textDecoration: todo.completed ? "line-through" : "none",
//           }}
//         >
//           {todo.task}
//         </h3>
//         <div style={{ display: "flex", gap: "5px" }}>
//           <button
//             onClick={() => onToggleCompleted(todo.id, todo.completed)}
//             style={{
//               padding: "5px 10px",
//               borderRadius: "4px",
//               backgroundColor: todo.completed ? "salmon" : "lightgreen",
//               color: "#282c34",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             {todo.completed ? "Belum Selesai" : "Selesai"}
//           </button>
//           <button
//             onClick={() => onDeleteTodo(todo.id)}
//             style={{
//               padding: "5px 10px",
//               borderRadius: "4px",
//               backgroundColor: "tomato",
//               color: "white",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Hapus
//           </button>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default TodoItem;


import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  margin-bottom: 8px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #e0f7fa;
  }
`;

const Text = styled.span`
  flex: 1;
  font-size: 16px;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:first-child {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #45a049;
    }
  }

  &:last-child {
    background-color: #f44336;
    color: white;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <Item>
      <Text>{todo.text}</Text>
      <ButtonGroup>
        <Button onClick={() => onEdit(todo)}>Edit</Button>
        <Button onClick={() => onDelete(todo.id)}>Delete</Button>
      </ButtonGroup>
    </Item>
  );
};

export default TodoItem;
