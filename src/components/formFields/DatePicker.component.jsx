import { DatePicker as $DatePicker } from "antd";
import { Field } from "formik";
import "./style.scss";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker = ({
  name,
  disableDate,
  disableTime,
  hideTime,
  format,
  disabled,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Field name={name}>
      {({ field, meta, form: { values, setFieldValue } }) => (
        <div className="w-full">
          <ReactDatePicker 
          className="custom-date-picker w-full h-[52px] bg-[#171723] rounded-[8px] text-[#92928F] flex items-center justify-between px-[16px] "
          selected={startDate} 
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setStartDate(date)}/>

          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};
