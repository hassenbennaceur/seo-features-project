declare module "*.svg?icon" {
  import type { FC, SVGAttributes } from "react";

  const content: FC<SVGAttributes<SVGElement>>;

  export default content;
}
declare module "*.svg?url" {
  const content: string;

  export default content;
}
