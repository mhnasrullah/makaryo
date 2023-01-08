import Box from "../components/Box"
import Logo from "../components/Logo"
import {HiMenuAlt4} from 'react-icons/hi'
import Button from "../components/Button"
import { useState } from "react"

const AuthButton = () => {
    return (
        <>
            <Button
            className="w-full lg:w-fit lg:h-fit"
            type="primary"
            >Masuk</Button>
            <Button
            className="w-full mt-2 lg:mt-0 lg:w-fit lg:h-fit"
            type="secondary"
            >Daftar</Button>
        </>
    )
}

const Navbar = () => {

    const [show,setShow] = useState(false);

    return (
        <nav className="py-2">
            <Box className="lg:grid lg:grid-cols-3">
                {/* Left side n nav on mobile */}
                <div className="flex justify-between items-center">
                    <Logo/>
                    <button
                    onClick={()=>setShow(!show)}
                    className="lg:hidden"
                    >
                        <HiMenuAlt4 className="text-blue"/>
                    </button>
                </div>
                {/* middle side n content nav on mobile */}
                <div className={`font-semibold text-sm flex-col lg:flex-row lg:space-y-0 lg:space-x-6 space-y-4 py-6 ${show ? 'flex' : 'hidden lg:flex'}`}>
                    <button className="text-blue">Beranda</button>
                    <button>Kategori</button>
                    <button>Pekerjaan</button>
                    <button>Tips Kerja</button>
                    <div className="lg:hidden">
                        <AuthButton/>
                    </div>
                </div>
                {/* right side n hidden on mobile */}
                <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-4">
                    <AuthButton/>
                </div>
            </Box>
        </nav>
    )
}

export default Navbar