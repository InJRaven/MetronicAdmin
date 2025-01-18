import React, { ChangeEvent, ReactNode, useState } from "react";
import clsx from "clsx";

const fontSize = {
  Large: "text-base",
  Medium: "text-md",
  Small: "text-sm",
  ExtraSmall: "text-xs",
};
const inputSize = {
  Large: "input-lg",
  Medium: "input-md",
  Small: "input-sm",
  ExtraSmall: "input-xs",
};

interface BaseInputType {
  inputRef?: React.RefObject<HTMLInputElement>;
  type: "text" | "email" | "password" | "search" | "tel" | "url";
  size: "Large" | "Medium" | "Small" | "ExtraSmall";
  variant: "Outline" | "Tertiary";
  label?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  onChange?: () => void;
  // iconLeft?: ReactNode;
  // iconRight?: ReactNode;
  maxLength?: number;
  autocapitalize?: string;
  autocomplete?: string;
  readonly?: boolean;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

interface StateDefaultType extends BaseInputType {}
const StateDefault: React.FC<StateDefaultType> = ({
  inputRef,
  type = "text",
  size = "Medium",
  variant = "Outline",
  value = "",
  name = "",
  placeholder = "",
  onChange,
  autocapitalize,
  autocomplete,
  readonly,
  disabled,
  required,
  className,
}) => {
  const inputClass = clsx(
    "input",
    inputSize[size],
    fontSize[size],
    {
      Outline: "border-gray-300",
      Tertiary: "border-transparent",
    }[variant],
    className
  );

  return (
    <input
      ref={inputRef}
      type={type}
      id={name} // Add an ID to associate the label with the input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoCapitalize={autocapitalize}
      autoComplete={autocomplete}
      readOnly={readonly}
      disabled={disabled}
      required={required}
      className={inputClass}
    />
  );
};

interface StateLabelType extends BaseInputType {}
const StateLabel: React.FC<StateLabelType> = ({
  inputRef,
  type = "text",
  size = "Medium",
  variant = "Outline",
  value = "",
  label = "",
  name = "",
  placeholder = "",
  onChange,
  autocapitalize,
  autocomplete,
  readonly,
  disabled,
  required,
  className,
}) => {
  const classes = clsx(
    "flex items-baseline flex-col gap-[0.8rem]",
    fontSize[size],
    className
  );

  const inputClass = clsx(
    "input",
    inputSize[size],
    {
      Outline: "border-gray-300",
      Tertiary: "border-transparent",
    }[variant]
  );

  return (
    <div className="w-full">
      <div className={classes}>
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="ml-1 text-danger">*</span>}
        </label>
        <input
          ref={inputRef}
          type={type}
          id={name} // Add an ID to associate the label with the input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoCapitalize={autocapitalize}
          autoComplete={autocomplete}
          readOnly={readonly}
          disabled={disabled}
          required={required}
          className={inputClass}
        />
      </div>
    </div>
  );
};

interface StateIconType extends BaseInputType {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}
const StateIcon: React.FC<StateIconType> = ({
  inputRef,
  type = "text",
  size = "Medium",
  variant = "Outline",
  value = "",
  label = "",
  name = "",
  placeholder = "",
  iconLeft,
  iconRight,
  onChange,
  autocapitalize,
  autocomplete,
  readonly,
  disabled,
  required,
  className,
}) => {
  const inputClass = clsx(
    "input focus-within:border-primary focus-within:text-gray-800 justify-between",
    inputSize[size],
    fontSize[size],
    {
      Outline: "border-gray-300",
      Tertiary: "border-transparent",
    }[variant],
    { "!bg-gray-100 !text-gray-400 !pointer-events-none": disabled },
    className
  );
  return (
    <div className="w-full flex items-baseline flex-col gap-[0.8rem]">
      {label && (
        <label className={`form-label ${fontSize[size]}`} htmlFor={name}>
          {label}
          {required && <span className="ml-1 text-danger">*</span>}
        </label>
      )}
      <div className={inputClass}>
        {iconLeft && iconLeft}
        <input
          ref={inputRef}
          type={type}
          id={name} // Add an ID to associate the label with the input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoCapitalize={autocapitalize}
          autoComplete={autocomplete}
          readOnly={readonly}
          disabled={disabled}
          required={required}
          className="bg-transparent focus:placeholder:text-gray-800"
        />
        {iconRight && iconRight}
      </div>
    </div>
  );
};

