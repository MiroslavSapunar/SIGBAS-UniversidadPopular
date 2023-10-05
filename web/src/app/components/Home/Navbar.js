

export default function Navbar() {
    return (
        <header className="fixed w-full bg-violet-university text-sm">
            <nav className="text-white text-center">
                <div className="grid grid-cols-4 justify-center my-3 md:my-3">
                    <div className="col-span-1  flex justify-center items-center">
                        <a href="https://upbarriosdepie.com.ar/" target="_blank">
                            <svg className="h-8 w-8 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </a>
                    </div>
                    <div className="hidden md:grid grid-cols-4 items-center col-span-3">
                        <div className="flex text-left justify-left">
                            <img
                                alt="point"
                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4cd.svg"
                                className="h-8 w-8"
                            />
                            <p className="text-xs flex items-center ">Sede Central : Anchorena 345, Capital Federal</p>
                        </div>
                        <div className="flex text-left justify-left">
                            <img
                                alt="point"
                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4cd.svg"
                                className="h-8 w-8"
                            />
                            <p className="text-xs flex items-center ">Sedes en todo el país</p>
                        </div>
                        <div className="flex text-left justify-left col-span-2">
                            {/* <div className="pr-4"> */}
                            <img
                                alt="mail"
                                src="https://s.w.org/images/core/emoji/14.0.0/svg/2709.svg"
                                className="h-8 w-8 pr-2"
                            />
                            {/* </div> */}
                            <p className="text-xs flex items-center ">universidadbarriosdepie@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex col-span-3 visible md:hidden justify-end pr-16">
                        <img
                            alt="PopularUniversity"
                            src="/PopularUniversity.png"
                            className="h-20 w-20 sm:h-30 sm:w-30 max-w-lg rounded-l  object-contain"
                        />
                    </div>
                </div>
            </nav>
        </header>

    )

}
