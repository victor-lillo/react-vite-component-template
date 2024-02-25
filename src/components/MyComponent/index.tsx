import styles from './styles.module.css'
import classnames from 'classnames-creator'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export function MyComponent({ primary = false, size = 'medium', label, ...props }: ButtonProps) {
  const style = classnames(styles.button, {
    [styles['button--primary']]: primary,
    [styles[`button--${size}`]]: size,
  })

  return (
    <button
      type='button'
      className={style}
      {...props}
    >
      {label}
    </button>
  )
}
