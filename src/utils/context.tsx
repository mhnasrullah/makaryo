import { useEffect, useState, createContext,FC, PropsWithChildren } from 'react'

interface ctxDefaultValue {
    windowScroll : number
}

export const Ctx = createContext<ctxDefaultValue>({
    windowScroll : window.scrollY
})

const WindowContext:FC<PropsWithChildren> = ({children}) => {
    const [scroll,setScroll] = useState(window.scrollY);

    useEffect(()=>{
        window.onscroll = () => {
            setScroll(window.scrollY)
        }
    })


    const ctxValue = {
        windowScroll : scroll
    }

    return (
        <Ctx.Provider value={ctxValue}>
            {children}
        </Ctx.Provider>
    )
}

export default WindowContext