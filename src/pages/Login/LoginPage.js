import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/api/auth/login",
                { email, password }
            );
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            alert("Login berhasil!");
            navigate('/');
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.message || "Email atau password salah.";
                alert(errorMessage);
            } else {
                alert("Tidak dapat terhubung ke server. Silakan coba lagi nanti.");
                console.error("Login gagal (Connection Error):", error.message);
            }
        }
    };

    // --- STYLES ---
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
    
    const registerLinkStyle = {
        color: '#61dafb',
        cursor: 'pointer',
        textDecoration: 'underline',
    };

    return (
        <div style={pageStyle}>
            <div style={formContainerStyle}>
                <h2 style={h2Style}>Login Akun</h2>
                <form onSubmit={handleSubmit}>
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
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={inputStyle}
                            placeholder="Masukkan password"
                        />
                    </div>
                    <div>
                        <button type="submit" style={buttonStyle}>Login</button>
                    </div>
                </form>
                <div style={linkStyle}>
                    Belum punya akun?{' '}
                    <span 
                        style={registerLinkStyle} 
                        onClick={() => navigate('/register')}
                    >
                        Daftar di sini
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;