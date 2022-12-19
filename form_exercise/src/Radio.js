import React from "react";

function Radio({ pergunta, options, id, value, setValue }) {
  function onChange({ target }) {
    setValue({ ...value, [id]: target.value });
  }

  return (
    <fieldset
      style={{
        padding: "2rem",
        border: "2px solid #eee",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((question, i) => (
        <label
          key={i}
          style={{
            padding: "1 rem",
            margin: "1rem 0",
            fontFamily: "monospace",
          }}
        >
          <input
            type="radio"
            value={question}
            onChange={onChange}
            checked={question === value[id]}
          />
          {question}
        </label>
      ))}
    </fieldset>
  );
}

export default Radio;
