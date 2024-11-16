import {
  createContext,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

type TimerState = {
  timer: number;
  running: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  stopTimer: () => void;
  formattedTime: () => string;
};

const initialState: TimerState = {
  timer: 0,
  running: false,
  startTimer: () => {},
  pauseTimer: () => {},
  stopTimer: () => {},
  formattedTime: () => "",
};

export const TimerContext = createContext<TimerState>(initialState);

export function TimerProvider({ children }: PropsWithChildren) {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function startTimer() {
    if (!running) setRunning(true);
  }

  function pauseTimer() {
    if (running) setRunning(false);
  }

  function stopTimer() {
    if (!running) return;
    setRunning(false);
    setTimer(0);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function formattedTime() {
    const secondsInMinute = 60;
    const secondsInHour = secondsInMinute * 60;

    const hours = `0${Math.floor(timer / secondsInHour)}`.slice(-2);
    const minutes = `0${Math.floor(timer / 60) % 60}`.slice(-2);
    const seconds = `0${timer % 60}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    if (!running) return;

    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  return (
    <TimerContext.Provider
      value={{
        timer,
        running,
        startTimer,
        pauseTimer,
        stopTimer,
        formattedTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
