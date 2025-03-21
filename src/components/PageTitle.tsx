import styles from "./PageTitle.module.css"

interface PageTitleProps {
  title: string
}
export const PageTitle = ({ title }: PageTitleProps) => {
  return <div className={styles.title}>{title}</div>
}
