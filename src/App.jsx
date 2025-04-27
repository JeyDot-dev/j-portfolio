import { React, useEffect, useMemo, useState } from "react";
import "./App.css";
import {
  Input,
  Avatar,
  Button,
  Card,
  HStack,
  Alert,
  VStack,
  Field,
} from "@chakra-ui/react";
import { Accordion, Span } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
import { Provider } from "./components/ui/provider";
import { mortuum } from "./themes/mortuum";
import { glaucous } from "./themes/glaucous";
import { useArray } from "./components/hooks/useArray";

const themes = [glaucous, mortuum];

function App() {
  const [theme, chooseTheme] = useArray(themes);
  return (
    <Provider theme={theme}>
      <VStack>
        {/* Navbar */}
        <Button
          onClick={() => {
            chooseTheme({ type: "next" });
          }}
        >
          Next Theme
        </Button>
        <nav>
          <h1>My Theme Test</h1>
          <ColorModeButton>CLICK</ColorModeButton>
          <Button>Action</Button>
        </nav>
        {/* Accordion */}
        <Accordion.Root collapsible defaultValue={["b"]}>
          {items.map((item, index) => (
            <Accordion.Item key={index} value={item.value}>
              <Accordion.ItemTrigger>
                <Span flex="1">{item.title}</Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        {/* Buttons */}
        <HStack wrap="wrap" gap="6">
          <Button variant="solid">Solid</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="surface">Surface</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="plain">Plain</Button>
        </HStack>
        {/* Inputs */}
        {/* Alert */}
        <Alert.Root status="info" title="This is the alert title">
          <Alert.Indicator />
          <Alert.Title>This is the alert title</Alert.Title>
        </Alert.Root>
        <div>
          <input type="text" placeholder="Text Input" />
          <Input placeholder="Enter your email" />
          <Field.Root invalid>
            <Field.Label>Email</Field.Label>
            <Input placeholder="Enter your email" />
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>
        </div>
        {/* Card */}
        <Card.Root width="320px">
          <Card.Body gap="2">
            <Avatar.Root size="lg" shape="rounded">
              <Avatar.Image src="https://picsum.photos/200/300" />
              <Avatar.Fallback name="Nue Camp" />
            </Avatar.Root>
            <Card.Title mt="2">Nue Camp</Card.Title>
            <Card.Description>
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
              Curabitur nec odio vel dui euismod fermentum.
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline">View</Button>
            <Button>Join</Button>
          </Card.Footer>
        </Card.Root>
        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Myuu-chan</td>
              <td>Chaos Generator</td>
              <td>💖 Active</td>
            </tr>
            <tr>
              <td>Nyx-chan</td>
              <td>Order Keeper</td>
              <td>✨ Observing</td>
            </tr>
          </tbody>
        </table>
        {/* Footer */}
        <footer>
          <p>© 2025 Johan&MyuuNyx Theme Playground</p>
        </footer>
      </VStack>
    </Provider>
  );
}

export default App;

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
];
