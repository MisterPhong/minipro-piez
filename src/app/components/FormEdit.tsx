import {
  Box,
  Button,
  Checkbox,
  Group,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import React, { useEffect } from "react";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import axios from "axios";

export default function FormEditTest({ id }: any) {
  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      address: "",
      salary: "",
      startdate: new Date(),
      dep_id: "",
      pos_id: "",
    },
  });
  const getData = async (empid: number) => {
    const res = await axios.get("http://localhost:3000/api/em/" + empid);
    form.setValues({
      firstname: res.data.data.firstname,
      lastname: res.data.data.lastname,
      gender: res.data.data.gender,
      address: res.data.data.address,
      salary: res.data.data.salary,
      startdate: new Date(res.data.data.startdate),
      dep_id: String(res.data.data.dep_id),
      pos_id: String(res.data.data.pos_id),
    });
  };
  useEffect(() => {
    getData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Box maw={300} mx="auto">
      <form
        onSubmit={form.onSubmit(async (values) => {
          const res = await axios.put("http://localhost:3000/api/em/" + id, {
            firstname: values.firstname,
            lastname: values.lastname,
            gender: values.gender,
            address: values.address,
            salary: Number(values.salary),
            startdate: values.startdate,
            dep_id: Number(values.dep_id),
            pos_id: Number(values.pos_id),
          });
          window.location.replace("/");
        })}
      >
        <TextInput mt={4} label="ชื่อ" {...form.getInputProps("firstname")} />

        <TextInput mt={4} label="นามสกุล" {...form.getInputProps("lastname")} />

        <Select
          mt={4}
          label="เพศ"
          placeholder="Pick one"
          data={[
            { value: "ชาย", label: "ชาย" },
            { value: "หญิง", label: "หญิง" },
          ]}
          {...form.getInputProps("gender")}
        />

        <TextInput mt={4} label="สาขา" {...form.getInputProps("address")} />

        <NumberInput
          mt={4}
          label="เงินเดือน"
          {...form.getInputProps("salary")}
        />
        <DateInput
          mt={4}
          label="วันที่เริ่มงาน"
          placeholder="Date input"
          mx="auto"
          {...form.getInputProps("startdate")}
        />

        <Select
          mt={4}
          label="แผนก"
          placeholder="Pick one"
          data={[
            { value: '1', label: 'การตลาด' },
            { value: '2', label: 'บัญชี' },
            { value: '3', label: 'บริการทั่วไป' },
          ]}
          {...form.getInputProps("dep_id")}
        />
        <Select
          mt={4}
          label="ตำแหน่ง"
          placeholder="Pick one"
          data={[
            { value: '1', label: 'งานทั่วไป' },
            { value: '2', label: 'เจ้าหน้าที่การเงินและบัญชี' },
            { value: '3', label: 'ต้อนรับลูกค้า' },
            { value: '4', label: 'เจ้าหน้าที่การตลาด' },
            { value: '5', label: 'บริการหน้าร้าน' },
          ]}
          {...form.getInputProps("pos_id")}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
