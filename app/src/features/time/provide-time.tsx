import { useTimeBox } from "./hooks"

export const ProvideTime = () => {
    const { hour, minute, handleHourChange, handleMinuteChange } = useTimeBox()
    // 0から23の時刻オプションを生成
    const hourOptions = Array.from({ length: 24 }, (_, i) => (
        <option key={i} value={String(i).padStart(2, "0")}>
            {String(i).padStart(2, "0")}
        </option>
    ))

    // 0から59の分オプションを生成
    const minuteOptions = Array.from({ length: 60 }, (_, i) => (
        <option key={i} value={String(i).padStart(2, "0")}>
            {String(i).padStart(2, "0")}
        </option>
    ))

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
    )
};
