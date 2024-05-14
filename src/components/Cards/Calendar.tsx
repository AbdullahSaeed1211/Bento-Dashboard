"use client";
import { ResponsiveTimeRange } from "@nivo/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { format } from "path";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveTimeRange = ({data}: any) => {
  return (
    <ResponsiveTimeRange
      data={data}
      from="2023-01-01"
      to="2023-12-12"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      dayBorderWidth={2}
      dayBorderColor="#ffffff" 
     
     />
  );
};
export default function Calendar() {

    function generateDataForYear2023() {
        const data = [];
        let startDate = new Date("2023-01-01");
        const endDate = new Date("2023-12-31");
    
        while (startDate <= endDate) {
          const value = Math.floor(Math.random() * 301); //random value between 0 and 300
          const formattedDate = startDate.toISOString().slice(0, 10); // Format the date
          data.push({
            value: value,
            day: formattedDate,
          });
          startDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000); // increment the date by 1 day
        }
        return data;
      }
    
      const dataArray = generateDataForYear2023();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>These are the numbers of this year </CardDescription>
      </CardHeader>
      <CardContent className="h-[100px] flex items-center w-full">
        <MyResponsiveTimeRange data={dataArray} />
      </CardContent>
    </Card>
  );
}
