import { ActionIcon, Button, Divider, Group, Table, Text } from "@mantine/core";
import { IconEdit, IconEditOff, IconTransitionRight, IconTrash, IconTrashOff, IconTrashX } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ModalsProvider, modals } from "@mantine/modals";
import { useRouter } from "next/navigation";
import FormCreate from "./FormCreate";
import FormEditTest from "./FormEdit";

export default function ReadEmployee() {
  const router = useRouter();

  const [employee, setEmployee] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/api/em");
    setEmployee(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(employee);

  const openDeleteModal = (id: number) =>
    modals.openConfirmModal({
      title: "คำเตือน",
      centered: true,
      children: <Text size="sm">จะลบจริงๆเหรอ!</Text>,
      labels: { confirm: "ลบบัญชีนี้", cancel: "ยกเลิก" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: async () => {
        const res = await axios.delete("http://localhost:3000/api/em/" + id);
        getData();
      },
    });

    const rows = employee.map((row: any,index) => (
      <tr key={row.id}>
          <td>{index}</td>
      <td>{row.FullName}</td>
      <td>{row.Phone}</td>
      <td>{row.Gender}</td>
      <td>{row.Occupation}</td>
      <td>{row.Address}</td>
      <td>{row.CheckInDate}</td>
      <td>{row.CheckOutDate}</td>
      <td>{row.Email}</td>
      <td>
        <Group>
          <ActionIcon
            color="green"
            variant="filled"
            onClick={() => {
              modals.open({
                title: "แก้ไขข้อมูลพนักงงาน",
                children: (
                  <>
                    <FormEditTest id={row.id} />
                  </>
                ),
              });
            }}
          >
            <IconEdit size="1.125rem" />
          </ActionIcon>
          <ActionIcon
            color="red"
            variant="filled"
            onClick={() => openDeleteModal(row.id)}
          >
            <IconTrash size="1.125rem" />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <>
      <ModalsProvider labels={{ confirm: "Submit", cancel: "Cancel" }}>
        <Group position="right">
          <Button
            variant="outline"
            compact
            onClick={() => {
              modals.open({
                title: "เพิ่มข้อมูลพนักงาน",
                children: <FormCreate />,
              });
            }}
          >
            Create
          </Button>
        </Group>
        <Divider my={15} />

        <Table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Phone</td>
              <td>Gender</td>
              <td>Occupation</td>
              <td>Address</td>
              <td>CheckInDate</td>
              <td>CheckOutDate</td>
              <td>Email</td>

            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ModalsProvider>
    </>
  );
}
