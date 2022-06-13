import React, { useState } from "react";
import { AppShell, Text, useMantineTheme } from "@mantine/core";

import { HeaderComponent } from "../Header/Header";
import { Footer as FooterComponent } from "../Footer/Footer";
import { NavbarComponent } from "../Navbar/Navbar";

export default function Layout({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          padding: 0,
        },
      }}
      navbarOffsetBreakpoint="lg"
      navbar={opened && <NavbarComponent />}
      footer={<FooterComponent />}
      header={<HeaderComponent handleToggle={(e) => setOpened(e)} />}
    >
      {children}
    </AppShell>
  );
}
