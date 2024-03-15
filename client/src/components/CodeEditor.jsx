import React from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

function CodeEditor({ language, value, onChange }) {
    return (
        <div className="bg-[#282c34] p-4 rounded-lg shadow relative z-10">
            <h2 className="text-lg font-semibold mb-2 text-white">{language}</h2>
            <CodeMirror
                className="text-xl border-gray-700 border"
                value={value}
                height="342px"
                theme="dark"
                extensions={language === "HTML" ? [html(true)] : language === "CSS" ? [css(true)] : [javascript(true)]}
                onChange={onChange}
            />
        </div>
    );
}

export default CodeEditor;
