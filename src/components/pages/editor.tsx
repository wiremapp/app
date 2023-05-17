import { useState } from "react";
import { handleAddCell, handleAddElement, handleAddSubElement } from "@/utils";
import {
  LayoutComponent,
  LeftSidebarComponent,
  RightSidebarComponent,
} from "@/components";
import React from "react";

interface Element {
  id: string;
  content: string;
  elements?: Element[];
}

interface Cell {
  id: string;
  content: string;
  elements?: Element[];
}

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
  {
    id: "3",
    content: "Page 3",
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

function calculateBoxWidth(numChildren: number) {
  const minWidth = 64;
  const padding = 32;
  const scaleFactor = 32;
  const width = minWidth + padding + scaleFactor * numChildren;
  return `${width}px`;
}

const Editor = ({ state }) => {
  return (
    <div className="w-full">
      <button
        onClick={() => handleAddCell(state.arr, state.setArr)}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Add Cell
      </button>
      {state.arr.map((cell) => (
        <div
          key={cell.id}
          style={{
            display: "inline-block",
            verticalAlign: "top",
            marginRight: "20px",
            width: calculateBoxWidth(cell.elements?.length || 0),
          }}
        >
          <div className="box bg-gray-200 p-4">
            <h2>{cell.content}</h2>
            <button
              onClick={() =>
                handleAddElement({
                  arr: state.arr,
                  cellId: cell.id,
                  cb: state.setArr,
                })
              }
            >
              Add Element
            </button>
            {cell.elements?.map((element) => (
              <div key={element.id} style={{ marginLeft: "20px" }}>
                <p>{element.content}</p>
                <button
                  onClick={() =>
                    handleAddSubElement({
                      arr: state.arr,
                      cellId: cell.id,
                      elementId: element.id,
                      cb: state.setArr,
                    })
                  }
                >
                  Add Sub-Element
                </button>
                {element.elements?.map((babyElement) => (
                  <div
                    key={babyElement.id}
                    style={{ marginLeft: "20px", color: "gray" }}
                  >
                    <p>{babyElement.content}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Page = ({ router }) => {
  const [arr, setArr] = useState<Cell[]>(initArr);
  return (
    <LayoutComponent
      router={router}
      title={"{projectName}"}
      footer={false}
      navbar={false}
    >
      <div className={"flex min-h-screen w-full"}>
        <LeftSidebarComponent />
        <div className={"flex-1 bg-red-500"}>
          <Editor state={{ arr, setArr }} />
        </div>
        <RightSidebarComponent />
      </div>
    </LayoutComponent>
  );
};

export default Page;
