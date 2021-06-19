import React, { useContext, useState } from 'react'
import { toast } from "react-toastify";

import ThemeButton from '../ThemeButton/ThemeButton'
import TextBody from '../Text/body'
import Button from '../Button/Button'

import { UserContext } from "../../context/UserContext";
import { client } from '../../utils'

function Login({ setAuth }) {

    const { setUser } = useContext(UserContext);


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {

        e.preventDefault()

        if (
            !username ||
            !password
        ) {
            return toast.error("You need to fill in all the fields");
        }


        const body = { username: username, password: password };
        setLoading(true)
        try {
            const { token } = await client("/auth/login", { body });
            localStorage.setItem("token", token);
        } catch (err) {
            return toast.error(err.message);
        } finally {
            setLoading(false)
        }
        const user = await client("/auth/me");
        localStorage.setItem("user", JSON.stringify(user.data));
        setUser(user.data);


        setUsername('')
        setPassword('')
    }

    return (
        <>
            <form onSubmit={handleLogin} >
                <div className="auth-page__logo">
                    <Button icon><img alt="babbl-logo" src={require('../icons/babbl-logo.png')} width="200em" height="100em" viewBox="0 0 200 200" fill="none" /></Button>
                </div>

                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-control" style={{ marginBottom: "50px" }}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>


                <ThemeButton disabled={loading} full size="large" type="submit">
                    {loading ? "Logging in" : "Login"}
                </ThemeButton>
                <div style={{ margin: "5px" }}>
                    <TextBody bold>or</TextBody>
                </div>
                <ThemeButton full size="large" primary type="button" onClick={setAuth}>
                    Signup
                </ThemeButton>
            </form>
        </>
    )
}

export default Login
