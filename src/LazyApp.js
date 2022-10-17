import React, { Suspense } from "react";

const LazyApp = React.lazy(() => import("./App"));

const Loading = (
  <div
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}
  >
    <div style={{ width: "240px", marginTop: "auto" }}>Loading...</div>
  </div>
);

export default () => {
  return (
    <Suspense fallback={Loading}>
      <LazyApp />
    </Suspense>
  );
};
