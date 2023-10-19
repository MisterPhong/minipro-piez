"use client";
import { Avatar, Card, Text, createStyles, Group } from "@mantine/core";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";
import React from "react";

export default function DisplayData(data: any) {
  console.log(data);
  const listJson = JSON.stringify(data);
  const lists = data.data.map((item: any) => (
    <div key={item.id}>
      <Group>
        <Avatar src={item.avatar} size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {item.room}
          </Text>

          <Text fz="lg" fw={500}>
            {item.nameth}
          </Text>
          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              {item.email}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  ));
  return (
    <>
      <Card>
        {listJson}
        {lists}
      </Card>
    </>
  );
}
