import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-violet-university">
            <div className=" text-white py-4 pt-0 text-center bottom-0 left-0 right-0">
                    <div className="grid grid-cols-3 md:grid-cols-4 justify-center my-4">
                        <div className="text-left col-span-1 justify-center justify-self-center">
                            <img
                                alt="PopularUniversity"
                                src="/PopularUniversity.png"
                                className="h-20 w-20 sm:h-40 sm:w-40 max-w-lg rounded-l  object-contain"
                            />
                        </div>
                        <div className="text-left col-span-1 justify-center justify-self-center">
                            <img
                                alt="WeAre"
                                src="/WeAre.png"
                                className="h-20 w-20 sm:h-40 sm:w-40 max-w-lg rounded-l  object-contain"
                            />
                        </div>
                        <div className="text-left col-span-1 justify-center justify-self-center">
                            <img
                                alt="FIUBA"
                                src="/FIUBA.png"
                                className="h-20 w-20 sm:h-40 sm:w-40 max-w-lg rounded-l object-contain invert"
                            />
                        </div>
                  <div className="flex col-span-3  md:col-span-1 justify-center items-center justify-center justify-self-center">
                            <a href="https://www.facebook.com/UniversidadPopularBarriosdePie" target="_blank">
                                <div className="flex-1 border-4 border-solid rounded-full bg-white ml-3"><svg className="h-4 w-4 text-violet-university" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></div></a>
                            <a href="https://twitter.com/UniPopularOk" target="_blank">
                                <div className="flex-1 border-4 border-solid rounded-full bg-white ml-3"><svg className="h-4 w-4 text-violet-university" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></div></a>
                            <a href="https://www.youtube.com/channel/UCbbEEBMJET8guTguNSajNyA" target="_blank">
                                <div className="flex-1 border-4 border-solid rounded-full bg-white ml-3"><svg className="h-4 w-4 text-violet-university" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg></div></a>
                            <a href="https://www.instagram.com/unipopularok" target="_blank">
                                <div className="flex-1 border-4 border-solid rounded-full bg-white ml-3"><svg className="h-4 w-4 text-violet-university" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></div></a>
                            <a href="https://upbarriosdepie.com.ar/contactanos/" target="_blank">
                                <div className="flex-1 border-4 border-solid rounded-full bg-white ml-3"><svg className="h-4 w-4 text-violet-university" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg></div></a>
                        </div>
                    </div>
                <div className="mt-2 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-4 sm:mt-8 md:mt-0 mx-auto my-auto"> &copy; FIUBA, 2023. </p>
                </div>
            </div>
        </footer>
    )
}
