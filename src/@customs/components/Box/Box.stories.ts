import { Box } from './Box';
import {Meta, StoryObj} from "@storybook/react";


const meta = {
	title: 'Example/Box',
	component: Box,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		primary: true,
		label: 'Button',
	},
};