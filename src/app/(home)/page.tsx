"use client";
import { Card } from "@mantine/core";
import ShowTitle from "../components/ShowTitle";
import ReadEmployee from "../components/ReadEmployee";

export default function Home() {
  const titlePage = "หน้าแรก";
  return (
    <>
      <Card>
        <ShowTitle title={titlePage} />
        <ReadEmployee />
      </Card>
    </>
  );
}
