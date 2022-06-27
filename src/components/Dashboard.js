import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard({ token }) {
    const [username, setUserName] = useState();
    useEffect(() => {
        loginUser();
    }, []);
    function loginUser() {
        axios.get(
            "https://api.rec.devel.prozeta.net/data.json",
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "Application/json",
                    "Authorization": `Bearer ${token.access_token}`
                }
            }
        )
            .then((response) => {
                var response = response.data;
                setUserName(response);
            },
                (error) => {
                    var status = error.response.status
                }
            );
    }


    return (
        <div>
            <h2>Dashboard</h2>
            <div>{username}</div>
        </div>

    );
}