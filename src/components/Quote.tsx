import { Quoter } from "../App";

export interface QuoteProps {
  quote: Quoter
}

export const Quote = ({quote}: QuoteProps) => {
  return (
    <div className="quotation__box"> 
      <div className="picture__box">
        <a href={quote.address}>
        <img src={quote.source} alt={quote.alternative} />
        </a>
        <p>Click image for more information!</p>
      </div>
      <div className="quotation__text">
        <p><strong>"{quote.text}"</strong></p>
        <p><small>{quote.author}</small></p>
      </div>
    </div>
  );
};
