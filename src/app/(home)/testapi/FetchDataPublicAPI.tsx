import React from "react";
import DisplayData from "./DisplayData";
async function getData() {
  const res = await fetch("https://ce.ksu.ac.th/ceteacher/teachers.json.php");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function FetchDataPublicAPI() {
  const dataApi = await getData();
  return <DisplayData data={dataApi} />;
}
