import AnimatedPunkSvgIcon from "@/routes/(main)/animated-punk-icon/-components/AnimatedPunkSvgIcon";
import { Box } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/animated-punk-icon/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Box className="flex h-[calc(100vh-2rem)] w-full items-center justify-center">
      <AnimatedPunkSvgIcon />
    </Box>
  );
}
