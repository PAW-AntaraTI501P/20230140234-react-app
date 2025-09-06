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
            // Cek apakah error berasal dari respons server atau masalah koneksi
            if (error.response) {
                // Server merespons dengan status error (misal: email sudah ada)
                const errorMessage = error.response.data.message || "Registrasi gagal. Silakan coba lagi.";
                alert(errorMessage);
                console.error("Registrasi gagal (Server Response):", error.response.data);
            } else {
                // Terjadi masalah koneksi (server tidak berjalan, dll)
                alert("Tidak dapat terhubung ke server. Pastikan server backend Anda berjalan.");
                console.error("Registrasi gagal (Connection Error):", error.message);
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;