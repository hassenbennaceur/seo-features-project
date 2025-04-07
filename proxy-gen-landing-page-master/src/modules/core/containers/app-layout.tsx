import React, { FC, PropsWithChildren, ReactNode } from "react";
import AppHeader from "@/modules/core/widgets/app-header";
import AppFooter from "@/modules/core/widgets/app-footer";
import { Classes } from "@/modules/core/types/classes.types";

type AppLayoutProps = {
  showFooter?: boolean;
  showHeader?: boolean;
  customHeader?: ReactNode;
  classes?: Classes<"header" | "footer" | "container" | "content">;
};
const AppLayout: FC<PropsWithChildren & AppLayoutProps> = ({
  children,
  customHeader,
  showHeader = true,
  showFooter = true,
}) => {
  return (
    <>
     {/*  {showHeader && (customHeader || <AppHeader />)}*/} 
      <main>{children}</main>
     {/*  {showFooter && <AppFooter />} */} 
    </>
  );
};

export default AppLayout;
