import "./App.css";
import { useState, useEffect } from "react";
import hello from "../src/img/hello.png";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loadingData">
          <div className="icona">
            <img src={hello} alt="hello" />
          </div>
        </div>
      ) : (
        <>
          <h1>Hello world.</h1>
        </>
      )}
    </div>
  );
}

export default App;
