import React, { useEffect, useState } from "react";

type Box = {
  id: number;
  numChildren: number;
  width: string;
};

export const Flowchart = () => {
  const [boxes, setBoxes] = useState<Box[]>([
    { id: 1, numChildren: 2, width: '' },
    { id: 2, numChildren: 1, width: '' },
    { id: 3, numChildren: 3, width: '' },
  ]);

  useEffect(() => {
    const updatedBoxes = boxes.map((box) => ({
      ...box,
      width: `${150 + box.numChildren * 50}px`,
    }));
    setBoxes(updatedBoxes);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="box bg-gray-200 p-4"
            style={{ width: box.width }}
          >
            Box {box.id}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {Array.from({ length: box.numChildren }, (_, i) => (
                <div key={i} className="child bg-gray-300 p-2">
                  Child {i + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Flowchart;
