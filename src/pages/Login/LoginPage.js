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
            const response = await axios.post (
                "http://localhost:3001/api/auth/login",
                { email, password }
            );
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            alert("Login berhasil!");
            navigate('/');
        }
        catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.msg || "Email atau password salah.";
                alert(errorMessage);
                console.error("Login gagal (Server Response):", errorMessage);
            }
            else {
                alert("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
                console.error("Login gagal (Connection Error):", error.message);
            }
            // console.error("Login gagal:", error.response.data);
            // alert("Login gagal. Periksa kembali email dan password anda.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                        onChange={ (e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;