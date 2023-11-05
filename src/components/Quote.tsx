import React from "react";
import type {Quoter} from "../App";

 export interface QuoteProps {
    quote:Quoter
    className:string
}

export const Quote = ({quote}:QuoteProps, {className}:QuoteProps) => {

    return (
        <div>
            <p className={className}>
                {quote.text}
            </p>
            <p className={className}>
                {quote.author}
            </p>
        </div>
    )
};