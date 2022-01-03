import { useState } from "react";
import {
  Footer,
  Loader,
  Navbar,
  Services,
  Transactions,
  Welcome,
} from "./components/index";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      hello
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
