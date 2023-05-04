export const getDefaultStaticTitle = (title?: string) => {
  return title ? title : "Unnamed Page";
};

export const getStaticTitleEnd = () => {
  return process.env.NEXT_PUBLIC_STATIC_TITLE
    ? " — " + process.env.NEXT_PUBLIC_STATIC_TITLE
    : "";
};

export const classesJoin = (...args: any) => {
  return args
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== "boolean")
    .join(" ");
};

export const handleAddCell = (arr: any[], cb : (arg0: any) => void) => {
  const newCell: Cell = { id: Date.now().toString(), content: `New cell` };
  cb([...arr, newCell]);
};

export const handleAddElement = ({
  arr,
  cellId,
  elementId,
  cb,
}: {
  arr: any[];
  cellId: string;
  elementId?: string;
  cb: (arg0: any[]) => void;
}) => {
  const newElement: flowElement = {
    id: Date.now().toString(),
    parentId: elementId,
    content: `New element in cell ${cellId}`,
  };
  const newFlowChart = arr.map((cell) =>
    cell.id === cellId
      ? {
          ...cell,
          elements: cell.elements
            ? [...cell.elements, newElement]
            : [newElement],
        }
      : elementId && cell.elements
      ? {
          ...cell,
          elements: cell.elements.map((element) =>
            element.id === elementId
              ? {
                  ...element,
                  elements: element.elements
                    ? [...element.elements, newElement]
                    : [newElement],
                }
              : element
          ),
        }
      : cell
  );
  cb(newFlowChart);
};

export const handleAddSubElement = ({
  arr,
  cellId,
  elementId,
  cb
}: {
  arr: any[];
  cellId: string;
  elementId: string;
  cb: (arg0: any[]) => void;
}) => {
  const newElement: flowBabyElement = {
    id: Date.now().toString(),
    parentId: elementId,
    content: `New sub-element in element ${elementId}`,
  };
  const newFlowChart = arr.map((cell) =>
    cell.id === cellId
      ? {
          ...cell,
          elements: cell.elements?.map((element) =>
            element.id === elementId
              ? {
                  ...element,
                  elements: element.elements
                    ? [...element.elements, newElement]
                    : [newElement],
                }
              : element
          ),
        }
      : cell
  );
  cb(newFlowChart);
};
