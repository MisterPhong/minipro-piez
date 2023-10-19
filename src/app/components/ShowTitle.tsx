"use client";
import { Title } from "@mantine/core";
import React from "react";

export default function ShowTitle({ title }: any) {
  return (
    <Title
      variant="gradient"
      gradient={{ from: "indigo", to: "green", deg: 45 }}
      ta="center"
      fz="xl"
      fw={700}
      order={4}
      underline
      color="blue.5"
    >
      {title}
    </Title>
  );
}
