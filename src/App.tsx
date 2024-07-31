import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import { Button, Flex, Box, Burger, AppShell, Container } from "@mantine/core";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
        color="yellow"
        p={'15px'}
        className="icon"
        
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="lg"
        />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}

export default App;
