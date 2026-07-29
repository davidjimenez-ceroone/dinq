const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3CT-VvTPOuUBTKv85Gews3Rje1I2erh6Hp1dPlWCOkadXxW8QHUVKxf3OTMsmqXPmDPuUPVQLY?gv=true&hl=es'

// The Google appointment iframe renders a profile photo + name at the very
// top. We clip only that portion so the embed starts at the "Citas de 30 min"
// header, keeping the Google Meet note and the description visible.
const CROP_TOP = 82

export function AppointmentScheduler() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-border bg-background"
      style={{ height: 760 }}
    >
      <iframe
        src={CALENDAR_URL}
        title="Reserva una cita con DINQ"
        loading="lazy"
        className="w-full border-0"
        style={{
          colorScheme: 'light',
          height: 760 + CROP_TOP,
          marginTop: -CROP_TOP,
        }}
      />
    </div>
  )
}
