import { ErrorComponent, Loading, NotFound, ThemeToggoler } from "@/layouts";
import Providers from "@/providers";
import { Button, Group } from "@mantine/core";
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
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
            borderBottom: "1px solid var(--mantine-color-default-border)",
          }}
        >
          <Group>
            <Button component={Link} to="/">
              Home
            </Button>
            <Button component={Link} to="/animated-punk-icon">
              Animated Punk Icon
            </Button>
          </Group>
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
