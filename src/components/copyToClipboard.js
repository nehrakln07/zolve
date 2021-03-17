import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyToClipboardComponet = () => {

  const searchParam = getQueryStringValue("q");

  function getQueryStringValue(key) {

    const params = new URLSearchParams(window.location.search);
    return params.get(key);
  }

  const [text, setText] = useState(searchParam);

  return (
    <div className="click-copy">
      <div style={{ width: "100%" }}>
        <label>Enter text</label>
      </div>
      <div style={{ width: "100%" }}>
        <input type="text" placeholder="Enter..." value={text} onChange={e => setText(e.target.value)} />
        <CopyToClipboard text={text}
          onCopy={() => alert("text copied")}>
          <button>Copy to Clipboard</button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default CopyToClipboardComponet;
