import { useState } from 'react'
import { buttonStyle } from './Button.css'
import { ButtonProps } from './Button.type'

export const Button = (props: ButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean | null>(null)
  const {
    label,
    sizeVariant,
    backgroundVariant,
    className,
    icon,
    paddingVariant = 'm',
    ...rest
  } = props
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
      className={`${buttonStyle({
        size: sizeVariant,
        buttonVariant: backgroundVariant,
        hoveredAnimation: isHovered ?? 'none',
        paddingVariant,
      })} 
        ${className ? className : ''}`}
    >
      {icon}
      {label}
    </button>
  )
}
