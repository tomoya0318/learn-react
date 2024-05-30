import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react"; 

export const Time: React.FC<{setTime: (time: string) => void}> = ({ setTime }) => {
    const [hour, setHour] = useState<number|string>("-");
    const [minute, setMinute] = useState<number|string>("-");

    useEffect(() => {
        if(hour !== "-" && minute !== "-"){
            setTime(`${padZero(hour)}:${padZero(minute)}`);
        }
    }, [hour, minute, setTime]);
    
    const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newHour = e.target.value === "-" ? "-" : parseInt(e.target.value, 10);
        setHour(newHour);
    };

    const handleMinuteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newMinute = e.target.value === "-" ? "-" : parseInt(e.target.value, 10);
        setMinute(newMinute);
    };

    const padZero = (num: number|string) => String(num).padStart(2, "0");

    const hourOptions = [
        <option key="-" value="-">-</option>,
        ...Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i}>
                {padZero(i)}
            </option>
        ))
    ];

    const minuteOptions = [
        <option key="-" value="-">-</option>,
        ...Array.from({ length: 60 }, (_, i) => (
            <option key={i} value={i}>
                {padZero(i)}
            </option>
        ))
    ];

    return (
        <>
            <select value={hour} onChange={handleHourChange}>
                {hourOptions}
            </select>
            <span>時</span>
            <select value={minute} onChange={handleMinuteChange}>
                {minuteOptions}
            </select>
            <span>分</span>
        </>
    );
}
