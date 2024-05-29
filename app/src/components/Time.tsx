import { useState, useEffect } from "react";

export const Time: React.FC<{setTime: (time: string) => void}> = ({ setTime }) => {
    const [hour, setHour] = useState<number>(0);
    const [minute, setMinute] = useState<number>(0);

    useEffect(() => {
        setTime(`${padZero(hour)}:${padZero(minute)}`);
    }, [hour, minute, setTime]);
    
    const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newHour = parseInt(e.target.value, 10);
        setHour(newHour);
    };

    const handleMinuteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newMinute = parseInt(e.target.value, 10);
        setMinute(newMinute);
    };

    const padZero = (num: number) => String(num).padStart(2, "0");

    const hourOptions = Array.from({ length: 24 }, (_, i) => (
        <option key={i} value={i}>
            {padZero(i)}
        </option>
    ));

    const minuteOptions = Array.from({ length: 60 }, (_, i) => (
        <option key={i} value={i}>
            {padZero(i)}
        </option>
    ));

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
