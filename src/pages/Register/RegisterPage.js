// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function RegisterPage() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post(
//                 "http://localhost:3001/api/auth/register",
//                 { name, email, password }
//             );
//             alert("Registrasi berhasil! Silakan login.");
//             navigate('/login');
//         } catch (error) {
//             // Cek apakah error berasal dari respons server atau masalah koneksi
//             if (error.response) {
//                 // Server merespons dengan status error (misal: email sudah ada)
//                 const errorMessage = error.response.data.message || "Registrasi gagal. Silakan coba lagi.";
//                 alert(errorMessage);
//                 console.error("Registrasi gagal (Server Response):", error.response.data);
//             } else {
//                 // Terjadi masalah koneksi (server tidak berjalan, dll)
//                 alert("Tidak dapat terhubung ke server. Pastikan server backend Anda berjalan.");
//                 console.error("Registrasi gagal (Connection Error):", error.message);
//             }
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <button type="submit">Register</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default RegisterPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:3001/api/auth/register",
                { name, email, password }
            );
            alert("Registrasi berhasil! Silakan login.");
            navigate('/login');
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.message || "Registrasi gagal. Silakan coba lagi.";
                alert(errorMessage);
            } else {
                alert("Tidak dapat terhubung ke server. Pastikan server backend Anda berjalan.");
                console.error("Registrasi gagal (Connection Error):", error.message);
            }
        }
    };

    // --- STYLES (Sama seperti halaman Login) ---
    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#282c34',
        fontFamily: 'sans-serif',
    };

    const formContainerStyle = {
        backgroundColor: '#40444f',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '400px',
    };

    const h2Style = {
        textAlign: 'center',
        color: '#61dafb',
        marginBottom: '30px',
    };

    const inputGroupStyle = {
        marginBottom: '20px',
    };

    const labelStyle = {
        display: 'block',
        color: '#ccc',
        marginBottom: '8px',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#282c34',
        border: '1px solid #555',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1rem',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        backgroundColor: '#61dafb',
        color: '#282c34',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '10px',
    };
    
    const linkStyle = {
        textAlign: 'center',
        marginTop: '20px',
        color: '#ccc',
    };
    
    const loginLinkStyle = {
        color: '#61dafb',
        cursor: 'pointer',
        textDecoration: 'underline',
    };

    return (
        <div style={pageStyle}>
            <div style={formContainerStyle}>
                <h2 style={h2Style}>Buat Akun Baru</h2>
                <form onSubmit={handleSubmit}>
                    {/* Input untuk Nama */}
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Nama:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={inputStyle}
                            placeholder="Masukkan nama Anda"
                        />
                    </div>
                    {/* Input untuk Email */}
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={inputStyle}
                            placeholder="Masukkan email Anda"
                        />
                    </div>
                    {/* Input untuk Password */}
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={inputStyle}
                            placeholder="Buat password"
                        />
                    </div>
                    <div>
                        <button type="submit" style={buttonStyle}>Register</button>
                    </div>
                </form>
                <div style={linkStyle}>
                    Sudah punya akun?{' '}
                    <span 
                        style={loginLinkStyle} 
                        onClick={() => navigate('/login')}
                    >
                        Login di sini
                    </span>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;