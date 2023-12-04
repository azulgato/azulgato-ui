import { buttonStyle } from './Button.css'
import { ButtonProps } from './Button.type'

export const Button = (props: ButtonProps) => {
  const { label, sizeVariant, backgroundVariant, className } = props
  return (
    <button
      {...props}
      className={`${buttonStyle({
        size: sizeVariant,
        buttonVariant: backgroundVariant,
      })} 
        ${className ? className : ''}`}
      children={label}
    />
  )
}
