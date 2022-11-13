import { Outlet } from "@remix-run/react";

export default function BeersLayout() {
  return (
    <main>
      <h1>beers layout</h1>
      <Outlet />
    </main>
  );
}
