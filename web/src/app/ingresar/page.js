"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../components/Home/Footer';
import NavBar from '../components/Home/Navbar';
import kidsPhoto from '../../../public/fondologin.jpg'

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Función para alternar entre mostrar y ocultar la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    if (username === 'usuario' && password === 'contraseña') {
      setMessage('Inicio de sesión exitoso.');
    } else {
      setMessage('Nombre de usuario o contraseña incorrectos.');
    }
  };

  return (
    <div
      className="h-screen flex flex-col items-center"
    >
      <NavBar/>
      <Image
        quality={85}
        placeholder="blur"
        fill
        // sizes="100vw"
        objectFit='cover'
        objectPosition='center'
        style={{
          zIndex: -1
        }}
        alt='infancias dibujando '
        src={kidsPhoto}

      />
      <div className="bg-white rounded-lg p-10 my-auto text-center bg-opacity-90 w-3/4 lg:w-1/3">
        <h2 className="text-3xl text-violet-university font-bold mb-4">Iniciar Sesión</h2>
        <div className="rounded p-4">
          <input
            type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-4 py-2 w-full focus:outline-none text-gray-600 focus:border-yellow-400"
          />
        </div>
        <div className="relative rounded p-4 ">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-4 py-2 w-full focus:outline-none text-gray-600 focus:border-yellow-400"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 text-gray-600"
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
              </svg>
            )}
          </button>
        </div>
        <div className="text-gray-600 p-1 text-xs lg:text-base h-8 ">
          <p >{message}</p>
        </div>

        <div className="py-1">
          <button
            onClick={handleLogin}
            className="inline-block rounded bg-violet-university px-12 py-3 text-sm font-medium text-white transition hover:bg-[#2e1d82] focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Ingresar
          </button>
        </div>
        <div>

          <Link
            href="/"
            className=" text-violet-university text-lg underline"
          >
            Ir a la página principal
          </Link>
        </div>
      </div>
      <Footer />

    </div>
  );
}
