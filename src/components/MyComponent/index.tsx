import styles from './styles.module.css'

export function MyComponent(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props
  return <button className={`${className} ${styles.button}`} {...rest} />
}
