import React, { useState, useEffect } from "react";
import { HStack, Select, Text } from "@chakra-ui/react";

export const Time: React.FC<{ setTime: (time: string) => void }> = ({ setTime }) => {
    const [hour, setHour] = useState<number|string>("-");
    const [minute, setMinute] = useState<number|string>("-");

    useEffect(() => {
        if (hour !== "-" && minute !== "-") {
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
        <HStack>
            <Select 
                placeholder="-"
                value={hour}
                onChange={handleHourChange}
                boxsize="lg"
                padding={1}
                variant="outline"
                border="1px solid"
                borderColor="blue.100"
                borderRadius="md"
            >
                {hourOptions}
            </Select>
            <Text>時</Text>
            <Select
                placeholder="-"
                value={minute}
                onChange={handleMinuteChange}
                boxsize="lg"
                padding={1}
                variant="outline"
                border="1px solid"
                borderColor="blue.100"
                borderRadius="md"
            >
                {minuteOptions}
            </Select>
            <Text>分</Text>
        </HStack>
    );
};
