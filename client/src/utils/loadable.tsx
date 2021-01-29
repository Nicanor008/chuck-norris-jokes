import React, { lazy, Suspense } from 'react';

const Loadable = (importFunc: { (): Promise<typeof import("../pages/homepage")>; (): Promise<{ default: React.ComponentType<any>; }>; }, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default Loadable;
