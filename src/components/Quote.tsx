import { Quoter } from "../App";

export interface QuoteProps {
  quote: Quoter
}

export const Quote = ({quote}: QuoteProps) => {
  return (
    <a href={quote.address}>
      <img src={quote.source} alt={quote.alternative} />
      <p>Click image for more information!</p>
    </a>
    <div className="quotation_box"> 
      <p>{quote.text}</p>
      <p>{quote.author}</p>
    </div>
  );
};
