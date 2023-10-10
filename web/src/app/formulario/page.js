"use client"
import { useState } from 'react';

export default function FormPageOne() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const validateForm = () => {
    if (!firstName.match(/^[A-Za-z]+$/)) {
      alert('Solo letras para nombre');
      //la ñ no es valido
    }if (!lastName.match(/^[A-Za-z]+$/)) {
      alert('Solo letras para apellido');
      //la ñ no es valido
    }else {
      alert('Formulario válido');
    }
  };

    return (
      <div
      style={{
        backgroundColor:'#4D37B7',
      }}
      className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
    >

        <h2 className="text-3xl text-white font-bold mb-4">Formulario</h2>

      <form name="form" id ="registrationForm" action="/formulario1" method="get" onSubmit={validateForm}>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class ="formGroup sm:col-span-2 sm:col-start-1">
          <label for="province">Provincia</label>
          <div class="flex items-center">
          <select 
                  id="province" 
                  name="province" 
          class="rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400">
                <option>Buenos Aires</option>
                <option>CABA</option>
                <option>Catamarca</option>
                <option>Chaco</option>
                <option>Chubut</option>
                <option>Córdoba</option>
                <option>Corrientes</option>
                <option>Entre Ríos</option>
                <option>Formosa</option>
                <option>Jujuy</option>
                <option>La Pampa</option>
                <option>La Rioja</option>
                <option>Mendoza</option>
                <option>Misiones</option>
                <option>Neuquén</option>
                <option>Río Negro</option>
                <option>Salta</option>
                <option>San Juan</option>
                <option>San Luis</option>
                <option>Santa Cruz</option>
                <option>Santa Fe</option>
                <option>Santiago del Estero</option>
                <option>Tierra del Fuego</option>
                <option>Tucumán</option>
              </select>
          </div> 
        </div>
        <div class ="formGroup sm:col-span-2">
          <label for="district">Distrito</label>
          <div class="flex items-center">
          <input 
                  type="text" 
                  name="district" 
                  id="district" 
                  class="rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400" 
            />
          </div>   
        </div>
        <div class ="formGroup sm:col-span-2">
          <label for="surveyDay">Fecha de relevamiento</label>
          <div class="flex items-center">
          <input   
                  type="date" 
                  name="surveyDay" 
                  id="surveyDay" 
                  class="rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400" 
            />
          </div>
        </div>
        <div class ="formGroup sm:col-span-3">
          <label for="diningHall">Comedor/Merendero</label>
          <div class="flex items-center">
          <input 
                  type="text" 
                  name="diningHall" 
                  id="diningHall" 
                  class="rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400" 
            />
          </div> 
        </div>
        <div class ="formGroup sm:col-span-3">
          <label for="formNumber">Número de planilla/hoja</label>
          <div class="flex items-center">
          <input   
                  type="number" 
                  name="formNumber" 
                  id="formNumber" 
                  class="rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400" 
            />
          </div>  
        </div>
        <div class="formGroup sm:col-span-3">
          <label for="firstName">Nombre</label>
          <div class="mt-2">
          <input
                required
                type="text"
                name="firstName" 
                id="firstName" 
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                class= "rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400"
          />
          </div>
          <div class ="error text-red-700 px-4 py-2"></div>
        </div>
        <div class="formGroup sm:col-span-3">
          <label for="lastName">Apellido</label>
          <div class="text-gray-700 dark:text-gray-200">
          <input 
                  required
                  type="text" 
                  name="lastName" 
                  id="lastName" 
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  class= "rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400"
            />
          </div>
          <div class ="error text-red-700 py-2"></div>
        </div>
        <div class ="formGroup sm:col-span-3">
          <label for="sex" >Sexo(nacimiento)</label>
          <div class="flex items-center">
          <select 
                  id="sex" 
                  name="sex" 
          class="rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400">
                <option>Masculino</option>
                <option>Femenino</option>
              </select>
          </div>
        </div>
        <div class ="formGroup sm:col-span-3">
          <label for="birthday">Fecha de nacimiento</label>
          <div class="flex items-center">
          <input  
                  type="date" 
                  name="birthday" 
                  class="rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400" 
            />
          </div>  
          <div class ="error text-red-700 py-2"></div>
        </div>
        <div class ="formGroup sm:col-span-3">
          <label for="weight">Peso</label>
          <div class="flex items-center">
          <input 
                  required
                  min="0"
                  type="number" 
                  name="weight" 
                  id="weight" 
                  class="rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400" 
            />
          </div>
          <div class="flex items-center">
          <select 
                  id="weightMetric" 
                  name="weightMetric" 
          class="rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400">
                <option>gramos</option>
                <option>kilogramos</option>
              </select>
          </div>
          <div class ="error text-red-700 py-2"></div>
        </div>
        <div class ="formGroup sm:col-span-3">
          <label for="height">Talla</label>
          <div class="flex items-center">
          <input 
                  required
                  min="0"
                  type="number" 
                  name="height" 
                  id="height" 
                  class="rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400" 
            />
          </div>
          <div class="flex items-center">
          <select 
                  id="heightMetric" 
                  name="heightMetric" 
          class="rounded-md border px-4 py-2 w-half focus:outline-white text-gray-600 focus:border-yellow-400">
                <option>metros</option>
                <option>centimetros</option>
              </select>
          </div> 
          <div class ="error text-red-700 py-2"></div>
        </div>
        <button 
            type="submit" 
            class="px-8 py-2 mt-4 bg-green 400 w-full rounded-full  text-white shadow-lg"
            >
          Registrar
        </button>
        </div>
      </form> 
      </div>
      
    )
    
  }
  
