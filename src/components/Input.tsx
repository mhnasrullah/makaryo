import {FC} from 'react'

interface Props extends React.ComponentPropsWithRef<"input">{
    searchIcons? : boolean,
    full? : boolean 
}

const Input:FC<Props> = ({searchIcons,full,className,...props}) => {
    return (
        <div className={`flex ${full ? 'w-full' : ' '} p-2 rounded-sm bg-pureWhite ${className ? className : " "}`}>
            {searchIcons && (
                <img src={"/assets/icons/Search.svg"} className="w-5 mr-2" alt="search" />
            )}
            <input
            className='outline-none text-black placeholder:text-gray text-sm w-full'
            {...props}/>
        </div>
    )
};

export default Input