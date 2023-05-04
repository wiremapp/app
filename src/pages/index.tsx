import {
  CellsComponent,
  FlowChartComponent,
  ScrollAreaComponent,
} from "@/components";
import { DashPage } from "@/components";

const initArr: Cell[] = [
  {
    id: "1",
    content: "Page 1",
    elements: [
      {
        id: "1",
        content: "Header",
        elements: [{ id: "1", content: "Baby Element 1" }],
      },
      { id: "2", content: "Content" },
      { id: "3", content: "Footer" },
    ],
  },
  {
    id: "2",
    content: "Page 2",
    elements: [
      { id: "5", content: "Header" },
      {
        id: "6",
        content: "Footer",
        elements: [{ id: "7", content: "Baby Element 2" }],
      },
    ],
  },
];

export default function Index({}) {
  return <DashPage />;
}
