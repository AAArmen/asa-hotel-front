import React, { FC } from "react";
import { ILayoutProps } from "./Layout.type";
import styles from "./Layout.module.scss";
import Header from "@/components/header";

const Layout: FC<ILayoutProps> = ({ children, layoutInfo }) => {


  return (
    <>
      <Header layoutInfo={layoutInfo} styles={styles} />
      {children}
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
