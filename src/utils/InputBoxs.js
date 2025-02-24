import React from "react";

function InputBoxs({
  type,
  placeholder,
  name,
  value,
  onChange,
  showPassword,
  show,
  emailormobilecheck,
}) {
  return (
    <div className="input-main-section">
      <div className={emailormobilecheck?"country-box":""}>{emailormobilecheck ? "+91" : null}</div>
      <input
        type={show ? "text" : type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="input-box"
      />
      {type == "password" ? (
        <div className="eye-show-icon cursor" onClick={showPassword}>
          {!show ? (
            <>
              <i class="fa-solid fa-eye-slash"></i>
            </>
          ) : (
            <>
              <i class="fa-solid fa-eye"></i>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default InputBoxs;
