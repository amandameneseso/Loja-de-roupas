// Login.jsx
import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

    const [currentState, setCurrentState] = useState('Fazer login');
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (currentState === 'Cadastre-se') {
                const response = await axios.post(backendUrl + '/api/user/register', {name, email, password});
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                } else {
                    toast.error(response.data.message);
                }
            } else {
                const response = await axios.post(backendUrl + '/api/user/login', {email, password});
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                } else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token]);

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {currentState === 'Fazer login'
            ? ''
            : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Nome' required/>}
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='E-mail' required/>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Senha' required/>
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>{currentState === 'Fazer login' ? 'Esqueci minha senha' : ''}</p>
                {
                    currentState === 'Fazer login'
                    ? <p onClick={()=>setCurrentState('Cadastre-se')} className='cursor-pointer'>Não tem uma conta? Cadastre-se</p>
                    : <p onClick={()=>setCurrentState('Fazer login')} className='cursor-pointer'>Já tem uma conta? Fazer login</p>
                }
            </div>
            <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Fazer login' ? 'Entrar' : 'Criar conta'}</button>
        </form>
    )
}

export default Login