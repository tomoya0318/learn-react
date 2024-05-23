import { useState } from "react";

export const useTimeBox = () => {
    const [hour, setHour] = useState("0");
    const [minute, setMinute] = useState("00");

    const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newHour = e.target.value;
        setHour(newHour);
    };

    const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMinute = e.target.value;
        setMinute(newMinute);
    };

    return { hour, minute, handleHourChange, handleMinuteChange };
};
