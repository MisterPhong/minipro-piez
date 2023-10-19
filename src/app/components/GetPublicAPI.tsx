import { Table } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GetPublicAPI() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(
      "https://api.coinstats.app/public/v1/markets?coinId=bitcoin"
    );
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  const rows = data.map((row: any) => (
    <tr key={row.price}>
      <td>{row.pair}</td>
      <td>{row.volume}</td>
      <td>{row.exchange}</td>
    </tr>
  ));
  return (
    <>
      <Table>
        <thead>
          <tr>
            <td>pair</td>
            <td>volume</td>
            <td>exchange</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
}
