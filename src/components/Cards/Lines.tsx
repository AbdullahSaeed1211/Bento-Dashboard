"use client";
import { ResponsiveLine } from "@nivo/line";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data }: any) => {
  return (
    <ResponsiveLine
      data={data}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="basis"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      lineWidth={6}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
     
    />
  );
};
export default function Lines() {
  const data = [
    {
      id: "japan",
      color: "hsl(156, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 84,
        },
        {
          x: "helicopter",
          y: 122,
        },
        {
          x: "boat",
          y: 256,
        },
        {
          x: "train",
          y: 133,
        },
        {
          x: "subway",
          y: 6,
        },
        {
          x: "bus",
          y: 57,
        },
        {
          x: "car",
          y: 224,
        },
        {
          x: "moto",
          y: 157,
        },
        {
          x: "bicycle",
          y: 169,
        },
        {
          x: "horse",
          y: 273,
        },
        {
          x: "skateboard",
          y: 97,
        },
        {
          x: "others",
          y: 293,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(32, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 27,
        },
        {
          x: "helicopter",
          y: 63,
        },
        {
          x: "boat",
          y: 132,
        },
        {
          x: "train",
          y: 83,
        },
        {
          x: "subway",
          y: 171,
        },
        {
          x: "bus",
          y: 247,
        },
        {
          x: "car",
          y: 257,
        },
        {
          x: "moto",
          y: 220,
        },
        {
          x: "bicycle",
          y: 259,
        },
        {
          x: "horse",
          y: 142,
        },
        {
          x: "skateboard",
          y: 252,
        },
        {
          x: "others",
          y: 217,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(17, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 42,
        },
        {
          x: "helicopter",
          y: 74,
        },
        {
          x: "boat",
          y: 75,
        },
        {
          x: "train",
          y: 119,
        },
        {
          x: "subway",
          y: 245,
        },
        {
          x: "bus",
          y: 85,
        },
        {
          x: "car",
          y: 1,
        },
        {
          x: "moto",
          y: 93,
        },
        {
          x: "bicycle",
          y: 44,
        },
        {
          x: "horse",
          y: 167,
        },
        {
          x: "skateboard",
          y: 289,
        },
        {
          x: "others",
          y: 156,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(355, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 239,
        },
        {
          x: "helicopter",
          y: 287,
        },
        {
          x: "boat",
          y: 235,
        },
        {
          x: "train",
          y: 191,
        },
        {
          x: "subway",
          y: 34,
        },
        {
          x: "bus",
          y: 35,
        },
        {
          x: "car",
          y: 174,
        },
        {
          x: "moto",
          y: 212,
        },
        {
          x: "bicycle",
          y: 44,
        },
        {
          x: "horse",
          y: 294,
        },
        {
          x: "skateboard",
          y: 215,
        },
        {
          x: "others",
          y: 203,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(140, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 162,
        },
        {
          x: "helicopter",
          y: 278,
        },
        {
          x: "boat",
          y: 265,
        },
        {
          x: "train",
          y: 194,
        },
        {
          x: "subway",
          y: 223,
        },
        {
          x: "bus",
          y: 85,
        },
        {
          x: "car",
          y: 100,
        },
        {
          x: "moto",
          y: 285,
        },
        {
          x: "bicycle",
          y: 135,
        },
        {
          x: "horse",
          y: 84,
        },
        {
          x: "skateboard",
          y: 228,
        },
        {
          x: "others",
          y: 60,
        },
      ],
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lines</CardTitle>
        <CardDescription>These are the stats of this year </CardDescription>
      </CardHeader>
      <CardContent className="h-[264px] flex items-center w-full">
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  );
}
