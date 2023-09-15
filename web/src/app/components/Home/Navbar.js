

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-violet-university text-sm py-0">
            <nav className="text-white py-0 sm:py-4 pt-0 text-center bottom-0 left-0 right-0">
                <div className="grid grid-cols-4 justify-center my-0 sm:my-4">
                    <div className="col-span-1  flex justify-center items-center">
                        <a href="https://upbarriosdepie.com.ar/" target="_blank">
                            <svg className="h-8 w-8 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </a>
                    </div>
                    <div className="grid grid-cols-3 items-center col-span-3 hidden sm:grid">
                        <div className="flex text-left col-span-1 justify-center justify-self-center">
                            <img
                                alt="point"
                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4cd.svg"
                                className="h-8 w-8"
                            />
                            <p>Sede Central : Anchorena 345, Capital Federal</p>
                        </div>
                        <div className="flex text-left col-span-1 justify-center justify-self-center">
                            <img
                                alt="point"
                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4cd.svg"
                                className="h-8 w-8"
                            />
                            <p>Sedes en todo el país</p>
                        </div>
                        <div className="flex text-left col-span-1 justify-center justify-self-center">
                            <div className="pr-4">
                                <img
                                    alt="mail"
                                    src="https://s.w.org/images/core/emoji/14.0.0/svg/2709.svg"
                                    className="h-8 w-8"
                                />
                            </div>
                            <p>universidadbarriosdepie@gmail.com</p>
                        </div>    
                    </div>
                    <div className="flex col-span-3 visible sm:hidden justify-end pr-16">
                            <img
                                alt="PopularUniversity"
                                src="/PopularUniversity.png"
                                className="h-20 w-20 sm:h-40 sm:w-40 max-w-lg rounded-l  object-contain"
                            />
                    </div>
                </div>
            </nav>
        </header>
        
    )

}
