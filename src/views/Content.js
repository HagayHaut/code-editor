import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import LanguageDropdown from "../components/LanguageDropdown";

import { languageOptions } from "../constants/languageOptions";

const javascriptPlaceholder = "// add your code here";

function Content() {
  const [code, setCode] = useState(javascriptPlaceholder);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

  const onChange = (action, data) => {
    if (action === "code") setCode(data);
    else console.warn("case not handled!", action, data);
  };

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  return (
    <>
      <LanguageDropdown onSelectChange={onSelectChange} />
      <CodeEditor code={code} onChange={onChange} language={"javascript"} />
    </>
  );
}

export default Content;
