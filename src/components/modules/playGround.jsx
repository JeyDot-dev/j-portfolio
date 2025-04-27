import {
  VStack,
  Accordion,
  HStack,
  Alert,
  Card,
  Avatar,
  Button,
  Span,
  Input,
  Field,
} from "@chakra-ui/react";
import { ColorModeButton } from "../chakra/color-mode";

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
];

export function PlayGround() {
  return (
    <VStack>
      <ColorModeButton>CLICK</ColorModeButton>
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
      {/* Alert */}
      <Alert.Root status="info" title="This is the alert title">
        <Alert.Indicator />
        <Alert.Title>This is the alert title</Alert.Title>
      </Alert.Root>
      {/* Inputs */}
      <HStack w="65vw" minW="96">
        <Input placeholder="Enter your email" />
        <Field.Root invalid>
          <Field.Label>Email</Field.Label>
          <Input placeholder="Enter your email" />
          <Field.ErrorText>This field is required</Field.ErrorText>
        </Field.Root>
      </HStack>
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
      <footer>
        <p>© 2025 Johan Theme Playground</p>
      </footer>
    </VStack>
  );
}
