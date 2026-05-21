import { ErrorComponent, Loading, NotFound, ThemeToggoler } from "@/layouts";
import Providers from "@/providers";
import { Button } from "@mantine/core";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
  pendingComponent: () => <Loading />,
  errorComponent: ({ error }: { error: unknown }) => <ErrorComponent error={error} />,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Providers>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
            borderBottom: "1px solid var(--mantine-color-default-border)",
          }}
        >
          <Button component={Link} to="/">
            Home
          </Button>
          <ThemeToggoler />
        </header>
        <main style={{ padding: "1rem" }}>
          <Outlet />
        </main>
      </Providers>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
