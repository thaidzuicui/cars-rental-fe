import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-slate-500 rounded-md w-9 font-normal text-[0.8rem] dark:text-slate-400",
        row: "flex w-full mt-2 rounded-md",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-[0.625rem] last:[&:has([aria-selected])]:rounded-r-[0.625rem] focus-within:relative focus-within:z-20 dark:[&:has([aria-selected])]:bg-slate-800",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected:
          "bg-blue500 text-slate-50 hover:opacity-80 dark:hover:opacity-80 focus:bg-blue500 focus:text-slate-50 dark:bg-blue500 dark:text-slate-900 dark:focus:bg-blue500 dark:focus:text-slate-900",
        day_today:
          "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50",
        day_outside: "text-slate-500 opacity-50 dark:text-slate-400",
        day_disabled: "text-slate-500 opacity-50 dark:text-slate-400",
        day_range_middle:
          "aria-selected:bg-slate-100 aria-selected:text-slate-900 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: (props) => <ChevronLeft className="size-4" {...props} />,
        IconRight: (props) => <ChevronRight className="size-4" {...props} />,
      }}
      {...props}
    />
  );
};
Calendar.displayName = "Calendar";

export { Calendar };
