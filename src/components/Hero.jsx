import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <h1>Welcome to OdinShop</h1>
      <p>
        Quality products. Affordable prices. From eletronics to fashion. Your
        every day needs all in one place.
      </p>
      <Link to={"shop"}>Start shopping</Link>
    </div>
  );
}

export { Hero };
