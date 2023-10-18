import Link from 'next/link';
import React from 'react';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-violet-university text-white "
    >
      <img src="/notfound.png" alt="Error 404" className="mb-4 w-80 h-52" />
      <h1 className="text-4xl mb-4">404 - Página no encontrada</h1>
      <p className="text-lg mb-8">La página que estás buscando no existe.</p>
      <Link
        href="/" className="text-lg underline"
      >
        Ir a la página principal
      </Link>
    </div >
  );
};

export default Error404;
