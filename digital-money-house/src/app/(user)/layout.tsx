import "../globals.css";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import { FC, PropsWithChildren } from "react";
import { Sidebar } from "../components/layout/sidebar/Sidebar";

const UserLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className="user-body">
        <Header classnames="bg-colorGrey-var1 text-white" />
        <div className="flex">
          <Sidebar />
          <main className="w-[100%] px-[20px] pt-[20px] pb-[40px] lg:px-[50px] lg:py-[60px] xl:px-[80px] xl:py-[40px]">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default UserLayout;
