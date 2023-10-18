import React from 'react';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor: '#4d37b6', color: 'white' }}>
      <img src="/notfound.png" alt="Error 404" className="mb-4" style={{ width: '300px', height: '200px' }} />
      <h1 className="text-4xl mb-4">404 - Página no encontrada</h1>
      <p className="text-lg mb-8">La página que estás buscando no existe.</p>
      <a href="/" className="text-lg underline">
        Ir a la página principal
      </a>
    </div>
  );
};

export default Error404;
