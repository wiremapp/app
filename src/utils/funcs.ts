import axios from "axios";

export async function fetchPostJSON(url: string, data?: {}) {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    throw new Error(err.message);
  }
}

export const handleAddCell = (arr: any[], cb: (arg0: any) => void) => {
  const newCell: Cell = { id: Date.now().toString(), content: `New cell` };
  cb([...arr, newCell]);
};

export const calculateBoxWidth = (numChildren: number) => {
  const minWidth = 64;
  const padding = 32;
  const scaleFactor = 32;
  const width = minWidth + padding + scaleFactor * numChildren;
  return `${width}px`;
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
              : element,
          ),
        }
      : cell,
  );
  cb(newFlowChart);
};

export function validateEmail(email: string): boolean {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return expression.test(email);
}

export const handleAddSubElement = ({
  arr,
  cellId,
  elementId,
  cb,
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
              : element,
          ),
        }
      : cell,
  );
  cb(newFlowChart);
};

export const fetchProjects = async () => {
  const { data: results } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/project`,
  );

  return {
    ...results,
  };
};

export const formatProjects = async (projects) => {
  return projects.map((project) => {
    const result = {
      id: project.associationId,
      name: atob(project.name),
    };
    return result;
  });
};

export const validateProject = async (id) => {
  const { data: project } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/project`,
    { id },
  );

  if (!project.length) return false;
  return project[0];
};

export const handleCreateProj = async (name) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/project`,
    {name}
  );

  return data;
};
