import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    // State untuk menyimpan data user yang login
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // useEffect untuk mengecek status login saat komponen dimuat
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Fungsi untuk handle logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    // --- STYLES ---
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Menggunakan minHeight agar lebih fleksibel
        textAlign: "center",
        backgroundColor: "#282c34",
        color: "white",
        fontFamily: "sans-serif",
        padding: "20px",
    };

    const h1Style = {
        fontSize: "2.5rem",
        marginBottom: "10px",
    };

    const h2Style = {
        fontSize: "1.8rem",
        color: "#61dafb",
        marginBottom: "20px",
    };

    const pStyle = {
        fontSize: "1.2rem",
        color: "#ccc",
        marginBottom: "30px",
    };

    const buttonGroupStyle = {
        display: "flex",
        gap: "15px", // Jarak antar tombol
    };

    const buttonStyle = {
        padding: "12px 24px",
        fontSize: "1rem",
        fontWeight: "bold",
        backgroundColor: "#61dafb",
        color: "#282c34",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        textDecoration: "none",
    };

    // Style tambahan untuk tombol sekunder (Login, Logout)
    const secondaryButtonStyle = {
        ...buttonStyle, // Mewarisi semua style dari buttonStyle
        backgroundColor: "transparent",
        border: "2px solid #61dafb",
        color: "#61dafb",
    };

    return (
        <div style={containerStyle}>
            <h1 style={h1Style}>Selamat Datang di Aplikasi Todo List</h1>

            {user ? (
                // Tampilan JIKA SUDAH LOGIN
                <>
                    <h2 style={h2Style}>Selamat Datang, {user.name}!</h2>
                    <p style={pStyle}>Kelola semua tugas Anda dengan mudah dan efisien.</p>
                    <div style={buttonGroupStyle}>
                        <button style={buttonStyle} onClick={() => navigate('/todo')}>
                            Lihat Daftar Todo
                        </button>
                        <button style={secondaryButtonStyle} onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </>
            ) : (
                // Tampilan JIKA BELUM LOGIN
                <>
                    <p style={pStyle}>Kelola semua tugas Anda dengan mudah dan efisien.</p>
                    <div style={buttonGroupStyle}>
                        <button style={buttonStyle} onClick={() => navigate('/todo')}>
                            Lihat Daftar Todo
                        </button>
                        <button style={buttonStyle} onClick={() => navigate('/register')}>
                            Register
                        </button>
                        <button style={secondaryButtonStyle} onClick={() => navigate('/login')}>
                            Login
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default HomePage;