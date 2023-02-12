import { ReactNode } from "react";

const LayoutContainer = ({ children }: { children: ReactNode }) => (
  <main className="p-2 h-screen bg-slate-200">{children}</main>
);

export default LayoutContainer;
