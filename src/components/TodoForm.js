// import React, { useState, useEffect } from "react";

// const TodoForm = ({ onAddTodo, editTodo }) => {
//   const [task, setTask] = useState("");

//   useEffect(() => {
//     if (editTodo) {
//       setTask(editTodo.task); // isi input dengan task yg mau diedit
//     } else {
//       setTask("");
//     }
//   }, [editTodo]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim() === "") return;
//     onAddTodo(task);
//     setTask("");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{ marginBottom: "20px", textAlign: "center" }}
//     >
//       <h2>{editTodo ? "Edit Todo" : "Tambah Todo Baru"}</h2>
//       <input
//         type="text"
//         placeholder="Tambahkan tugas baru..."
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "60%",
//           marginRight: "10px",
//           border: "1px solid #ccc",
//           borderRadius: "5px",
//         }}
//       />
//       <button
//         type="submit"
//         style={{
//           padding: "10px 20px",
//           backgroundColor: editTodo ? "#2196F3" : "#87CEEB",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         {editTodo ? "Update" : "Tambah"}
//       </button>
//     </form>
//   );
// };

// export default TodoForm;

// TodoForm.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 60%;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.edit ? "#2196F3" : "#87CEEB")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => (props.edit ? "#1976D2" : "#5CAED6")};
  }
`;

const TodoForm = ({ onAddTodo, editTodo }) => {
  const [task, setTask] = useState("");

  useEffect(() => {
    if (editTodo) {
      setTask(editTodo.task); // isi input dengan task yg mau diedit
    } else {
      setTask("");
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    onAddTodo(task);
    setTask("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>{editTodo ? "Edit Todo" : "Tambah Todo Baru"}</h2>
      <Input
        type="text"
        placeholder="Tambahkan tugas baru..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit" edit={!!editTodo}>
        {editTodo ? "Update" : "Tambah"}
      </Button>
    </Form>
  );
};

export default TodoForm;