"use client"

import React, { useState } from 'react'
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
];

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
    if (onChange && newHour && newMinute && newPeriod) {
      onChange(`${newHour}:${newMinute} ${newPeriod.toUpperCase()}`);
    }
  };

  return (
    <div className="flex w-full items-center gap-2 rounded-md border border-accent text-black px-3 py-2 shadow-sm">
      <FaRegClock size={16} className="text-muted-foreground" />
      <div className="flex items-center gap-1">
        <Select name={name} value={hour} onValueChange={(val) => {
          setHour(val);
          updatedTime(val, minute, period);
        }}>
          <SelectTrigger size="sm" className="cursor-pointer bg-transparent">
            <SelectValue placeholder="HH" />
          </SelectTrigger>
          <SelectContent className=" border border-input">
            {hours.map((hour) => (
              <SelectItem className="cursor-pointer" key={hour.value} value={hour.value}>
                {hour.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select name={name} value={minute} onValueChange={(val) => {
          setMinute(val);
          updatedTime(hour, val, period);
        }}>
          <SelectTrigger size="sm" className="cursor-pointer  bg-transparent ">
            <SelectValue placeholder="MM" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            {minutes.map((minute) => (
              <SelectItem className="cursor-pointer" key={minute.value} value={minute.value}>
                {minute.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select name={name} value={period} onValueChange={(val) => {
          setPeriod(val);
          updatedTime(hour, minute, val);
        }}>
          <SelectTrigger size="sm" className="cursor-pointer bg-transparent">
            <SelectValue placeholder="AM/PM" className='' />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem className="cursor-pointer" key={"1"} value={"AM"}>AM</SelectItem>
            <SelectItem className="cursor-pointer" key={"2"} value={"PM"}>PM</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default TimeInput;
