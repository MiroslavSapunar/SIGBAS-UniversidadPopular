# SIGBAS-UniversidadPopular
Desarrollo de software conjunto de la Secretaria de Inclusión, Género, Bienestar y Articulación Social -SIGBAS- de la Facultad de Ingeniería de la UBA -FIUBA- y la Universidad Popular

## Para levantar dev ##
- Contar con un entorno con Docker instalado: [+info áca](https://docs.docker.com/get-docker/)
- renombrar el archivo ".env.template" a ".env" en la carpeta raiz
- Abrir una terminal ubicada en la carpeta raiz
- Para arrancar localmente el proyecto, ejecutar en la terminal:
````Bash
make up
````
- Ingresar en el navegador a la pagina [http://localhost:3000](http://localhost:3000)
- codear/revisar que no se rompa nada :P
- Para detener el proyecto, ejecutar en la terminal:
````Bash
make stop
````

## Para debuguear
- Despues de levantar, ejecutar en la terminal:
````Bash
make logs
````
Permite ver el Log de docker y de cada uno de los contenedores según nombre del mismo.
Usar crt + c (control + letra c) para dejar de ver los logs
