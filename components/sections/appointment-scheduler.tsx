const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3CT-VvTPOuUBTKv85Gews3Rje1I2erh6Hp1dPlWCOkadXxW8QHUVKxf3OTMsmqXPmDPuUPVQLY?gv=true'

// The Google appointment iframe renders a service header card at the top
// ("Asesoramiento Gratuito / 30 min"). We clip that top portion so the
// embed starts at the "30 minutos" booking area downwards.
const CROP_TOP = 210

export function AppointmentScheduler() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-border bg-background"
      style={{ height: 620 }}
    >
      <iframe
        src={CALENDAR_URL}
        title="Reserva una cita con DINQ"
        loading="lazy"
        className="w-full border-0"
        style={{
          colorScheme: 'light',
          height: 620 + CROP_TOP,
          marginTop: -CROP_TOP,
        }}
      />
    </div>
  )
}
