"use client"
import React, { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { FaRegClock } from "react-icons/fa6";

const hours = Array.from({ length: 12 }, (_, i) => {
  const value = String(i + 1).padStart(2, "0");
  return { value, label: value };
});

const minutes = [
  { value: "00", label: "00" },
  { value: "15", label: "15" },
  { value: "30", label: "30" },
  { value: "45", label: "45" },
  { value: "59", label: "59" },
]

const TimeInput = ({
  name,
  onChange,
}: {
  name: string
  onChange?: (value: string) => void,
}) => {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [period, setPeriod] = useState("");

  const updatedTime = (newHour = hour, newMinute = minute, newPeriod = period) => {
    console.log("⏳ Time Updated:", newHour, newMinute, newPeriod);
    if (onChange && newHour && newMinute && newPeriod) {
      onChange(`${newHour}:${newMinute} ${newPeriod.toUpperCase()}`);
    }
  }

  return (
    <div
      className="flex w-full items-center pl-3 rounded-md border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-accent-foreground/20 dark:hover:bg-input/50"
    >
      <div className='text-muted-foreground'>
        <FaRegClock size={13} />
      </div>
      <div className='flex items-center'>
        <Select name={name} value={hour} onValueChange={(val) => {
          setHour(val);
          updatedTime(val, minute, period);
        }}>
          <SelectTrigger className='cursor-pointer border-none'>
            <SelectValue placeholder="HH" className='cursor-pointer border-none' />
          </SelectTrigger>
          <SelectContent>
            {hours.map((hour) => (
              <SelectItem className='cursor-pointer' key={hour.value} value={hour.value}>
                {hour.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select name={name} value={minute} onValueChange={(val) => {
          setMinute(val);
          updatedTime(hour, val, period);
        }}>
          <SelectTrigger className='cursor-pointer border-none'>
            <SelectValue placeholder="MM" className='text-foreground' />
          </SelectTrigger>
          <SelectContent>
            {minutes.map((minute) => (
              <SelectItem className='cursor-pointer' key={minute.value} value={minute.value}>
                {minute.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select name={name} value={period} onValueChange={(val) => {
          setPeriod(val);
          updatedTime(hour, minute, val);
        }}>
          <SelectTrigger className='cursor-pointer border-none'>
            <SelectValue placeholder="AM/PM" className='text-foreground' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className='cursor-pointer' key={"1"} value={"AM"}>AM</SelectItem>
            <SelectItem className='cursor-pointer' key={"2"} value={"PM"}>PM</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default TimeInput;
