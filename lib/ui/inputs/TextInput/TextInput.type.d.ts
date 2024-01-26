/// <reference types="react" />
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    backgroundVariant?: 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'danger' | 'warning' | 'success' | 'info';
    sizeVariant?: 's' | 'm' | 'l';
    label?: string;
    icon?: React.ReactNode;
    paddingVariant?: 's' | 'm' | 'l' | 'none';
}
