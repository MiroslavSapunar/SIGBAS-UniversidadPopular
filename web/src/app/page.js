// import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between bg-white ">
      <section
        className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            className="mx-auto max-w-xl min-h-full text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl text-left">
              Emergencia Alimentariacsaczdvzsvc cdsmvcns,mn
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
      {/* TODO. add footer with FIUBA, UP info */}
    </main>
  )
}
