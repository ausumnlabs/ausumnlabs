// Rich, animated industry pages: rotating "who we help" block and a scroll story.
// Add an entry keyed by industry slug to switch that page to the animated layout.

export type Segment = { who: string; shows: string[]; explore: string[] };
export type StoryCard = { title: string; who: string; meta: string; chips: string[]; status: string; rows: Array<[string, string]> };
export type StoryStep = { key: string; label: string; title: string; text: string; tags: string[]; card: StoryCard };
export type IndustryStory = {
  accent: string; soft: string; ink: string;
  hero: { eyebrow: string; title: [string, string, string]; lead: string; note: string };
  segments: Segment[];
  whoLead: string;
  storyEyebrow: string; storyTitle: [string, string]; storyLead: string; cta: string;
  steps: StoryStep[];
  fit: string;
};

export const INDUSTRY_STORIES: Record<string, IndustryStory> = {
  healthcare: {
    accent: '#16A37B', soft: '#E2F5EE', ink: '#0B6B50',
    hero: {
      eyebrow: 'Bitrix24 CRM for healthcare · Hospitals · Clinics · Labs',
      title: ['The CRM that ', 'follows up', ' with every patient.'],
      lead: 'Calls, WhatsApp and website enquiries in one place. Appointments that get confirmed, follow-ups that get done, and patients who come back.',
      note: 'Works alongside your HMS or EMR through its API.'
    },
    segments: [
      { who: 'hospitals', shows: ['Missed enquiries', 'Long call queues'], explore: ['Enquiry desk', 'Call centre', 'Health packages'] },
      { who: 'multi-specialty clinics', shows: ['No-shows', 'Double bookings'], explore: ['Appointments', 'Doctor calendars', 'Reminders'] },
      { who: 'diagnostic labs', shows: ['Home-collection mix-ups', 'Report delays'], explore: ['Home collection', 'Report alerts', 'Corporate tie-ups'] },
      { who: 'dental clinics', shows: ['Unfinished treatment plans', 'Recall gaps'], explore: ['Treatment plans', 'Recall reminders', 'Payments'] },
      { who: 'fertility centres', shows: ['Long patient journeys', 'Counsellor follow-ups'], explore: ['Patient journey', 'Counselling', 'Consent forms'] },
      { who: 'wellness clinics', shows: ['Programme drop-offs', 'Missed renewals'], explore: ['Programmes', 'Renewals', 'WhatsApp nurture'] }
    ],
    whoLead: 'Different problems, one method: capture every enquiry, follow up on time, and keep patients coming back. Scroll down to follow one patient.',
    storyEyebrow: 'The patient journey',
    cta: 'Book a healthcare demo',
    storyTitle: ['Now, let’s follow ', 'one patient.'],
    storyLead: 'From the first call to the next visit, here is what the CRM does at every step.',
    steps: [
      { key: 'enquiry', label: 'Enquiry', title: 'Every patient enquiry, answered.', text: 'Calls, WhatsApp, website forms and ad leads land in one inbox with their source. The front desk gets a call task, and a manager is alerted if nobody responds.', tags: ['Call and WhatsApp inbox', 'Ad and website leads', 'Response alerts'],
        card: { title: 'New enquiry', who: 'Ananya R. · Knee pain', meta: 'Google Ads · 3 min ago', chips: ['Orthopaedics', 'First visit'], status: 'Call within 15 min', rows: [['Source', 'Google Ads'], ['Assigned', 'Front desk · Priya'], ['Preferred', 'Weekday morning']] } },
      { key: 'appointment', label: 'Appointment', title: 'Appointments that actually happen.', text: 'Book against doctor calendars, send WhatsApp confirmations and reminders, and rebook no-shows automatically.', tags: ['Doctor calendars', 'WhatsApp reminders', 'No-show rebooking'],
        card: { title: 'Appointment', who: 'Dr. Mehta · Orthopaedics', meta: 'Tue 11:30 · Room 4', chips: ['Confirmed', 'Reminder 24 h'], status: 'Reminder sent on WhatsApp', rows: [['Patient', 'Ananya R.'], ['Type', 'First consultation'], ['If no-show', 'Rebook task created']] } },
      { key: 'visit', label: 'Visit', title: 'Every visit on one record.', text: 'Check-in, documents and consent forms stay on the patient record, next to every call and message. Roles control who sees what.', tags: ['Patient record', 'Documents and consent', 'Roles and access'],
        card: { title: 'Patient record', who: 'Ananya R. · 34', meta: 'Visit 1 · Checked in 11:24', chips: ['Consent signed', 'X-ray uploaded'], status: 'Doctor notes added', rows: [['Calls', '2 logged'], ['WhatsApp', '5 messages'], ['Access', 'Ortho team only']] } },
      { key: 'billing', label: 'Billing', title: 'Packages, invoices and payments.', text: 'Quote treatment packages, send invoices and payment links, and see what is still pending, without a separate spreadsheet.', tags: ['Packages and estimates', 'Payment links', 'Pending dues'],
        card: { title: 'Treatment package', who: 'Physiotherapy · 10 sessions', meta: 'Estimate sent · Accepted', chips: ['Payment link', 'Part paid'], status: 'Balance reminder in 3 days', rows: [['Package', '10 sessions'], ['Paid', 'Session 1 to 4'], ['Next', 'Session 5 · Fri 10:00']] } },
      { key: 'followup', label: 'Follow-up', title: 'Follow-ups nobody forgets.', text: 'Review visits, test reminders and post-procedure check-ins are created as tasks from the visit, with a WhatsApp message ready to send.', tags: ['Review reminders', 'Post-procedure check-ins', 'Feedback'],
        card: { title: 'Follow-up', who: 'Review with Dr. Mehta', meta: 'Due in 14 days', chips: ['Task created', 'WhatsApp ready'], status: 'Feedback requested', rows: [['Check-in', 'Day 3 call · Done'], ['Review', 'Booked'], ['Feedback', '5 of 5']] } },
      { key: 'retention', label: 'Retention', title: 'Patients who come back.', text: 'Health check renewals, programme milestones, campaigns and review requests keep patients engaged long after the first visit.', tags: ['Health check renewals', 'Campaigns', 'Review requests'],
        card: { title: 'Patient lifetime', who: 'Ananya R.', meta: 'Patient since this year', chips: ['Annual check due', 'Google review'], status: 'Renewal reminder scheduled', rows: [['Visits', '6'], ['Packages', '1 completed'], ['Next', 'Annual health check']] } }
    ],
    fit: 'Bitrix24 manages enquiries, appointments, communication and follow-ups. It does not replace your HMS, EMR or lab system; we connect them through their API where available.'
  }
};
