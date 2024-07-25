import "./App.css";
import MyInput from "./MyInput.tsx";
import { Ref, useEffect, useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <form>
        <MyInput
          label="Enter your name:"
          ref={inputRef as Ref<HTMLInputElement>}
        ></MyInput>
      </form>
    </>
  );
}

export default App;
