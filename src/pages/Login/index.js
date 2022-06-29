import React, { useState }from 'react'
import './login.css'
import { MdEmail, MdLock } from 'react-icons/md';
import { HiEye, HiExternalLink} from 'react-icons/hi';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [show, setShow] = useState(""); 

    return (
        <div className='login'>
            <div className='login-logo'>
                <img 
                src='https://renatobraga.com.br/wp-content/uploads/2018/07/login-icon-png-18.png'
                alt='Login App'
                ></img>
            </div>

            <div className='login-right'>
                <h1>Acessar</h1>

                <div className='login-loginInputEmail'>
                    <MdEmail />
                    <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>

                <div className='login-loginInputPassword'>
                    <MdLock />
                    <input type={show ? "text" : "password"} 
                    placeholder='Senha' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}></input>
                </div>
        
                <button type='submit'>
                    Entrar
                </button>

                <h4>Não tenho conta!</h4>
                <button type='submit'>
                    Cadastrar
                </button>


            </div>
        </div>
    )
}

export default Login