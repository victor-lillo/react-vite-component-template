import styles from './styles.module.css'
import classnames from 'classnames-creator'

interface ComponentProps extends React.HTMLAttributes<HTMLHeadingElement> {
  primary?: boolean
  title: string
}

export function MyTitle({ primary = false, title, ...props }: ComponentProps) {
  const style = classnames(styles.title, {
    [styles['title--primary']]: primary,
  })

  return (
    <h1
      className={style}
      {...props}
    >
      {title}
    </h1>
  )
}
