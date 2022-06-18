import React from "react";
import { Pagination } from "@mantine/core";

const Paginator = ({ activePage, onChange, totalPages }) => {
  return (
    <Pagination
      style={{
        justifyContent: "center",
        margin: "20px 0",
      }}
      color="yellow"
      page={activePage}
      onChange={onChange}
      total={totalPages}
    />
  );
};

export default Paginator;
