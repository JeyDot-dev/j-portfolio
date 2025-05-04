import { useEffect, useRef, useState } from "react";
import { Section } from "../layout/Section";
import emailjs from "@emailjs/browser";
import {
  Field,
  Input,
  Box,
  Button,
  Textarea,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import { toaster } from "../chakra/toaster";
import * as Yup from "yup";
import { useContentContext } from "../context/contentProvider";

const schema = Yup.object({
  name: Yup.string().required("Name is required."),

  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),

  message: Yup.string()
    .min(3, "Message must be at least 3 characters long.")
    .required("Please write a message."),

  honey: Yup.string().test(
    "honey-test",
    "Why would you try this..",
    (val) => val === undefined || val === "",
  ),
});

export function ContactMeSection({ ...props }) {
  const { language, content } = useContentContext();
  const formRef = useRef();
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      blockHeadless: true,
      blockList: {
        list: [],
        watchVariable: "",
      },
      limitRate: {
        id: "app",
        throttle: 12000,
      },
    });
  }, []);
  const [canSubmit, setCanSubmit] = useState("yes");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit !== "yes") return;
    setCanSubmit("no");
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    console.log("Before validation: ", data);
    schema
      .validate(data, { abortEarly: false })
      .then((data) => {
        console.log("YAY: ", data);
        return emailjs.send("default_service", "template_2jyfok3", data);
      })
      .then(() => {
        toaster.create({
          title: `Email sent successfully !`,
          type: "success",
        });
        setCanSubmit("cooldown");
        setTimeout(() => setCanSubmit("yes"), 10000);
      })
      .catch((error) => {
        if (error.name === "ValidationError") {
          toaster.create({
            title: `Validation errors: ${error.errors}`,
            type: "error",
          });
        } else {
          if (error.name === "ValidationError") {
            toaster.create({
              title: `Error sending email: ${error}`,
              type: "error",
            });
          }
        }
        setCanSubmit("yes");
      });
  };

  return (
    <Section {...props}>
      <Heading textAlign="center" mb="10rem">
        {content.contact.text[language]}
      </Heading>
      <Box
        as="form"
        mt="auto"
        display="flex"
        flexDirection="column"
        ref={formRef}
        onSubmit={handleSubmit}
        gap="5"
        w="75vw"
        maxW="70rem"
        mx="auto"
      >
        <Box
          display="flex"
          // gap={{ base: "5", sm: "5" }}
          gap="5"
          flexDirection={{ base: "column", sm: "row" }}
          justify="center"
        >
          <Field.Root id="name-field" required>
            <Field.Label>{content.contact.name[language]}</Field.Label>
            <Input name="name" placeholder="John Titor" autoComplete="on" />
          </Field.Root>

          <Field.Root required>
            <Field.Label>Email</Field.Label>
            <Input
              name="email"
              placeholder={content.contact.emailLabel[language]}
              type="email"
              autoComplete="on"
              required
            />
          </Field.Root>
        </Box>

        <Field.Root required>
          <Field.Label>Message</Field.Label>
          <Textarea
            name="message"
            minLength="3"
            placeholder={content.contact.messageLabel[language]}
            size="lg"
            autoresize
            required
          ></Textarea>
        </Field.Root>

        <input
          type="text"
          name="honey"
          style={{ display: "none" }}
          autoComplete="off"
        />
        <Button type="submit" disabled={canSubmit !== "yes"} variant="ghost">
          {canSubmit === "no" ? (
            <Spinner />
          ) : canSubmit === "cooldown" ? (
            "cooldown"
          ) : (
            "Submit"
          )}
        </Button>
      </Box>
    </Section>
  );
}
