import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import HeadData from "../Head";
import { Work_Sans } from "@next/font/google";
import { useState } from "react";

import style from "../../styles/components/DashboardLayout.module.scss";

const workSans = Work_Sans({
  variable: "--workSans-font",
});

interface IDashboardLoayout {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLoayout> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className={workSans.className}>
      <HeadData />
      <main>
        <DashboardHeader sidebarHandler={setShowSidebar} />
        <DashboardSidebar showSidebar={showSidebar} />
      </main>
      <div className={style.pageContent}>{children}</div>
    </div>
  );
};
export default DashboardLayout;
