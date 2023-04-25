import React from "react";
import "./Table.styles.css";
const T = ({ children }) => {
  return (
    <table className="w-full overflow-scroll rounded table-auto">
      {children}
    </table>
  );
};

const Tr = ({ children }) => {
  return <tr className="p-2">{children}</tr>;
};

const Th = ({ children, onClick }) => {
  return (
    <th className="cursor-pointer" onClick={onClick}>
      <div className="flex p-3">{children}</div>
    </th>
  );
};

const Td = ({ children }) => {
  return (
    <td>
      <div className="p-3">{children}</div>
    </td>
  );
};

const Table = {
  T,
  Tr,
  Th,
  Td,
};

export default Table;
