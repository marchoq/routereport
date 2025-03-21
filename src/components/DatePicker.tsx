interface DatePickerProps {
  id: string
  label: string
}

export const DatePicker = ({ id, label }: DatePickerProps) => {
  return (
    <div>
      <label htmlFor="start">{label}</label>

      <input
        type="date"
        id={id}
        name="trip-start"
        min="2018-01-01"
        max="2018-12-31"
      />
    </div>
  )
}
