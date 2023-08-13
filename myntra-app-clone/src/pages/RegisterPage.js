import { useEffect, useState } from 'react';
import logo from '../assets/icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';


export default function RegisterPage() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        "name": "",
        "email": "",
        "pass": ""
    });
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (errorMsg) {
            setTimeout(() => {
                setErrorMsg("")
            }, 2000)
        }
    }, [errorMsg])

    const createNewAccount = async (e) => {
        e.preventDefault();

        if (!userData.name || !userData.email || !userData.pass) {
            setErrorMsg("Fill all the Data")
        }
        await createUserWithEmailAndPassword(auth, userData.email, userData.pass)
            .then((UserCredential) => {
                const user = UserCredential.user;
                updateProfile(user, { displayName: userData.name })
                console.log(user);
                navigate('/login');
            })
            .catch((error) => {
                const errMsg = error.message;
                if (errMsg === "Firebase: Error (auth/email-already-in-use).") {
                    setErrorMsg("Mail already in use");
                }
                if (errMsg === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setErrorMsg("password should be atleast 6 character long")
                }
                else{
                    setErrorMsg("Enter valid data")
                }
            })
    }

    return (
        <div className="login">
            <form>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <input type="text"
                    placeholder='Name'
                    name='name'
                    required
                    onChange={(e) => { setUserData({ ...userData, 'name': e.target.value }) }}
                    value={userData.name}
                />

                <input type="email"
                    placeholder="Email"
                    name='email'
                    required
                    onChange={(e) => { setUserData({ ...userData, "email": e.target.value }) }}
                    value={userData.email}
                />

                <input type="password"
                    placeholder="Password"
                    name='pass'
                    required
                    onChange={(e) => { setUserData({ ...userData, "pass": e.target.value }) }}
                    value={userData.pass}
                />

                <div className='error-message'>
                    {
                        errorMsg &&
                        <p style={{ color: 'red', fontSize: ".8rem", marginBottom: ".5rem" }}>{errorMsg}</p>
                    }
                </div>

                <input type="submit"
                    value="SignUp"
                    onClick={createNewAccount}
                />

                <div className="reg-link">
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </div>
            </form>
        </div>
    )
}