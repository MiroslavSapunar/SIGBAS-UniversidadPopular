// import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <header className="flex fixed top-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-violet-university text-sm py-4">
        <nav className="max-w-[80rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <a href="https://upbarriosdepie.com.ar/" target="_blank">
            <svg className="h-8 w-8 text-gray-600 dark:text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
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

      <footer className="bg-violet-university">
        <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
                <div className="flex justify-center my-10">
                    <div className="text-left ml-10">
                        <img
                        alt="PopularUniversity"
                        src="/PopularUniversity.png"
                        className="h-40 w-40 max-w-lg rounded-l  object-contain"
                        />
                    </div>
                    <div className="text-left ml-10">
                        <img
                        alt="WeAre"
                        src="/WeAre.png"
                        className="h-40 w-40 max-w-lg rounded-l  object-contain"
                         />
                    </div>
                    <div className="text-left ml-10">
                        <img
                        alt="FIUBA"
                        src="/FIUBA.png"
                        className="h-40 w-40 max-w-lg rounded-l object-contain invert"
                         />
                    </div>
                    <div className="flex justify-center items-center">
                    <a href="https://www.facebook.com/UniversidadPopularBarriosdePie" target="_blank">
                      <div className="flex-1 border-4 border-solid rounded-full bg-white ml-8"><svg className="h-4 w-4 text-violet-university"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></div></a>
                      <a href="https://twitter.com/UniPopularOk" target="_blank">
                      <div className="flex-1 border-4 border-solid rounded-full bg-white ml-3"><svg className="h-4 w-4 text-violet-university"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></div></a>
                      <a href="https://www.youtube.com/channel/UCbbEEBMJET8guTguNSajNyA" target="_blank">
                      <div className="flex-1 border-4 border-solid rounded-full bg-white ml-3"><svg className="h-4 w-4 text-violet-university"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg></div></a>
                      <a href="https://www.instagram.com/unipopularok" target="_blank">
                      <div className="flex-1 border-4 border-solid rounded-full bg-white ml-3"><svg className="h-4 w-4 text-violet-university"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></div></a>
                      <a href="https://upbarriosdepie.com.ar/contactanos/" target="_blank">
                      <div className="flex-1 border-4 border-solid rounded-full bg-white ml-3"><svg className="h-4 w-4 text-violet-university"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg></div></a>
                    </div>
                </div>
            </div>
            <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                <p className="order-2 md:order-1 mt-8 md:mt-0 mx-auto my-auto"> &copy; FIUBA, 2023. </p>
            </div>
        </div>
    </footer>
    </main>
  )
}
