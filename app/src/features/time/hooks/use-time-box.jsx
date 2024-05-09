import { useState } from "react"

const useTimeBox = () => {
    const [hour, setHour] = useState("0")
    const [minute, setMinute] = useState("00")

    const handleHourChange = (e) => {
        const newHour = e.target.value
        setHour(newHour)
    }

    const handleMinuteChange = (e) => {
        const newMinute = e.target.value
        setMinute(newMinute)
    }

    return { hour, minute, handleHourChange, handleMinuteChange }
}

export default useTimeBox
