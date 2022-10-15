import { useEffect, useState } from "react";

function Countdown({ bid_expire_date }) {
    const [expiryTime, setExpiryTime] = useState(true);
    const [countdownTime, setCountdownTime] = useState(
        {
            countdownDays: '',
            countdownHours: '',
            countdownMinutes: '',
            countdownSeconds: ''
        }
    );
    const countdownTimer = (time) => {

        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(time).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds
            }

            setCountdownTime(runningCountdownTime);

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }

        }, 1000);
    }

    useEffect(() => {
        countdownTimer(bid_expire_date);
    });

    return (

        <>
            {expiryTime !== false ?
                <>
                    <div className="de_countdown bg-color-secondary text-white">
                        <span>{countdownTime.countdownDays}d</span>&nbsp;
                        <span>{countdownTime.countdownHours}h</span>&nbsp;
                        <span>{countdownTime.countdownMinutes}m</span>&nbsp;
                        <span>{countdownTime.countdownSeconds}s</span>
                    </div>
                </>
                : <div className="de_countdown bg-color-secondary text-white">NFT Expired</div>
            }
        </>
    )
}
export default Countdown;