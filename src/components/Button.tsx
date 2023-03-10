import { ComponentPropsWithRef, FC, PropsWithChildren } from "react"

interface Props extends ComponentPropsWithRef<"button"> {
    mode : "primary" | "secondary" | "listKeyword" | "ternary",
    className? : string
}
const Button : FC<PropsWithChildren<Props>> = ({children,mode,className,...props}) => {

    let styleType : string;

    if(mode === "listKeyword"){
        return (
            <button 
            className={`p-2 bg-lightBlue font-semibold text-blue rounded-lg text-sm ${className ? className : ' '}`}
            {...props}>{children}</button>
        )
    }

    switch (mode) {
        case "primary" :
            styleType = "bg-blue border-blue text-white hover:bg-[#285792] transition-all hover:border-[#285792]";
            break;
        case "secondary" :
            styleType = "bg-transparent border-blue text-blue hover:border-black transition-all hover:text-black";
            break;
        case "ternary" :
            styleType = "bg-white border-white text-blue";
            break;
        default : styleType = " "
    }

    return (
        <button 
        className={`${styleType} font-medium px-8 border-[1.5px] py-2 rounded-sm text-sm ${className ? className : " "}`}
        {...props}
        >{children}</button>
    )
}

export default Button