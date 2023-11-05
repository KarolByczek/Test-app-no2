import { ReactNode } from "react"


export interface ButtonProps {
    className: string
    children: ReactNode
    onClick: () => void
}

export const Button = ({children}:ButtonProps, {onClick}:ButtonProps, {className}:ButtonProps) => {

    return (
        <div className={className}>
            <button onClick={onClick}>
                {children}
            </button>
        </div> 
    )
};