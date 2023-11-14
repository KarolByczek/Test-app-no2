import { useState } from "react";
import { Quote } from "./components/Quote";
import { Button } from "./components/Button";
import Nietzsche from "./assets/Nietzsche.jpg";
import Clinton from "./assets/Clinton.jpg";
import Johnpaul from "./assets/Johnpaul.jpg";
import Reagan from "./assets/Reagan.jpg";
import Oppenheimer from "./assets/Oppenheimer.jpeg";
import "./App.scss";

export interface Quoter {
  text: string;
  author: string;
  source: string;
  alternative: string;
  address: string;
}

const quoteArray: Quoter[] = [
  {
    text: "When you look long enough into the void, the void begins to look back through you.",
    author: " Friedrich Nietzsche",
    source: Nietzsche,
    alternative: "A picture of Nietzsche",
    address: "https://www.youtube.com/watch?v=wHWbZmg2hzU",
  },

  {
    text: "Let your spirit descend and revitalise the face of this land!",
    author: "John Paul II",
    source: Johnpaul,
    alternative: "A picture of John Paul II",
    address: "https://www.youtube.com/watch?v=SYI4FCQCLsA",
  },

  {
    text: "Mr. Gorbachov, tear down this wall!",
    author: "Ronald Reagan",
    source: Reagan,
    alternative: "A picture of Reagan",
    address: "https://www.youtube.com/watch?v=HA7sP47e8tA",
  },

  {
    text: "I did not, I repeat, i did not have sexual relations with that woman!",
    author: "Bill Clinton",
    source: Clinton,
    alternative: "A picture of Clinton",
    address: "https://www.youtube.com/watch?v=_aGbdni7QNs",
  },

  {
    text: "I am become death, the destroyer of worlds.",
    author: "Robert Oppenheimer",
    source: Oppenheimer,
    alternative: "A picture of Oppenheimer",
    address: "https://www.youtube.com/watch?v=9k7IgvZbs_4",
  },
];

function App() {
  const [quote0, setCurrentQuote] = useState<Quoter>(quoteArray[0]);

  const handleGenerateQuoteClick = () => {
    var randomIndex: number = Math.floor(Math.random() * 4.9);
    setCurrentQuote(quoteArray[randomIndex]);
  };

  const handleShareQuoteClick = () => {
    console.log("The drawn quote is:", quote0);
  };

  return (
    <main className="main">
      <Quote quote={quote0} />
      <div className="button__box">
        <Button
          onClick={handleGenerateQuoteClick}
          className="button button__generate"
        >Generate quote!
        </Button>
        <Button
          onClick={handleShareQuoteClick}
          className="button button__share"
        >Share quote!
        </Button>
      </div>
    </main>
  );
}

export default App;
