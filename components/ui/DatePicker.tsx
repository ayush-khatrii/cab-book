"use client"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export type ValuePiece = Date | null | string;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

const DatePickerInput = ({
  onChange,
  value
}: {
  onChange: (value: Date) => void;
  value: Value
}) => {
  const [date, setDate] = useState<Date>();
  const handleChange = (newDate = date) => {
    if (onChange) {
      onChange(newDate as Date);
    }
  }
  return (
    <DatePicker
      dayPlaceholder='dd'
      monthPlaceholder='mm'
      yearPlaceholder='yyyy'
      format='dd-MM-yyyy'
      className="placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-accent-foreground/20 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base"
      onChange={(val) => {
        setDate(val as Date)
        handleChange(val as Date);
      }}
      value={value} />
  )
}

export default DatePickerInput;