import Image from "next/image";
import General from "@/components/Cards/General";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Calendar from "@/components/Cards/Calendar";
import Lines from "@/components/Cards/Lines";
import { TableDemo } from "@/components/Cards/Table";
import { DataTableDemo } from "@/components/Cards/DataTable";
import Pie from "@/components/Cards/Pie";
export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid lg:grid-cols-2 gap-[32px]">
        <Pie />
        <div className="grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[600px] overflow-y-hidden ">
          <Lines />
        <Card className="p-[32px]">
        <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>These are the orders of this year </CardDescription>
      </CardHeader>
          <TableDemo/></Card>
        <Card className="p-[32px]">
        <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>These are the users of this year </CardDescription>
      </CardHeader>
          <DataTableDemo/></Card>
      </div>
    </div>
  );
}
