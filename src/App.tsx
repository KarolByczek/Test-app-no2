import { useState } from "react";
import { Quote } from "./components/Quote";
import { Button } from "./components/Button";
import "./App.scss";

export interface Quoter {
  text: string;
  author: string;
}

const quoteArray: Quoter[] = [
  {
    text: "When you look into abyss, the abyss looks into you.",
    author: "Nitche",
  },

  {
    text: "Let your spirit descend and revitalise the face of this land!",
    author: "John Paul II",
  },

  {
    text: "Mr Gorbachov, tear down this wall!",
    author: "Ronald Reagan",
  },

  {
    text: "I did not, I repeat, i did not sleep with this young intern!",
    author: "Bill Clinton",
  },

  {
    text: "I am become death, the destroyer of worlds.",
    author: "Robert Oppenheimer",
  },
];

function App() {
  const [quote0, setCurrentQuote] = useState<Quoter>(quoteArray[0]);

  const handleGenerateQuoteClick = () => {
    var randomIndex: number = Math.floor(Math.random() * 4.9);
    setCurrentQuote(quoteArray[randomIndex]);
  };

  const handleShareQuoteClick = () => {
    console.log("The drawn quote is:");
    console.log(quote0);
  };

  return (
    <main className="main">
      <Quote quote={quote0} />
      <div className="button_box">
        <Button
          onClick={handleGenerateQuoteClick}
          className="button button_generate"
          children={<span>Generate quote!</span>}
        />
        <Button
          onClick={handleShareQuoteClick}
          className="button button_share"
          children={<span>Share quote!</span>}
        />
      </div>
    </main>
  );
}

export default App;
