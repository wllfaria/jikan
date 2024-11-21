import { BaseDirectory, exists } from "@tauri-apps/plugin-fs";
import { appDataDir } from "@tauri-apps/api/path";
import { useContext, useEffect, useState } from "react";
import { TimerContext } from "@/contexts/timer-context";
import * as styles from "./timer.module.css";

const DEFAULT_TIMER_SPLASH = "/img/default-timer-splash.jpg";

export function Timer() {
    const { formattedTime } = useContext(TimerContext);
    const [timerSplash, setTimerSplash] = useState<string>(DEFAULT_TIMER_SPLASH);

    async function getTimerSplash() {
        const hasTimerSplash = await exists("timer-splash.png", { baseDir: BaseDirectory.AppData });
        if (!hasTimerSplash) return;

        const appDataPath = await appDataDir();
        const imagePath = `file://${appDataPath}/timer-splash.png`;
        setTimerSplash(imagePath);
    }

    useEffect(() => {
        getTimerSplash();
    }, []);

    return (
        <div className="grid grid-cols-6 grid-rows-5 pr-[80px] gap-4 h-full ">
            <div
                className={`col-span-4 row-span-5 bg-cover rounded-[48px] ${styles.timerWrapper} relative`}
                style={{
                    backgroundImage: `url(${timerSplash})`,
                }}
            >
                <div className="z-10 relative leading-[0.7] h-full w-full p-10">
                    <p className="text-white text-[148px] font-black leading-0">{formattedTime()}</p>
                </div>
            </div>
            <div className="col-span-2 row-span-3 p-[30px] rounded-[48px] bg-accent-700">
                <div className="flex items-center gap-2">
                    <p className="text-[32px] font-bold">Drawing</p>
                </div>
            </div>
            <div className="col-span-2 row-span-2 p-[30px] rounded-[48px]">
                <div className="flex items-center gap-2"></div>
            </div>
        </div>
    );
}
