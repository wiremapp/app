type flowBabyElement = {
  id: string;
  parentId?: string;
  content: string;
};

type flowElement = {
  id: string;
  parentId?: string;
  content: string;
  elements?: flowBabyElement[];
};

type Cell = {
  id: string;
  parentId?: string | "root";
  sectionId?: string;
  content: string;
  elements?: flowElement[];
};
