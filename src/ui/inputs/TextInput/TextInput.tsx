import { containerStyler, labelStyle, textInputStyle } from './TextInput.css'
import { TextInputProps } from './TextInput.type'

export const TextInput = (props: TextInputProps) => {
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
    <div className={containerStyler}>
      <label
        className={labelStyle({
          colorVariant: backgroundVariant,
        })}
        htmlFor={encodeURIComponent(`${label}`)}
      >
        {label}
      </label>
      <input
        id={encodeURIComponent(`${label}`)}
        {...rest}
        className={`${textInputStyle({
          size: sizeVariant,
          colorVariant: backgroundVariant,
          paddingVariant,
        })} 
        ${className ? className : ''}`}
      />
    </div>
  )
}
