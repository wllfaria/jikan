import { Pause, Play, StopCircle } from "lucide-react";
import { Text } from "@/components/text";
import { Button } from "@/components/button";
import { useContext } from "react";
import { TimerContext } from "@/contexts/timer-context";
import { Select } from "@/components/select";

export function Timer() {
  const { formattedTime, startTimer, stopTimer, pauseTimer, running } =
    useContext(TimerContext);

  function categoryChanged(value: string): void {
    // TODO: this does nothing. lol
    console.log(value);
  }

  return (
    <section>
      <div className="flex flex-col flex-1 items-center">
        <div className="mb-4">
          <Select.Root onValueChange={categoryChanged}>
            <Select.Trigger>Category</Select.Trigger>
            <Select.Options
              options={[
                { label: "abc", value: "abc" },
                { label: "def", value: "def" },
                { label: "ghi", value: "ghi" },
                { label: "jkl", value: "jkl" },
              ]}
            />
          </Select.Root>
        </div>
        <Text.H1>{formattedTime()}</Text.H1>
        <div className="mt-4 flex gap-2">
          <Button.Root
            variant="outline"
            size="icon"
            onClick={running ? stopTimer : startTimer}
          >
            {running ? <StopCircle /> : <Play />}
          </Button.Root>
          {running && (
            <Button.Root variant="outline" size="icon" onClick={pauseTimer}>
              <Pause />
            </Button.Root>
          )}
        </div>
      </div>
    </section>
  );
}
