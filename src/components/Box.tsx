import {FC, PropsWithChildren} from 'react'

interface Props {
    className? : string
}

const Box:FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <div className={`px-4 max-w-6xl lg:mx-auto ${className ? className : " "}`}>{children}</div>
  )
}

export default Box