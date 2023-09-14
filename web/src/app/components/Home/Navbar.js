

export default function Navbar() {
    return (
        <header className="flex fixed top-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-violet-university text-sm py-4">
            <nav className="max-w-[80rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <a href="https://upbarriosdepie.com.ar/" target="_blank">
                    <svg className="h-8 w-8 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
    )

}
