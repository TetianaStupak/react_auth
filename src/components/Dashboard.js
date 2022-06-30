import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function Dashboard({ token }) {
    console.log(token);
    const [data, setData] = useState();
    useEffect(() => {
        loginUser();
    }, []);
    function loginUser() {
        axios.get(
            "https://api.rec.devel.prozeta.net/data.json",
            {
                headers: {
                    "Content-type": "Application/json",
                    "Authorization": `Bearer ${token?.access_token}`
                }
            }
        )
            .then((response) => {
                setData(JSON.stringify(response.data, null, 2));
            },
                (error) => {
                    var status = error.response.status
                }
            );
    };


    return (
        <div>
            <h2>Dashboard</h2>
            <Card>
                <Card.Body>
                    <pre>
                        <code>
                            {data}
                        </code>
                    </pre>
                </Card.Body>
            </Card>
        </div>

    );
};