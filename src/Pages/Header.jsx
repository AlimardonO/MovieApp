import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
const Card = lazy(() => import("../components/Card"));

const Header = () => {
  return (
    <header className="max_width px-4 py-10">
      <h1 className="text-5xl font-bold text-center ">Trending Shows</h1>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
        <Suspense fallback={<Loading />}>
          <Card />
        </Suspense>
      </section>
    </header>
  );
};

export default Header;

const Loading = () => {
  return <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <CircularProgress />
  </div>
}