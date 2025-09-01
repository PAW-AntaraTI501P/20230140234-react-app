// import React, { useState, useEffect, useCallback } from "react";
// import TodoForm from "../../components/TodoForm.js";
// import TodoList from "../../components/TodoList.js";
// import SearchInput from "../../components/SearchInput.js";
// import styled from "styled-components";
// import Modal from "react-modal";

// const TodoPage = () => {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editTodo, setEditTodo] = useState(null); // state untuk todo yg sedang diedit
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const fetchTodos = useCallback((searchQuery) => {
//     setLoading(true);
//     const url = searchQuery
//       ? `/api/todos?search=${encodeURIComponent(searchQuery)}`
//       : "/api/todos";

//     fetch(url)
//       .then((response) => {
//         if (!response.ok)
//           throw new Error(`HTTP error! status: ${response.status}`);
//         return response.json();
//       })
//       .then((data) => {
//         setTodos(data.todos);
//         setError(null);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setTodos([]);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       fetchTodos(searchTerm);
//     }, 500);
//     return () => clearTimeout(timerId);
//   }, [searchTerm, fetchTodos]);

//   const handleAddTodo = (task) => {
//   if (editTodo) {
//     // mode edit
//     fetch(`/api/todos/${editTodo.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ task }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // kalau API ga balikin todo, pakai task dari input
//         setTodos(
//           todos.map((todo) =>
//             todo.id === editTodo.id
//               ? { ...todo, task: data.task || task }
//               : todo
//           )
//         );
//         setEditTodo(null);
//         setIsModalOpen(false);
//       })
//       .catch((err) => console.error("Error updating todo:", err));
//   } else {
//     // mode tambah
//     fetch("/api/todos", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ task }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setTodos([
//           ...todos,
//           { id: data.id, task: data.task || task, completed: false },
//         ]);
//         setIsModalOpen(false);
//       })
//       .catch((err) => console.error("Error adding todo:", err));
//   }
// };


//   const handleDeleteTodo = (id) => {
//     fetch(`/api/todos/${id}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         setTodos(todos.filter((todo) => todo.id !== id));
//       })
//       .catch((err) => console.error("Error deleting todo:", err));
//   };

//   const handleToggleCompleted = (id, completed) => {
//     fetch(`/api/todos/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ completed: !completed }),
//     })
//       .then(() => {
//         setTodos(
//           todos.map((todo) =>
//             todo.id === id ? { ...todo, completed: !completed } : todo
//           )
//         );
//       })
//       .catch((err) => console.error("Error updating todo:", err));
//   };

//   const handleEditTodo = (todo) => {
//     setEditTodo(todo); // simpan todo yang mau diedit
//     setIsModalOpen(true); // buka modal
//   };

//   if (loading) {
//     return <div style={{ textAlign: "center" }}>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div style={{ textAlign: "center", color: "red" }}>Error: {error}</div>
//     );
//   }

//   return (
//     <div
//       style={{
//         padding: "20px",
//         maxWidth: "800px",
//         margin: "0 auto",
//         fontFamily: "sans-serif",
//       }}
//     >
//       <header style={{ textAlign: "center" }}>
//         <h1>Aplikasi Todo List</h1>
//         <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//         <TodoForm
//           onAddTodo={handleAddTodo}
//           editTodo={editTodo} // kirim todo yg sedang diedit
//         />
//         <h2>Daftar Tugas Anda</h2>
//         <TodoList
//           todos={todos}
//           onToggleCompleted={handleToggleCompleted}
//           onDeleteTodo={handleDeleteTodo}
//           onEditTodo={handleEditTodo} // tombol edit
//         />
//       </header>
//     </div>
//   );
// };

// export default TodoPage;

import React, { useState, useEffect, useCallback } from "react";
import TodoForm from "../../components/TodoForm.js";
import TodoList from "../../components/TodoList.js";
import SearchInput from "../../components/SearchInput.js";
import Modal from "react-modal";
import styled from "styled-components";

const TodoPage = () => {
  Modal.setAppElement("#root"); // accessibility requirement
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editTodo, setEditTodo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // NEW state for modal

  const PageWrapper = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #e4f3ffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  `;

  const fetchTodos = useCallback((searchQuery) => {
    setLoading(true);
    const url = searchQuery
      ? `/api/todos?search=${encodeURIComponent(searchQuery)}`
      : "/api/todos";

    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setTodos(data.todos);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setTodos([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchTodos(searchTerm);
    }, 500);
    return () => clearTimeout(timerId);
  }, [searchTerm, fetchTodos]);

  const handleAddTodo = (task) => {
    if (editTodo) {
      // mode edit
      fetch(`/api/todos/${editTodo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTodos(
            todos.map((todo) =>
              todo.id === editTodo.id
                ? { ...todo, task: data.task || task }
                : todo
            )
          );
          setEditTodo(null);
          setIsModalOpen(false); // close modal after update
        })
        .catch((err) => console.error("Error updating todo:", err));
    } else {
      // mode tambah
      fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTodos([
            ...todos,
            { id: data.id, task: data.task || task, completed: false },
          ]);
          setIsModalOpen(false); // close modal after add
        })
        .catch((err) => console.error("Error adding todo:", err));
    }
  };

  const handleDeleteTodo = (id) => {
    fetch(`/api/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.error("Error deleting todo:", err));
  };

  const handleToggleCompleted = (id, completed) => {
    fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    })
      .then(() => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !completed } : todo
          )
        );
      })
      .catch((err) => console.error("Error updating todo:", err));
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setIsModalOpen(true); // open modal when editing
  };

  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", color: "red" }}>Error: {error}</div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <header style={{ textAlign: "center" }}>
        <PageWrapper>
        <h1>Aplikasi Todo List</h1>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* button to open modal */}
        <button
          onClick={() => {
            setEditTodo(null); // reset if adding new
            setIsModalOpen(true);
          }}
          style={{
            padding: "10px 20px",
            margin: "10px 0",
            backgroundColor: "#87CEEB",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Tambah Todo
        </button>

        <h2>Daftar Tugas Anda</h2>
        {todos.length === 0 ? (
            <p style={{ textAlign: "center", fontWeight: "bold", fontStyle: "italic", color: "#555" }}>
            Tidak ada tugas ditemukan </p>
        ) : (
            <TodoList
          todos={todos}
          onToggleCompleted={handleToggleCompleted}
          onDeleteTodo={handleDeleteTodo}
          onEditTodo={handleEditTodo}
        />
        )}
        </PageWrapper>
      </header>

      {/* MODAL for TodoForm */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "500px",
            margin: "auto",
          },
        }}
      >
        <TodoForm onAddTodo={handleAddTodo} editTodo={editTodo} />
        <button
          onClick={() => setIsModalOpen(false)}
          style={{
            marginTop: "10px",
            padding: "8px 15px",
            backgroundColor: "#ccc",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Batal
        </button>
      </Modal>
    </div>
  );
};

export default TodoPage;