import { useState } from "react";
import CodeEditor from "./components/CodeEditor";

const javascriptPlaceholder = "// add your code here";

function App() {
  const [code, setCode] = useState(javascriptPlaceholder);

  const onChange = (action, data) => {
    if (action === "code") setCode(data);
    else console.warn("case not handled!", action, data);
  };

  return (
    <div className="App">
      <CodeEditor code={code} onChange={onChange} language={"javascript"} />
    </div>
  );
}

export default App;
