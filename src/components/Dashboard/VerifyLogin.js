import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VerifyLogin() {
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true); // Përdoret për të treguar nëse po ngarkohen të dhënat
    const navigate = useNavigate();

    useEffect(() => {
        // Kërko të dhënat nga serveri për të verifikuar përdoruesin
        axios.get('http://localhost:8080', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setEmail(res.data.email); // Ruaj email-in
                    setRole(res.data.role);    // Ruaj rolin

                    // Kontrollo nëse emaili është 'elsamorina@gmail.com' dhe roli është 'Admin'
                    if (res.data.email === 'elsamorina@gmail.com' && res.data.role === 'admin') {
                        navigate('/dashboard'); // Admini do të drejtohet në dashboard
                    } else {
                        navigate('/login'); // Nëse nuk është admini, drejto në login
                    }
                } else {
                    navigate('/login'); // Përdoruesi nuk është i validuar, drejto në login
                }
                setLoading(false); // Pasi të përfundojë ngarkimi, vendos `loading` në false
            })
            .catch(err => {
                console.log(err);
                navigate('/login'); // Në rast të gabimeve, drejto në login
                setLoading(false);
            });
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>; // Mund të vendosësh një mesazh të thjeshtë për ngarkim
    }

    return null; // Nëse nuk ka asnjë gjë për të shfaqur, mund të kthehet null
}
