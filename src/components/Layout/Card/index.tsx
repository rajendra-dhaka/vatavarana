import React from "react";

const index = ({ children }: any) => {
  return (
    <div className="p-2 md:p-4 bg-secondary rounded-xl shadow-lg shadow-slate-400 hover:shadow-primary">
      {children}
    </div>
  );
};

export default index;