interface StateValidType extends BaseInputType {
  isValid?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}
const StateValid: React.FC<StateValidType> = ({
  inputRef,
  type = "text",
  size = "Medium",
  variant = "Outline",
  value = "",
  label = "",
  name = "",
  placeholder = "",
  iconLeft,
  iconRight,
  isValid,
  onChange,
  autocapitalize,
  autocomplete,
  readonly,
  disabled,
  required,
  className,
}) => {
  const inputClass = clsx(
    "input focus-within:border-primary focus-within:text-gray-800",
    inputSize[size],
    fontSize[size],
    {
      Outline: "border-gray-300",
      Tertiary: "border-transparent",
    }[variant],
    isValid !== undefined && {
      "!border-danger": isValid === false,
      "!border-success": isValid === true,
    },
    { "!bg-gray-100 !text-gray-400 !pointer-events-none": disabled },
    className
  );
  return (
    <div className="w-full flex items-baseline flex-col gap-[0.8rem]">
      {label && (
        <label className={`form-label ${fontSize[size]}`} htmlFor={name}>
          {label}
          {required && <span className="ml-1 text-danger">*</span>}
        </label>
      )}
      <div className={inputClass}>
        {iconLeft && iconLeft}
        <input
          ref={inputRef}
          type={type}
          id={name} // Add an ID to associate the label with the input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoCapitalize={autocapitalize}
          autoComplete={autocomplete}
          readOnly={readonly}
          disabled={disabled}
          required={required}
          className="bg-transparent focus:placeholder:text-gray-800"
        />
        {isValid !== undefined ? (
          <i
            className={`${
              isValid ? "ki-solid ki-check text-success" : "ki-filled ki-information-3 text-danger"
            }`}
          />
        ) : (
          iconRight && iconRight
        )}
      </div>
    </div>
  );
};

interface InputNumberType extends BaseInputType {
  min?: number;
  max?: number;
  step?: number;
  handleIncrease?: () => void;
  handleDecrease?: () => void;
}
const InputNumber: React.FC<InputNumberType> = ({
  size = "md",
  variant = "outline",
  label = "",
  value,
  name,
  onChange,
  disabled,
  placeholder = "",
  min = 0,
  max = 99,
  step = 1,
  handleIncrease,
  handleDecrease,
  inputRef,
  className,
}) => {
  const classes = clsx(
    "inputs input-card",
    `size-${size}`,
    {
      "border border-gray-300 hover:border-gray-400 focus-within:!border-primary focus-within:!bg-light-active":
        variant === "outline",
      "border border-transparent hover:border hover:border-gray-400 focus-within:!border-primary focus-within:!bg-light-active":
        variant === "tertiary",
    },
    { "!bg-gray-100 cursor-none text-gray-400 pointer-events-none": disabled },
    className
  );

  return (
    <div className={classes}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        type="number"
        name={name}
        id={name}
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        placeholder={placeholder}
        readOnly
        className="text-center active:text-gray-800 read-only:pointer-events-none"
      />
      <div className="flex flex-col content-center justify-center gap-1">
        <button
          onClick={handleIncrease}
          className="flex content-center justify-center"
        >
          <span
            className={`ki-outline ki-up text-[1.2rem] hover:text-gray-800 hover:bg-gray-200 px-2 hover:rounded-t-[0.6rem] ${
              disabled ? "text-gray-400" : "text-gray-600"
            }`}
          ></span>
        </button>
        <button
          onClick={handleDecrease}
          className="flex content-center justify-center"
        >
          <span
            className={`ki-outline ki-down text-[1.2rem] hover:text-gray-800 hover:bg-gray-200 px-2 hover:rounded-b-[0.6rem] ${
              disabled ? "text-gray-400" : "text-gray-600"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
};
const Input = {
  Default: StateDefault,
  Label: StateLabel,
  Icon: StateIcon,
  Valid: StateValid,
  Number: InputNumber,
};
export default Input;
