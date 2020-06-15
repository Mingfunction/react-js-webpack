import React, { Suspense, lazy } from "react";

const SuspenseCom = (Com) => (props) => {
  return (
    <Suspense fallback={null}>
      <Com {...props} />
    </Suspense>
  );
};

export default [];
