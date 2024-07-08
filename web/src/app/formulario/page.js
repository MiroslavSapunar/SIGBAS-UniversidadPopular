"use client"
import { useState } from 'react';

export default function FormPageOne() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let formData = new FormData(event.target);
      let formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      console.log(JSON.stringify(formDataObject, null, 2));
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div class="flex bg-violet-university justify-center justify-items-center">
      <div className="flex flex-col gap-[10px] w-2/3 p-6 m-8 bg-white rounded-md shadow-md text-violet-university">
        <h2 className="text-3xl font-bold">Formulario</h2>
        <form name="form" id="registrationForm" method='post' onSubmit={handleSubmit}>
          <div class="flex flex-col gap-[10px] ">
            <div className='grid lg:grid-cols-6 gap-[10px] p-2'>
              <div className='lg:col-span-6'><h4 className='font-bold text-[14px] lg:text-[16px]'>Información básica</h4></div>
              <div class="formGroup lg:col-span-2 lg:col-start-1">
                <label for="province">Provincia</label>
                <div class="flex items-center">
                  <select
                    id="province"
                    name="province"
                    class="rounded-lg border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400">
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
              <div class="formGroup lg:col-span-2">
                <label for="district">Distrito</label>
                <div class="flex items-center">
                  <input
                    type="text"
                    name="district"
                    id="district"
                    class="rounded-lg border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400"
                  />
                </div>
              </div>
              <div class="formGroup lg:col-span-2">
                <label for="diningHall">Comedor/Merendero</label>
                <div class="flex items-center">
                  <input
                    type="text"
                    name="diningHall"
                    id="diningHall"
                    class="rounded-lg border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400"
                  />
                </div>
              </div>
              <div class="formGroup lg:col-span-2">
                <label for="formNumber">Número de planilla/hoja</label>
                <div class="flex items-center">
                  <input
                    type="number"
                    name="formNumber"
                    id="formNumber"
                    class="rounded-lg border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400"
                  />
                </div>
              </div>
              <div class="formGroup lg:col-span-2">
                <label for="surveyDay">Fecha de relevamiento</label>
                <div class="flex items-center">
                  <input
                    type="date"
                    name="surveyDay"
                    id="surveyDay"
                    class="rounded-lg border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400"
                  />
                </div>
              </div>
            </div>
            <div className='lg:col-span-6 w-full border-t border-violet-university'></div>
            <div className='grid lg:grid-cols-6 gap-[10px] px-2 pt-2'>
              <div className='lg:col-span-6'><h4 className='font-bold text-[14px] lg:text-[16px]'>Datos de relevamiento</h4></div>
              <div class="formGroup lg:col-span-3">
                <label for="firstName">Nombre</label>
                <div>
                  <input
                    required
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    class="rounded-lg border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400"
                  />
                </div>
                <div class="error text-red-700 px-4 py-2"></div>
              </div>
              <div class="formGroup lg:col-span-3">
                <label for="lastName">Apellido</label>
                <div class="text-gray-700 dark:text-gray-200">
                  <input
                    required
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    class="rounded-lg border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400"
                  />
                </div>
                <div class="error text-red-700 py-2"></div>
              </div>
              <div class="formGroup lg:col-span-3">
                <label for="sex" >Sexo(nacimiento)</label>
                <div class="flex items-center">
                  <select
                    id="sex"
                    name="sex"
                    class="rounded-lg border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400">
                    <option>Masculino</option>
                    <option>Femenino</option>
                  </select>
                </div>
              </div>
              <div class="formGroup lg:col-span-3">
                <label for="birthday">Fecha de nacimiento</label>
                <div class="flex items-center">
                  <input
                    type="date"
                    name="birthday"
                    class="rounded-lg border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400"
                  />
                </div>
                <div class="error text-red-700 py-2"></div>
              </div>
              <div class="formGroup lg:col-span-3">
                <label for="weight">Peso</label>
                <div class="flex items-center gap-[10px]">
                  <input
                    required
                    min="0"
                    type="number"
                    name="weight"
                    id="weight"
                    class="rounded-lg border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400 w-[100px]"
                  />
                  <select
                    id="weightMetric"
                    name="weightMetric"
                    class="rounded-lg border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400">
                    <option>gramos</option>
                    <option>kilogramos</option>
                  </select>
                </div>
                <div class="error text-red-700 py-2"></div>
              </div>
              <div class="formGroup lg:col-span-3">
                <label for="height">Talla</label>
                <div class="flex items-center gap-[10px]">
                  <input
                    required
                    min="0"
                    type="number"
                    name="height"
                    id="height"
                    class="rounded-md border px-4 py-2 w-half focus:outline-none text-gray-600 focus:border-yellow-400 w-[100px]"
                  />
                  <select
                    id="heightMetric"
                    name="heightMetric"
                    class="rounded-md border px-4 py-2 w-half focus:outline-white text-gray-600 focus:border-yellow-400">
                    <option>metros</option>
                    <option>centimetros</option>
                  </select>
                </div>
                <div class="error text-red-700 py-2"></div>
              </div>
            </div>
            <button
              type="submit"
              class="px-8 py-2 mt-4 bg-violet-university 400 w-full rounded-md text-white shadow-md"
            >
              Registrar
            </button>
          </div>
        </form>
      </div >
    </div >

  )
}

