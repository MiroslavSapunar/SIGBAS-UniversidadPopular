//import Image from 'next/image'

export default function Home() {
  return (
    <body>
      <div class="h-full w-full fixed top-0 background" ></div>

    <form id ="registrationForm">
      <div class ="formGroup flex flex-col my-4">
        <label for="first-name">Nombre</label>
        <div class="flex items-center">
        <input 
                required
                minlength="2" 
                type="text" 
                name="first-name" 
                id="first-name" 
                autocomplete="given-name" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          />
          <span class="error icon hidden-ml-6 text-red-700">
            <i class="fa-solid fa-exclamation"></i>
          </span>
          <span class="success icon hidden -ml-6 text-green-700">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
          <div class="error text-red-700 py-2"></div>
      </div>
      <div class ="formGroup flex flex-col my-4">
        <label for="last-name">Apellido</label>
        <div class="flex items-center">
        <input 
                type="text" 
                name="last-name" 
                id="last-name" 
                autocomplete="family-name" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <span class="error icon hidden-ml-6 text-red-700">
            <i class="fa-solid fa-exclamation"></i>
          </span>
          <span class="success icon hidden -ml-6 text-green-700">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
          <div class="error text-red-700 py-2"></div>
      </div>
      <div class ="formGroup flex flex-col my-4">
        <label for="dni">DNI</label>
        <div class="flex items-center">
        <input 
                type="number" 
                name="dni" 
                id="dni" 
                autocomplete="dni" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <span class="error icon hidden-ml-6 text-red-700">
            <i class="fa-solid fa-exclamation"></i>
          </span>
          <span class="success icon hidden -ml-6 text-green-700">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
          <div class="error text-red-700 py-2"></div>
      </div>
      <div class ="formGroup flex flex-col my-4">
        <label for="birthday">Fecha de nacimiento</label>
        <div class="flex items-center">
        <input 
                type="date" 
                name="birthday" 
                id="birthday" 
                autocomplete="birthday" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <span class="error icon hidden-ml-6 text-red-700">
            <i class="fa-solid fa-exclamation"></i>
          </span>
          <span class="success icon hidden -ml-6 text-green-700">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
          <div class="error text-red-700 py-2"></div>
      </div>
      <div class ="formGroup flex flex-col my-4">
        <label for="sex" >Sexo</label>
        <div class="mt-2">
        <select 
        id="sex" 
        name="sex" 
        autocomplete="sex" 
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
        </div>
      </div>
      <div class ="formGroup flex flex-col my-4">
        <label for="weight">Peso</label>
        <div class="flex items-center">
        <input 
                type="number" 
                name="weight" 
                id="weight" 
                autocomplete="weight" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <span class="error icon hidden-ml-6 text-red-700">
            <i class="fa-solid fa-exclamation"></i>
          </span>
          <span class="success icon hidden -ml-6 text-green-700">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
          <div class="error text-red-700 py-2"></div>
      </div>
      <div class ="formGroup flex flex-col my-4">
        <label for="height">Talla</label>
        <div class="flex items-center">
        <input 
                type="number" 
                name="height" 
                id="height" 
                autocomplete="height" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <span class="error icon hidden-ml-6 text-red-700">
            <i class="fa-solid fa-exclamation"></i>
          </span>
          <span class="success icon hidden -ml-6 text-green-700">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
          <div class="error text-red-700 py-2"></div>
      </div>
      <div class ="formGroup flex flex-col my-4">
        <label for="survey-day">Fecha de relevamiento</label>
        <div class="flex items-center">
        <input 
                type="date" 
                name="survey-day" 
                id="survey-day" 
                autocomplete="survey-day" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <span class="error icon hidden-ml-6 text-red-700">
            <i class="fa-solid fa-exclamation"></i>
          </span>
          <span class="success icon hidden -ml-6 text-green-700">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
          <div class="error text-red-700 py-2"></div>
      </div>
      <div class ="formGroup flex flex-col my-4">
        <label for="province">Provincia</label>
        <div class="flex items-center">
        <input 
                type="text" 
                name="province" 
                id="province" 
                autocomplete="province" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <span class="error icon hidden-ml-6 text-red-700">
            <i class="fa-solid fa-exclamation"></i>
          </span>
          <span class="success icon hidden -ml-6 text-green-700">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
          <div class="error text-red-700 py-2"></div>
      </div>
      <div class ="formGroup flex flex-col my-4">
        <label for="district">Distrito</label>
        <div class="flex items-center">
        <input 
                type="text" 
                name="district" 
                id="district" 
                autocomplete="district" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <span class="error icon hidden-ml-6 text-red-700">
            <i class="fa-solid fa-exclamation"></i>
          </span>
          <span class="success icon hidden -ml-6 text-green-700">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
          <div class="error text-red-700 py-2"></div>
      </div>
      <div class ="formGroup flex flex-col my-4">
        <label for="dining-hall">Comedor/Merendero</label>
        <div class="flex items-center">
        <input 
                type="text" 
                name="dining-hall" 
                id="dining-hall" 
                autocomplete="dining-hall" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <span class="error icon hidden-ml-6 text-red-700">
            <i class="fa-solid fa-exclamation"></i>
          </span>
          <span class="success icon hidden -ml-6 text-green-700">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
          <div class="error text-red-700 py-2"></div>
      </div>
      <div class ="formGroup flex flex-col my-4">
        <label for="form-number">Número de planilla</label>
        <div class="flex items-center">
        <input 
                type="number" 
                name="form-number" 
                id="form-numbe" 
                autocomplete="form-numbe" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <span class="error icon hidden-ml-6 text-red-700">
            <i class="fa-solid fa-exclamation"></i>
          </span>
          <span class="success icon hidden -ml-6 text-green-700">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
          <div class="error text-red-700 py-2"></div>
      </div>
      <button 
      type="submit" 
      class="px-8 py-2 mt-4 bg-green 400 w-full rounded-full  text-white shadow-lg">
        Registrar
      </button>

    </form> 
    </body>
    
  )
}
