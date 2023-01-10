import Box from "../components/Box"


const Partner = () => {
  return (
    <section className="py-14 lg:py-16">
        <Box>
            <p className="text-gray text-center text-sm lg:text-base">Sudah lebih dari <span className="text-blue font-semibold">100+</span> bekerjasama dengan kami</p>
            <div className="flex flex-wrap justify-center items-center mt-4">
                <img className="h-7 m-2" src={`/assets/images/google.png`} alt={"google"} />
                <img className="h-7 m-2" src={`/assets/images/shopee.png`} alt={"shopee"} />
                <img className="h-5 m-2" src={`/assets/images/gojek.png`} alt={"gojek"} />
                <img className="h-8 m-2" src={`/assets/images/tokopedia.png`} alt={"tokopedia"} />
                <img className="h-9 m-2" src={`/assets/images/traveloka.png`} alt={"traveloka"} />
            </div>
        </Box>
    </section>
  )
}

export default Partner