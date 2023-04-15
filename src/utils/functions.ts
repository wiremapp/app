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
