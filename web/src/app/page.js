// import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <header className="flex fixed top-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-violet-university text-sm py-4">
        <nav className="max-w-[80rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <a href="https://upbarriosdepie.com.ar/" target="_blank">
            <svg className="h-8 w-8 text-gray-600 dark:text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </a>
          <div className="flex items-center">
            <div className="flex items-center mr-16">
            <img
              alt="point"
              src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4cd.svg"
              className="h-8 w-8"
            />
              <p>Sede Central : Anchorena 345, Capital Federal</p>
            </div>
            <div className="flex items-center mr-16">
            <img
              alt="point"
              src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4cd.svg"
              className="h-8 w-8"
            />
              <p>Sedes en todo el país</p>
            </div>
            <div className="flex items-center mr-16">
              <div className="pr-4">
                <img
                  alt="point"
                  src="https://s.w.org/images/core/emoji/14.0.0/svg/2709.svg"
                  className="h-8 w-8"
                />
            </div>
              <p>universidadbarriosdepie@gmail.com</p>
            </div>
          </div>
        </nav>
      </header>
      <section
        className="flex-1 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            className="mx-auto max-w-xl min-h-full text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl text-left">
              Emergencia Alimentaria
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block text-justify ">
              Trabajo de relevamiento, diagnóstico, y análisis estadistico de Talles y Pesos en la población infaltil de barrios populares.
            </p>
            <p className="hidden text-gray-500 md:mt-4 md:block text-justify ">
              Coordinado por la Universidad Popular, Barrios de Pie y promotorxs de salud del área de Salud Colectiva.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-[#4D37B7] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#2e1d82] focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Ingresar
              </a>
            </div>
          </div>
        </div>
        {/* TODO. change this img html tag to Next/Image  */}
        <img
          alt="infancias"
          src="/infancias.jpg"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>

      <footer class="bg-violet-university">
        <div class="max-w-2xl mx-auto text-white py-10">
            <div class="text-center">
                <div class="flex justify-center my-10">
                    <div class="text-left ml-10">
                        <img
                        alt="PopularUniversity"
                        src="/PopularUniversity.png"
                        className="h-40 w-40 max-w-lg rounded-l  object-contain"
                        />
                    </div>
                    <div class="text-left ml-10">
                        <img
                        alt="WeAre"
                        src="/WeAre.png"
                        className="h-40 w-40 max-w-lg rounded-l  object-contain"
                         />
                    </div>
                    <div class="text-left ml-10">
                        <img
                        alt="FIUBA"
                        src="/FIUBA.png"
                        className="h-40 w-40 max-w-lg rounded-l object-contain invert"
                         />
                    </div>
                </div>
            </div>
            <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                <p class="order-2 md:order-1 mt-8 md:mt-0 mx-auto my-auto"> &copy; FIUBA, 2023. </p>
            </div>
        </div>
    </footer>
    </main>
  )
}
