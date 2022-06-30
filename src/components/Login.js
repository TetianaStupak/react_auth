import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    async function loginUser(cred) {
        axios.post('auth/realms/Recruitment/protocol/openid-connect/token',
            `grant_type=password&username=${encodeURIComponent(cred.username)}&password=${encodeURIComponent(cred.password)}&client_id=oauth-proxy-rec`,
            {
                mode: 'no-cors',
                baseURL: 'https://auth0.prozeta.net/',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },

            }).then(function (response) {
                setToken(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser({
            username,
            password
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={e => setUserName(e.target.value)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};