"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ResponsivePie } from '@nivo/pie'
const MyResponsivePie = ({ data /* see data tab */ }: any) => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default function Pie() {
    const data = [
        {
          "id": "ruby",
          "label": "ruby",
          "value": 598,
          "color": "hsl(135, 70%, 50%)"
        },
        {
          "id": "hack",
          "label": "hack",
          "value": 117,
          "color": "hsl(73, 70%, 50%)"
        },
        {
          "id": "stylus",
          "label": "stylus",
          "value": 518,
          "color": "hsl(119, 70%, 50%)"
        },
        {
          "id": "make",
          "label": "make",
          "value": 531,
          "color": "hsl(239, 70%, 50%)"
        },
        {
          "id": "scala",
          "label": "scala",
          "value": 317,
          "color": "hsl(45, 70%, 50%)"
        }
      ]
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pie</CardTitle>
        <CardDescription>These is a Pie of this year </CardDescription>
      </CardHeader>
      <CardContent className="h-[264px] flex items-center w-full">
        <MyResponsivePie data={data} />
      </CardContent>
    </Card>
  );
}
