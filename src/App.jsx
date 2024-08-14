import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const input = 3;

const App = () => {
  const [count, setCount] = useState("aditya");

  return (
    <>{2+2}
      <div className="text-red-500">App</div>
      <Button text={input} />
      <form action="">
        <Input type="password" style={{ width: "30px" }} value="Password" className="border-2 block" />
        <Input type="email" style={{ width: "40px" }} className="border-2 block" />
        <Input type="checkbox" style={{ width: "50px" }} className="border-2 block" />
        <Input type="radio" style={{ width: "60px" }} className="border-2 block" />
        <Input type="text" style={{ width: "70px" }} className="border-2 block" />

        <button onClick={() => setCount("Clicked!")}>
          Click me 2 {count}
        </button>
      </form>
    </>
  );
};

export default App;
