import { Pause, Play, X, Square } from "lucide-react";
import { Text } from "@/components/text";
import { Button } from "@/components/button";
import { useContext } from "react";
import { TimerContext } from "@/contexts/timer-context";
import { Combobox } from "@/components/combobox";

export function Timer() {
  const { formattedTime, startTimer, stopTimer, pauseTimer, running } =
    useContext(TimerContext);

  return (
    <section className="flex flex-col h-full">
      <div className="flex flex-col flex-1 items-center justify-center">
        <div className="mb-4">
          <Combobox
            placeholder="Select a category..."
            options={[
              { label: "abc", value: "abc" },
              { label: "def", value: "def" },
              { label: "ghi", value: "ghi" },
              { label: "jkl", value: "jkl" },
            ]}
          />
        </div>
        <Text.H1 className="text-7xl lg:text-8xl">{formattedTime()}</Text.H1>
        <div className="mt-4 flex justify-around items-center gap-4">
          {running && (
            <Button.Root
              variant="destructive"
              size="icon"
              onClick={stopTimer}
              className="rounded-full"
            >
              <X />
            </Button.Root>
          )}
          {running && (
            <Button.Root
              variant="secondary"
              size="icon"
              className="rounded-full w-[60px] h-[60px]"
              onClick={pauseTimer}
            >
              {<Pause />}
            </Button.Root>
          )}
          {!running && (
            <Button.Root
              variant="ghost"
              size="icon"
              className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[60px] h-[60px]"
              onClick={startTimer}
            >
              {<Play />}
            </Button.Root>
          )}
          {running && (
            <Button.Root
              variant="outline"
              size="icon"
              onClick={stopTimer}
              className="rounded-full"
            >
              <Square />
            </Button.Root>
          )}
        </div>
      </div>
    </section>
  );
}
