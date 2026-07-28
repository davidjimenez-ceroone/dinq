const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3CT-VvTPOuUBTKv85Gews3Rje1I2erh6Hp1dPlWCOkadXxW8QHUVKxf3OTMsmqXPmDPuUPVQLY?gv=true'

export function AppointmentScheduler() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <iframe
        src={CALENDAR_URL}
        title="Reserva una cita con DINQ"
        loading="lazy"
        className="h-[600px] w-full border-0"
        style={{ colorScheme: 'light' }}
      />
    </div>
  )
}
