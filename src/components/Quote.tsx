import { Quoter } from "../App";

export interface QuoteProps {
  quote: Quoter;
}

export const Quote = ({ quote }: QuoteProps) => {
  return (
    <div className="quotation_box">
      <p>{quote.text}</p>
      <p>{quote.author}</p>
    </div>
  );
};
