import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Tooltip } from "@mantine/core";
import { Icon } from "@/components/icons";

const ThemeToggoler = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

  const isDark = computedColorScheme === "dark";

  return (
    <Tooltip label={`Switch to ${isDark ? "light" : "dark"} mode`} position="bottom" withArrow>
      <ActionIcon
        onClick={() => setColorScheme(isDark ? "light" : "dark")}
        variant="subtle"
        size="lg"
        radius="xl"
        color={isDark ? "yellow" : "indigo"}
        className="relative overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          border: "1px solid var(--mantine-color-default-border)",
          backgroundColor: "var(--mantine-color-default)",
        }}
      >
        <div className="relative h-6 w-6">
          {/* Sun icon for dark mode */}
          <div
            className={`absolute inset-0 flex transform items-center justify-center transition-all duration-500 ${
              isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
            }`}
          >
            <Icon
              icon="lucide:sun"
              style={{ fontSize: "1.3rem", color: "var(--mantine-color-yellow-4)" }}
            />
          </div>

          {/* Moon icon for light mode */}
          <div
            className={`absolute inset-0 flex transform items-center justify-center transition-all duration-500 ${
              isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <Icon
              icon="lucide:moon"
              style={{ fontSize: "1.3rem", color: "var(--mantine-color-indigo-6)" }}
            />
          </div>
        </div>
      </ActionIcon>
    </Tooltip>
  );
};

export default ThemeToggoler;
