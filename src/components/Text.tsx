import { FC, PropsWithChildren } from "react";

interface Props {
    _for : "BigText",
    color : "black" | "white",
    direction? : "left" | "center",
    className? : string
}

const Text:FC<PropsWithChildren<Props>> = ({
        _for,
        direction = "left",
        color,children,className
    }) => {
        
    const textColor = `text-${color}`

    switch (_for){
        case "BigText" : return <h1 className={`${textColor} text-4xl lg:text-5xl lg:leading-[1.5] leading-[1.5] font-black ${className ? className : " "}`}>{children}</h1>
            
    }

}

export default Text