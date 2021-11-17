import * as React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import {ThemeProvider} from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <FunctionContextComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
