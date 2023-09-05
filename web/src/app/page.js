// import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between bg-white ">
      <section
        class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
      >
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            class="mx-auto max-w-xl min-h-full text-center"
          >
            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl text-left">
              Emergencia Alimentaria
            </h2>

            <p class="hidden text-gray-500 md:mt-4 md:block text-justify ">
              Programa de relevamiento, seguimiento y analisis estadistico de Talles y Pesos de la poblacion infaltil en barrios populares de la Universidad Popular.
            </p>

            <div class="mt-4 md:mt-8">
              <a
                href="#"
                class="inline-block rounded bg-[#4D37B7] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#2e1d82] focus:outline-none focus:ring focus:ring-yellow-400"
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
          class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </main>
  )
}
