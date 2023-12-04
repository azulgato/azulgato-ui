export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  backgroundVariant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'disabled'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
  sizeVariant?: 's' | 'm' | 'l'
  label: string
}
