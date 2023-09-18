'use client';

import { Dropdown } from 'flowbite-react';

export default function DropdownR() {
  return (
    <Dropdown
      label="Dropdown button"
    >
      <Item>
        Dashboard
      </Item>
      <Item>
        Settings
      </Item>
      <Item>
        Earnings
      </Item>
      <Item>
        Sign out
      </Item>
    </Dropdown>
  )
}


