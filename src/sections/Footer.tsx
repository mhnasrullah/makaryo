import Box from "../components/Box"
import Logo from "../components/Logo"

interface ListProps {
    title : string;
    list : string[];
}

const ListFooter = ({list,title} : ListProps) => {
    return(
        <div className="text-sm mt-4 lg:mt-0">
            <h6 className="font-bold">{title}</h6>
            <div className="text-gray space-y-2 mt-2 flex flex-col">
                {list.map((e,i)=>(
                    <button className="w-fit" key={i}>{e}</button>
                ))}
            </div>
        </div>
    )
}


const Footer = () => {
    
    const tentangList = ["Tentang Kami", "Berkarir di Makaryo", "Partner Kami"];
    const kontakList = ["Hubungi Kami", "FAQ", "Kirim Saran"];

  return (
    <div className="bg-pureWhite pb-10 pt-32 -mt-24">
        <Box className="lg:flex lg:items-start lg:justify-between">
            <Logo/>
            <ListFooter
            title="Tentang Makaryo"
            list={tentangList}
            />
            <ListFooter
            title="Kontak"
            list={kontakList}
            />
            <div className="mt-4 lg:mt-0">
                <h6 className="text-sm font-bold">Download Aplikasi Makaryo</h6>
                <div className="flex space-x-2 mt-2">
                    <img src="/assets/images/playstore.png" className="h-8"/>
                    <img src="/assets/images/appstore.png" className="h-8"/>
                </div>
            </div>
        </Box>
    </div>
  )
}

export default Footer