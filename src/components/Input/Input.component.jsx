import React from "react";
import "./Input.styles.css";

const Free = ({
  placeholder,
  onChange,
  value,
  type,
  name,
  label,
  rightIcon,
  leftIcon,
  onLeftClick,
  onRightClick,
  onBlur,
  error,
  noMarginRight,
}) => {
  return (
    <div className="input-container">
      {label && (
        <label htmlFor="exampleFormControlInput1" className="input-label">
          {label}
        </label>
      )}
      <div className="flex items-center justify-center my-3 rounded-lg input-parent">
        {leftIcon ? <button onClick={onLeftClick}>{leftIcon}</button> : null}
        <input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={type}
          name={name}
          onBlur={onBlur}
          className="w-full py-3 pl-5 pr-5 text-sm text-white input active focus-visible:ring-1 focus-visible:border-black-P600 focus-visible:outline-none focus-visible:bg-primary-P600 focus:ring-0 "
          id="exampleFormControlInput1"
        />
        {rightIcon ? (
          <button
            onClick={onRightClick}
            className={`absolute ${noMarginRight ? "" : "mr-4"} right-5`}
          >
            {rightIcon}
          </button>
        ) : null}
      </div>
      {error && <p className="mb-4 italic font-light text-red-P50">{error}</p>}
    </div>
  );
};

const CheckBox = ({ checked, onChange }) => {
  return (
    <label className="checkbox-container">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="rounded-lg checkmark"></span>
    </label>
  );
};

const Select = ({ label, options, placeholder, ...rest }) => {
  return (
    <div className="input-container">
      {label && (
        <label htmlFor="exampleFormControlInput1" className="input-label">
          {label}
        </label>
      )}
      <select
        name="filter"
        className="w-full py-3 pl-5 pr-12 my-3 text-sm input text-white-P600 active focus-visible:ring-1 focus-visible:border-black-P600 focus-visible:outline-none focus-visible:bg-primary-P600 focus:ring-0"
        style={{ border: "1px solid #16191F" }}
        placeholder="select"
        {...rest}
      >
        <option value={null} disabled selected hidden>
          {placeholder}
        </option>

        {options?.map((option, i) => {
          if (!option.used) {
            return (
              <option key={i} value={option.id}>
                {option.name}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};

const Input = {
  Free,
  CheckBox,
  Select,
};

export default Input;
