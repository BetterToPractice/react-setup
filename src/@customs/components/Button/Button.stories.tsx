import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    children: { control: "text" },
  },
  render: ({ children, ...args }) => (
    <Button {...args}>
      {children || "Button"}
    </Button>
  )
} satisfies Meta<typeof Button>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    children: "Secondary",
  },
};
