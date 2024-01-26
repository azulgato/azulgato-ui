import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: (props: import("./TextInput.type").TextInputProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        label: {
            defaultValue: string;
        };
        paddingVariant: {
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
