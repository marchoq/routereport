import { MapWithRoute } from "@/features/route-report/components/MapWithRoute"
import styles from "./App.module.css"
import { Logo } from "@/components/Logo"
import { PageTitle } from "@/components/PageTitle"
import { DatePicker } from "@/components/DatePicker"
import { Details } from "@/features/route-report/components/Details"
import { Button } from "@/components/Button"
import { CarSelect } from "@/features/route-report/components/CarSelect"

export default function App() {
  const start = { lat: 29.5, lng: -81.2 }
  const end = { lat: 29.5, lng: -81.21 }

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.form}>
        <div className={styles.formSection}>
          <PageTitle title="Route report" />
          <div className={styles.vehicleContainer}>
            <p>Vehicle number</p>
            <div>
              <CarSelect />
            </div>
          </div>
          <div className={styles.periodContainer}>
            <p>Period</p>
            <div className={styles.datePickers}>
              <DatePicker id="from" label="From" />
              <DatePicker id="to" label="To" />
            </div>
          </div>
        </div>
        <MapWithRoute zoom={13} start={start} end={end} />
        <Details />
        <div className={styles.footer}>
          <Button title={"GENERATE"} />
        </div>
      </div>
    </div>
  )
}
