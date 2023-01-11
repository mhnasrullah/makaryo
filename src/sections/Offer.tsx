import Box from "../components/Box"
import Button from "../components/Button"


const Offer = () => {
  return (
    <section className="py-10 pt-24">
        <Box >
            <div className="bg-blue rounded-lg px-5 lg:px-0 lg:py-10 py-8 w-full md:flex md:items-center md:justify-between relative">

                {/* Decoration */}
                <img src="/assets/decorations/offerdecoration.svg" className="absolute -right-10 -top-10" alt=" "/>
                <img src="/assets/decorations/dotSet.svg" className='absolute md:w-16 w-14 lg:-bottom-5 lg:-left-6 -bottom-8 -left-8' />

                {/* -- */}
                <div className="md:w-4/5 lg:pl-12">
                    <h1 className="text-pureWhite text-3xl font-semibold">Yuk Mulai  Cari Pekerjaan di Makaryo</h1>
                    <p className="text-sm text-white leading-relaxed mt-4">Makaryo merupakan suatu platform untuk pencarian kerja. Platform ini bertujuan untuk memudahkan pencari kerja menemukan pekerjaan impiannya dengan mudah.</p>
                </div>
                <div className="md:flex md:w-1/3 md:items-center md:justify-center h-fit">
                    <Button
                    className="w-full md:w-fit mt-4 md:h-fit"
                    mode="ternary">Daftar Sekarang</Button>
                </div>
            </div>
        </Box>
        
    </section>
  )
}

export default Offer