import React, { useCallback, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Result from './components/Result';
import CodeEditor from './components/CodeEditor';

function App() {

  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [srcCode, setSrcCode] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcCode(`
        <html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  const onChangeHtml = useCallback((value) => {
    setHtmlCode(value);
  }, [])

  const onChangeCss = useCallback((value) => {
    setCssCode(value)
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    setJsCode(value)
  }, []);

  return (
    <div>
      <Navbar srcCode = {srcCode}/>
      <div className=" p-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              <CodeEditor language="HTML" value={htmlCode} onChange={onChangeHtml} />
              <CodeEditor language="CSS" value={cssCode} onChange={onChangeCss} />
              <CodeEditor language="JavaScript" value={jsCode} onChange={onChangeJavaScript} />
          </div>
          <Result srcCode={srcCode} />
      </div>
    </div>
  );
}

export default App;
