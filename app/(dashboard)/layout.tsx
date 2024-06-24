import { Fragment } from "react";
import MainLayout from "./main-layout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <MainLayout>
        {children}
      </MainLayout>
    </Fragment>
  );
};

export default Layout;