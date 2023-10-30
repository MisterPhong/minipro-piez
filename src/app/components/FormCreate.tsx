import {
  Box,
  Button,
  Checkbox,
  Group,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import React from "react";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import axios from "axios";

export default function FormCreate() {
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
          termsOfService: false,
      },

  });
  return (
    <Box maw={300} mx="auto">
      <form
        onSubmit={form.onSubmit(async (values) => {
          try{
            const res = await axios.post("http://localhost:3000/api/em", {
              FullName: values.FullName,
              Phone: values.Phone,
              Gender: values.Gender,
              Occupation: values.Occupation,
              Address: values.Address,
              CheckInDate: values.CheckInDate,
              CheckOutDate: values.CheckOutDate,
              Email: values.Email,
            })
            window.location.reload();
        } catch (error) {
            // Handle the error, e.g., display an error message to the user
            console.error(error);
        }
    })}> 



        <TextInput withAsterisk mt={4} label="Name" {...form.getInputProps("FullName")} />

        <TextInput withAsterisk mt={4} label="Phone" {...form.getInputProps("Phone")} />

        <Select
        withAsterisk
          mt={4}
          label="เพศ"
          placeholder="Pick one"
          data={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          {...form.getInputProps("Gender")}
        />

        <TextInput withAsterisk mt={4} label="Occupation" {...form.getInputProps("Occupation")} />

        <TextInput withAsterisk  mt={4} label="Address" {...form.getInputProps("Address")} />

        <TextInput withAsterisk mt={4} label="CheckInDate" {...form.getInputProps("CheckInDate")} />

        <TextInput withAsterisk mt={4} label="CheckOutDate" {...form.getInputProps("CheckOutDate")} />

        <TextInput withAsterisk mt={4} label="Email" {...form.getInputProps("Email")} />


        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
