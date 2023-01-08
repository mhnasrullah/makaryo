import { FC, PropsWithChildren } from "react"

interface Props {
    type : "primary" | "secondary",
    className? : string
}
const Button : FC<PropsWithChildren<Props>> = ({children,type,className}) => {

    let styleType : string;

    switch (type) {
        case "primary" :
            styleType = "bg-blue border-blue text-white";
            break;
        case "secondary" :
            styleType = "bg-transparent border-blue text-blue"
    }

    return (
        <button className={`${styleType} font-medium px-8 border-[1.5px] py-2 rounded-md ${className ? className : " "}`}>{children}</button>
    )
}

export default Button