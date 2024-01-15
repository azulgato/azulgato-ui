import { Button } from '../Button/Button'
import { ButtonProps } from '../Button/Button.type'

export const RoundButton = (
  props: Omit<ButtonProps, 'label'> & { icon: React.ReactNode }
) => {
  return <Button {...props} />
}
