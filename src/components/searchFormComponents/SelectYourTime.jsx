import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ScrollArea } from "../ui/scroll-area";
import { clock } from "../../assets/svg-icons";

const timeOptions = [
  "Midnight",
  "12:30 AM",
  "1:00 AM",
  "1:30 AM",
  "2:00 AM",
  "2:30 AM",
  "3:00 AM",
  "3:30 AM",
  "4:00 AM",
  "4:30 AM",
  "5:00 AM",
  "5:30 AM",
  "6:00 AM",
  "6:30 AM",
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "Noon",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
];

const SelectYourTime = ({ pickUpOrDropOff }) => {
  return (
    <Select defaultValue="10:00 AM">
      <div className="flex w-full flex-col gap-3.5">
        <div className="flex flex-row items-center gap-[0.38rem] dark:text-white200">
          <img src={clock} width={14} height={14} alt="Clock" />
          {pickUpOrDropOff}
        </div>
        <SelectTrigger
          id="timeSelect"
          className="h-[2.875rem] border-0 bg-white200 text-sm font-normal dark:bg-gray800 sm:h-[3.5rem] xl:h-14 xl:pl-[1.13rem] dark:text-white200"
        >
          <SelectValue placeholder="Select your time" />
        </SelectTrigger>
      </div>
      <SelectContent>
        <ScrollArea className="h-[550px]">
          {timeOptions.map((timeOption) => (
            <SelectItem key={timeOption} value={timeOption}>
              {timeOption}
            </SelectItem>
          ))}
        </ScrollArea>
      </SelectContent>
    </Select>
  );
};

export default SelectYourTime;
