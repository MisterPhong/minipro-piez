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
      FullName: "",
      Phone: "",
      Gender: "",
      Occupation: "",
      Address: "",
      CheckInDate: "",
      CheckOutDate: "",
      Email: "",
    },
  });
  const getData = async (empid: number) => {
    const res = await axios.get("http://localhost:3000/api/em/" + empid);
    form.setValues({
      FullName: res.data.data.FullName,
      Phone: res.data.data.Phone,
      Gender: res.data.data.Gender,
      Occupation: res.data.data.Occupation,
      Address: res.data.data.Address,
      CheckInDate: res.data.data.CheckInDate,
      CheckOutDate: res.data.data.CheckOutDate,
      Email: String(res.data.data.Email),
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
            FullName: values.FullName,
            Phone: values.Phone,
            Gender: values.Gender,
            Occupation: values.Occupation,
            Address: values.Address,
            CheckInDate: values.CheckInDate,
            CheckOutDate: values.CheckOutDate,
            Email: values.Email,
          });
          window.location.replace("/");
        })}
      >
        <TextInput mt={4} label="Name" {...form.getInputProps("FullName")} />

<TextInput mt={4} label="Phone" {...form.getInputProps("Phone")} />

<Select
  mt={4}
  label="เพศ"
  placeholder="Pick one"
  data={[
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ]}
  {...form.getInputProps("Gender")}
/>

<TextInput mt={4} label="Occupation" {...form.getInputProps("Occupation")} />

<TextInput mt={4} label="Address" {...form.getInputProps("Address")} />

<TextInput mt={4} label="CheckInDate" {...form.getInputProps("CheckInDate")} />

<TextInput mt={4} label="CheckOutDate" {...form.getInputProps("CheckOutDate")} />


<TextInput mt={4} label="Email" {...form.getInputProps("Email")} />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
