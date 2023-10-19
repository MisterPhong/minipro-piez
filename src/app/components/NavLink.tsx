import { useState } from "react";
import {
  IconGauge,
  IconFingerprint,
  IconActivity,
  IconChevronRight,
} from "@tabler/icons-react";
import { Box, NavLink } from "@mantine/core";

const data = [
  {
    icon: IconGauge,
    link: "./analytics",
    label: "Dashboard",
    description: "Item with description",
  },
  {
    icon: IconFingerprint,
    label: "Security",

    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconActivity, label: "Activity" },
];

export default function MyNavLink() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ));

  return <Box w={220}>{items}</Box>;
}
