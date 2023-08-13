import logo from '../assets/icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { DataContext } from '../App';

export default function Login() {

    const navigate = useNavigate();

    const contextData = useContext(DataContext);

    const [loginData, setLoginData] = useState({
        "email": "",
        "pass": ""
    })
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (contextData.user !== null) {
            navigate('/login')
        }
    })

    useEffect(() => {
        if (errorMsg) {
            setTimeout(() => {
                setErrorMsg("")
            }, 2000)
        }
    }, [errorMsg])

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!loginData.email || !loginData.pass) {
            setErrorMsg("Fill all the Data")
        }
        await signInWithEmailAndPassword(auth, loginData.email, loginData.pass)
            .then((UserCredential) => {
                const user = UserCredential.user;
                contextData.user = { 'name': user.displayName, "email": user.email }
                navigate('/')
            })
            .catch((error) => {
                if (error.message === "Firebase: Error (auth/user-not-found).") {
                    setErrorMsg("user not found");
                }
                else {
                    setErrorMsg('Invalid password');
                }
            })
    }

    return (
        <div className="login">
            <form method='GET'>

                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <input type="email"
                    placeholder="Email"
                    name='email'
                    required
                    onChange={(e) => { setLoginData({ ...loginData, "email": e.target.value }) }}
                    value={loginData.email}
                />

                <input type="password"
                    placeholder="Password"
                    name='pass'
                    required
                    onChange={(e) => { setLoginData({ ...loginData, 'pass': e.target.value }) }}
                    value={loginData.pass}
                />

                <div className='error-message'>
                    {
                        errorMsg &&
                        <p style={{ color: 'red', fontSize: ".8rem", marginBottom: ".5rem" }}>{errorMsg}</p>
                    }
                </div>

                <input type="submit"
                    value="Login"
                    onClick={handleLogin}
                />

                <div className="reg-link">
                    <Link to="/create-new-account">Create Account?</Link>
                </div>
            </form>
        </div>
    )
}