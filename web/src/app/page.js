// import Image from 'next/image'
import Navbar from './components/Home/Navbar'
import Footer from './components/Home/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section
        className="flex-1 overflow-hidden mt-20 sm:mt-0 bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
      >
        <div className="flex p-8 md:p-12 lg:px-16 lg:py-24 items-center">
          <div
            className="mx-auto max-w-xl min-h-full text-center"
          >
            <h2 className="text-2xl font-poppins font-bold uppercase text-gray-900 md:text-3xl text-center pb-8 sm:pb-0">
            Detección de malnutrición infantil
            </h2>

            <p className="hidden font-poppins font-medium text-gray-500 sm:mt-4 sm:block text-justify ">
            Trabajo de relevamiento, diagnóstico y análisis estadístico de índices antropométricos en población infantil.
            </p>
            <p className="hidden font-Encode-Sans font-medium text-gray-500 sm:mt-4 sm:block text-justify ">
            Coordinado por promotorxs del área de Salud Colectiva y la Universidad Popular Barrios de Pie, con apoyo técnico de Facultad de Ingeniería de la UBA.
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
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)]"
        />
      </section>
      <Footer />
    </main>
  )
}
