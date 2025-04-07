export type ClassName = {
  className?: string;
};

export type Classes<T extends string> = Partial<Record<T, string>>;
