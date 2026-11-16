// Rich, animated industry pages: rotating "who we help" block and a scroll story.
// Add an entry keyed by industry slug to switch that page to the animated layout.

export type Segment = { who: string; shows: string[]; explore: string[]; href?: string };
export type StoryCard = { title: string; who: string; meta: string; chips: string[]; status: string; rows: Array<[string, string]> };
export type StoryStep = { key: string; label: string; title: string; text: string; tags: string[]; card: StoryCard };
export type IndustryStory = {
  accent: string; soft: string; ink: string; accent2?: string;
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
  },

  manufacturing: {
    accent: '#2563EB', soft: '#E6EEFD', ink: '#1D4ED8', accent2: '#0891B2',
    hero: {
      eyebrow: 'Bitrix24 CRM for manufacturing · OEMs · Dealers · Distributors',
      title: ['From dealer enquiry ', 'to dispatch', ', on one record.'],
      lead: 'Enquiries, quotes, orders and service requests in one place, so sales, plant and accounts see the same order.',
      note: 'Works alongside your ERP through its API.'
    },
    segments: [
      { who: 'OEM manufacturers', shows: ['RFQs lost in email', 'Slow quotations'], explore: ['RFQ tracking', 'Quotations', 'Product catalog'] },
      { who: 'dealer networks', shows: ['Orders on WhatsApp', 'No view of dealer sales'], explore: ['Dealer pipeline', 'Orders', 'Targets'] },
      { who: 'equipment makers', shows: ['Long sales cycles', 'Missed service visits'], explore: ['Opportunity pipeline', 'Service tickets', 'AMC renewals'] },
      { who: 'component suppliers', shows: ['Repeat orders missed', 'Price revisions'], explore: ['Reorder reminders', 'Price lists', 'Payment follow-ups'] },
      { who: 'FMCG producers', shows: ['Distributor follow-ups', 'Scheme tracking'], explore: ['Distributor CRM', 'Schemes', 'Field sales app'] },
      { who: 'contract manufacturers', shows: ['Sample approvals', 'Batch timelines'], explore: ['Sample tracking', 'Production tasks', 'Approvals'] }
    ],
    whoLead: 'Different products, one method: capture every enquiry, quote fast, and keep orders and service on track. Scroll down to follow one order.',
    storyEyebrow: 'The order journey', storyTitle: ['Now, let’s follow ', 'one order.'], storyLead: 'From the first RFQ to the repeat order, here is what the CRM does at every step.', cta: 'Book a manufacturing demo',
    steps: [
      { key: 'enquiry', label: 'Enquiry', title: 'Every RFQ captured and assigned.', text: 'Enquiries from email, website, IndiaMART, calls and dealers become deals with their source, product and quantity, assigned to the right sales engineer.', tags: ['Email and web RFQs', 'Auto-assignment', 'Response alerts'],
        card: { title: 'New RFQ', who: 'Sharma Engineering · Pune', meta: 'Website · 12 min ago', chips: ['Hydraulic pumps', '250 units'], status: 'Quote due in 24 h', rows: [['Source', 'Website form'], ['Assigned', 'Rohit · West zone'], ['Segment', 'OEM']] } },
      { key: 'quote', label: 'Quotation', title: 'Quotes in minutes, not days.', text: 'Build quotations from your product catalog and price lists, apply discounts with approval, and send a branded PDF from the deal.', tags: ['Product catalog', 'Price lists', 'Discount approval'],
        card: { title: 'Quotation', who: 'Q-1042 · Hydraulic pumps', meta: 'Sent · Opened twice', chips: ['8% discount', 'Approved'], status: 'Follow-up in 2 days', rows: [['Items', '3 products'], ['Validity', '15 days'], ['Approved by', 'Sales head']] } },
      { key: 'negotiation', label: 'Negotiation', title: 'Nothing stalls in negotiation.', text: 'Revisions, calls and emails stay on the deal. If a quote goes quiet, the CRM creates a follow-up and alerts the manager.', tags: ['Revision history', 'Call records', 'Stalled deal alerts'],
        card: { title: 'Negotiation', who: 'Revision 2 · Delivery terms', meta: 'Call logged · 18 min', chips: ['Price agreed', 'Terms pending'], status: 'PO expected this week', rows: [['Revisions', '2'], ['Last contact', 'Today'], ['Probability', 'High']] } },
      { key: 'order', label: 'Order', title: 'Purchase order to production.', text: 'Record the PO, create the order and hand it to production and accounts with tasks, so everyone works from the same details.', tags: ['PO and order', 'Production tasks', 'Advance payment'],
        card: { title: 'Order', who: 'SO-2207 · 250 pumps', meta: 'PO received · Advance paid', chips: ['In production', 'ERP synced'], status: 'Dispatch planned for 28th', rows: [['Plant', 'Unit 2'], ['Advance', '30% received'], ['Tasks', '4 open']] } },
      { key: 'dispatch', label: 'Dispatch', title: 'Dispatch and payment, tracked.', text: 'Dispatch details, invoices and payment follow-ups stay on the order. Customers get updates without chasing your team.', tags: ['Dispatch updates', 'Invoices', 'Payment reminders'],
        card: { title: 'Dispatch', who: 'Lorry MH-12 · 2 consignments', meta: 'Dispatched · ETA 2 days', chips: ['Invoice sent', 'Balance due'], status: 'Payment reminder scheduled', rows: [['Invoice', 'INV-5531'], ['Balance', '70% due in 30 days'], ['Customer update', 'Sent on WhatsApp']] } },
      { key: 'service', label: 'Service', title: 'Service, AMCs and the next order.', text: 'Service tickets, AMC renewals and reorder reminders keep customers coming back to you instead of a competitor.', tags: ['Service tickets', 'AMC renewals', 'Reorder reminders'],
        card: { title: 'Account', who: 'Sharma Engineering', meta: 'Customer since 2024', chips: ['AMC active', 'Reorder due'], status: 'Reorder reminder in 10 days', rows: [['Orders', '6'], ['Open tickets', '1'], ['AMC', 'Renews in March']] } }
    ],
    fit: 'Bitrix24 manages enquiries, quotes, orders, service and follow-ups. It does not replace your ERP or MRP such as Tally or SAP; we connect them through their API where available.'
  },

  construction: {
    accent: '#D97706', soft: '#FDF0DC', ink: '#92400E', accent2: '#DC2626',
    hero: {
      eyebrow: 'Bitrix24 CRM for construction · Contractors · Interiors · Infra',
      title: ['Keep every site and ', 'every approval', ' in step.'],
      lead: 'Leads, estimates, contracts, site work, bills and handover in one system, without chasing updates on phone calls.',
      note: 'Works alongside your accounting and project tools through their API.'
    },
    segments: [
      { who: 'building contractors', shows: ['Estimates on Excel', 'Delayed site updates'], explore: ['Estimates', 'Site tasks', 'RA bills'] },
      { who: 'interior design firms', shows: ['Design changes lost', 'Client approvals stuck'], explore: ['Design approvals', 'Site visits', 'Payment milestones'] },
      { who: 'infrastructure contractors', shows: ['Tender follow-ups', 'Subcontractor chaos'], explore: ['Tender pipeline', 'Subcontractors', 'Documents'] },
      { who: 'MEP and fit-out firms', shows: ['Material delays', 'Snag lists on paper'], explore: ['Material requests', 'Snag lists', 'Handover'] },
      { who: 'steel and prefab makers', shows: ['Drawing revisions', 'Dispatch to site'], explore: ['Drawing approvals', 'Production tasks', 'Dispatch'] },
      { who: 'architects', shows: ['Scope creep', 'Unbilled hours'], explore: ['Project stages', 'Time tracking', 'Invoices'] }
    ],
    whoLead: 'Different projects, one method: win the job, run every site on one board, and get paid on time. Scroll down to follow one project.',
    storyEyebrow: 'The project journey', storyTitle: ['Now, let’s follow ', 'one project.'], storyLead: 'From the first enquiry to handover, here is what the CRM does at every step.', cta: 'Book a construction demo',
    steps: [
      { key: 'lead', label: 'Lead', title: 'Every enquiry and tender tracked.', text: 'Calls, website enquiries, referrals and tenders become deals with their value, location and deadline, assigned to the right person.', tags: ['Enquiries and tenders', 'Deadlines', 'Source tracking'],
        card: { title: 'New lead', who: 'Villa interiors · Whitefield', meta: 'Referral · Today', chips: ['3,200 sq ft', 'Turnkey'], status: 'Site survey to book', rows: [['Source', 'Architect referral'], ['Assigned', 'Kiran · Projects'], ['Budget', 'Shared']] } },
      { key: 'estimate', label: 'Estimate', title: 'Site survey to estimate, faster.', text: 'Book the site survey, attach photos and measurements, and build the estimate from your rate items. Revisions stay on record.', tags: ['Site survey', 'Rate items', 'Estimate revisions'],
        card: { title: 'Estimate', who: 'EST-318 · Villa interiors', meta: 'Revision 2 · Sent', chips: ['Survey done', '42 photos'], status: 'Client review call Thu', rows: [['Line items', '64'], ['Revisions', '2'], ['Valid till', '30 days']] } },
      { key: 'contract', label: 'Contract', title: 'Contract signed, milestones set.', text: 'Generate the agreement, sign it online, and set payment milestones that create tasks and reminders automatically.', tags: ['E-signature', 'Payment milestones', 'Scope documents'],
        card: { title: 'Contract', who: 'Villa interiors · Signed', meta: 'E-signed · Advance received', chips: ['5 milestones', 'Scope locked'], status: 'Project created', rows: [['Advance', '20% received'], ['Next milestone', 'Civil complete'], ['Start', 'Monday']] } },
      { key: 'execution', label: 'Execution', title: 'Every site on one board.', text: 'Site tasks, Gantt timelines, daily photos from the mobile app and material requests keep managers and clients in the loop.', tags: ['Gantt and tasks', 'Site photos', 'Material requests'],
        card: { title: 'Site board', who: 'Villa interiors · Week 4', meta: '68% complete', chips: ['On schedule', '3 photos today'], status: 'Material request approved', rows: [['Open tasks', '12'], ['Delayed', '1'], ['Site lead', 'Manoj']] } },
      { key: 'billing', label: 'Billing', title: 'Bills raised, approvals tracked.', text: 'Running bills follow your milestones, go through approval and get payment reminders until they are cleared.', tags: ['Running bills', 'Approvals', 'Payment reminders'],
        card: { title: 'Running bill', who: 'RA bill 3 · Carpentry', meta: 'Submitted · Approved', chips: ['Approved', 'Due in 7 days'], status: 'Payment reminder scheduled', rows: [['Billed so far', '60%'], ['Received', '45%'], ['Pending', '1 bill']] } },
      { key: 'handover', label: 'Handover', title: 'Handover, snags and referrals.', text: 'Snag lists, completion documents and warranty follow-ups close the project cleanly, and happy clients get a referral request.', tags: ['Snag lists', 'Handover documents', 'Referral requests'],
        card: { title: 'Handover', who: 'Villa interiors · Complete', meta: 'Handed over · Warranty active', chips: ['Snags closed', 'Review received'], status: 'Referral request sent', rows: [['Snags', '14 of 14 closed'], ['Warranty', '12 months'], ['Final bill', 'Paid']] } }
    ],
    fit: 'Bitrix24 manages leads, estimates, contracts, site tasks and client communication. For detailed costing or accounts we connect your existing tools through their API where available.'
  },

  education: {
    accent: '#7C3AED', soft: '#EFE7FD', ink: '#5B21B6', accent2: '#2563EB',
    hero: {
      eyebrow: 'Bitrix24 CRM for education · Schools · Colleges · Coaching',
      title: ['Turn every enquiry into ', 'an admission', '.'],
      lead: 'Enquiries from ads, calls and WhatsApp in one place. Counsellors who follow up on time, and fees that get collected.',
      note: 'Works alongside your ERP or LMS through its API.'
    },
    segments: [
      { who: 'schools', shows: ['Admission season rush', 'Parents not called back'], explore: ['Admissions pipeline', 'Campus visits', 'Fee reminders'] },
      { who: 'colleges and universities', shows: ['Leads from many portals', 'Counsellor overload'], explore: ['Lead routing', 'Counselling', 'Applications'] },
      { who: 'coaching institutes', shows: ['Demo class no-shows', 'Batch drop-offs'], explore: ['Demo classes', 'Batches', 'Renewals'] },
      { who: 'online course creators', shows: ['Ad leads going cold', 'Cart abandonment'], explore: ['Lead nurture', 'WhatsApp follow-ups', 'Payment links'] },
      { who: 'study-abroad consultants', shows: ['Long document journeys', 'Missed deadlines'], explore: ['Document checklists', 'Deadlines', 'Visa stages'] },
      { who: 'training centres', shows: ['Corporate enquiries lost', 'Certificate follow-ups'], explore: ['Corporate pipeline', 'Batches', 'Certificates'] }
    ],
    whoLead: 'Different institutions, one method: answer every enquiry, counsel on time, and keep students enrolled. Scroll down to follow one student.',
    storyEyebrow: 'The student journey', storyTitle: ['Now, let’s follow ', 'one student.'], storyLead: 'From the first enquiry to enrolment and beyond, here is what the CRM does at every step.', cta: 'Book an education demo',
    steps: [
      { key: 'enquiry', label: 'Enquiry', title: 'Every enquiry, called back fast.', text: 'Ads, website forms, portals, calls and WhatsApp land in one inbox with their source and course. The right counsellor gets a call task.', tags: ['Ad and portal leads', 'Counsellor routing', 'Response alerts'],
        card: { title: 'New enquiry', who: 'Aarav K. · B.Com', meta: 'Instagram ad · 6 min ago', chips: ['Commerce', '2026 intake'], status: 'Call within 15 min', rows: [['Source', 'Instagram ad'], ['Counsellor', 'Sneha'], ['Parent', 'Mobile added']] } },
      { key: 'counselling', label: 'Counselling', title: 'Counselling that stays on record.', text: 'Notes, calls and WhatsApp messages stay on the student record, so any counsellor can pick up where the last one left off.', tags: ['Call records', 'Counselling notes', 'WhatsApp templates'],
        card: { title: 'Counselling', who: 'Aarav K. · Call 2', meta: 'Interested · Parent joined', chips: ['Hostel needed', 'Scholarship query'], status: 'Campus visit to book', rows: [['Calls', '2'], ['Messages', '6'], ['Interest', 'High']] } },
      { key: 'visit', label: 'Visit', title: 'Campus visits and demo classes.', text: 'Book visits and demo classes against slots, send reminders, and rebook no-shows automatically.', tags: ['Visit slots', 'Reminders', 'No-show rebooking'],
        card: { title: 'Campus visit', who: 'Sat 11:00 · Main campus', meta: 'Confirmed · Reminder sent', chips: ['With parents', 'Tour + counselling'], status: 'Reminder 24 h before', rows: [['Guide', 'Admissions team'], ['Slot', '11:00 to 12:00'], ['If no-show', 'Rebook task']] } },
      { key: 'application', label: 'Application', title: 'Applications with every document.', text: 'Track forms and documents with checklists and deadlines, and nudge students for what is still missing.', tags: ['Document checklist', 'Deadlines', 'Missing item nudges'],
        card: { title: 'Application', who: 'APP-2219 · B.Com', meta: 'Submitted · 1 document pending', chips: ['Marksheet ok', 'ID pending'], status: 'Reminder sent for ID proof', rows: [['Documents', '4 of 5'], ['Deadline', '30 May'], ['Status', 'Under review']] } },
      { key: 'fees', label: 'Admission', title: 'Admission confirmed, fees collected.', text: 'Offer letters, payment links and instalment reminders take the student from offer to confirmed seat.', tags: ['Offer letters', 'Payment links', 'Instalment reminders'],
        card: { title: 'Admission', who: 'Aarav K. · Seat confirmed', meta: 'Offer accepted', chips: ['Fee part paid', 'Hostel booked'], status: 'Next instalment reminder set', rows: [['Paid', 'Term 1'], ['Next due', '15 July'], ['Scholarship', '10% applied']] } },
      { key: 'lifecycle', label: 'Lifecycle', title: 'Students who stay, and refer.', text: 'Onboarding, attendance alerts from your systems, renewals and alumni referrals keep the relationship going after admission.', tags: ['Onboarding', 'Renewals', 'Alumni referrals'],
        card: { title: 'Student record', who: 'Aarav K.', meta: 'Enrolled · Year 1', chips: ['Onboarded', 'Referred 2 friends'], status: 'Referral leads assigned', rows: [['Fees', 'Up to date'], ['Referrals', '2'], ['Next', 'Year 2 renewal']] } }
    ],
    fit: 'Bitrix24 manages enquiries, counselling, admissions and fee follow-ups. It does not replace your school ERP or LMS; we connect them through their API where available.'
  },

  retail: {
    accent: '#E11D48', soft: '#FDE6EB', ink: '#9F1239', accent2: '#F59E0B',
    hero: {
      eyebrow: 'Bitrix24 CRM for retail · Stores · D2C · Showrooms',
      title: ['Know every customer ', 'across every store', '.'],
      lead: 'Walk-ins, online orders, WhatsApp and calls in one place, with every purchase, delivery and service request on the customer record.',
      note: 'Works alongside your POS and online store through their API.'
    },
    segments: [
      { who: 'multi-store retailers', shows: ['No single customer view', 'Store-by-store reports'], explore: ['Customer records', 'Branch reports', 'Campaigns'] },
      { who: 'D2C brands', shows: ['WhatsApp orders missed', 'Abandoned carts'], explore: ['WhatsApp sales', 'Cart recovery', 'Repeat orders'] },
      { who: 'furniture showrooms', shows: ['Quotes not followed up', 'Delivery delays'], explore: ['Quotations', 'Delivery tracking', 'After-sales'] },
      { who: 'jewellery stores', shows: ['Walk-ins not captured', 'Occasions missed'], explore: ['Walk-in capture', 'Occasion reminders', 'Schemes'] },
      { who: 'appliance stores', shows: ['Installation follow-ups', 'Warranty claims'], explore: ['Installations', 'Service tickets', 'Extended warranty'] },
      { who: 'franchise networks', shows: ['Lead sharing with franchisees', 'No central view'], explore: ['Lead routing', 'Franchise reports', 'Permissions'] }
    ],
    whoLead: 'Different stores, one method: capture every customer, close the sale, and bring them back. Scroll down to follow one customer.',
    storyEyebrow: 'The customer journey', storyTitle: ['Now, let’s follow ', 'one customer.'], storyLead: 'From the first visit to the next purchase, here is what the CRM does at every step.', cta: 'Book a retail demo',
    steps: [
      { key: 'visit', label: 'Visit', title: 'Every walk-in and click captured.', text: 'Store walk-ins, website visitors, Instagram and WhatsApp enquiries become customer records with their interest and store.', tags: ['Walk-in capture', 'Online enquiries', 'Store assignment'],
        card: { title: 'New enquiry', who: 'Meera S. · 3-seater sofa', meta: 'Indiranagar store · Walk-in', chips: ['Fabric', 'Budget shared'], status: 'Send catalogue on WhatsApp', rows: [['Store', 'Indiranagar'], ['Assigned', 'Ravi'], ['Interest', 'Living room set']] } },
      { key: 'quote', label: 'Quote', title: 'Quotes and catalogues in one tap.', text: 'Share catalogues and quotes from the product list on WhatsApp, with follow-up tasks if the customer goes quiet.', tags: ['Product catalog', 'WhatsApp sharing', 'Follow-up tasks'],
        card: { title: 'Quote', who: 'QT-884 · Sofa + coffee table', meta: 'Sent on WhatsApp · Viewed', chips: ['Festive offer', 'EMI option'], status: 'Follow-up tomorrow 11:00', rows: [['Items', '2'], ['Offer', 'Festive 10%'], ['Valid', '7 days']] } },
      { key: 'order', label: 'Order', title: 'Orders and payments, in sync.', text: 'Record the order and payment, take advances by payment link, and keep stock and delivery teams informed.', tags: ['Orders', 'Payment links', 'Stock check'],
        card: { title: 'Order', who: 'SO-3391 · Meera S.', meta: 'Advance paid · In stock', chips: ['Paid 50%', 'Delivery booked'], status: 'Delivery slot confirmed', rows: [['Payment', 'UPI link'], ['Balance', 'On delivery'], ['Warehouse', 'Hosur Road']] } },
      { key: 'delivery', label: 'Delivery', title: 'Delivery and installation, tracked.', text: 'Delivery slots, installation tasks and customer updates are created from the order, so nothing is missed.', tags: ['Delivery slots', 'Installation tasks', 'Customer updates'],
        card: { title: 'Delivery', who: 'Sat 10:00 to 13:00', meta: 'Out for delivery', chips: ['Installation', 'Photos on arrival'], status: 'Customer updated on WhatsApp', rows: [['Team', 'Delivery 2'], ['Installation', 'Same day'], ['Sign-off', 'Pending']] } },
      { key: 'service', label: 'Service', title: 'After-sales without the chase.', text: 'Service requests and warranty claims become tickets with owners and deadlines, visible to the store and the customer team.', tags: ['Service tickets', 'Warranty', 'Feedback'],
        card: { title: 'Service ticket', who: 'TKT-410 · Cushion repair', meta: 'Under warranty', chips: ['Technician assigned', 'Due in 48 h'], status: 'Visit booked for Tue', rows: [['Warranty', 'Valid'], ['Technician', 'Arun'], ['Priority', 'Normal']] } },
      { key: 'repeat', label: 'Repeat', title: 'Customers who buy again.', text: 'Birthdays, anniversaries, new collections and loyalty offers go to the right customers on WhatsApp and email.', tags: ['Occasion reminders', 'Campaigns', 'Loyalty offers'],
        card: { title: 'Customer', who: 'Meera S.', meta: 'Customer since 2025', chips: ['2 purchases', 'Anniversary in May'], status: 'Offer scheduled on WhatsApp', rows: [['Lifetime spend', 'Recorded'], ['Store', 'Indiranagar'], ['Next', 'Dining set launch']] } }
    ],
    fit: 'Bitrix24 manages customers, enquiries, orders, delivery and service. It does not replace your POS or online store; we connect them through their API where available.'
  },

  'professional-services': {
    accent: '#4F46E5', soft: '#E8E7FC', ink: '#3730A3', accent2: '#0EA5E9',
    hero: {
      eyebrow: 'Bitrix24 CRM for service firms · CA · Legal · Agencies · IT',
      title: ['Win clients and ', 'deliver on time', '.'],
      lead: 'Leads, proposals, engagements, projects and billing in one place, without losing client context between teams.',
      note: 'Works alongside your accounting software through its API.'
    },
    segments: [
      { who: 'CA and accounting firms', shows: ['Compliance deadlines', 'Document chasing'], explore: ['Recurring tasks', 'Document requests', 'Invoices'] },
      { who: 'law firms', shows: ['Matter updates lost', 'Unbilled hours'], explore: ['Matters', 'Time tracking', 'Client portal'] },
      { who: 'marketing agencies', shows: ['Scope creep', 'Approvals stuck'], explore: ['Proposals', 'Approvals', 'Retainers'] },
      { who: 'IT services companies', shows: ['Long sales cycles', 'Support tickets'], explore: ['Deal pipeline', 'Projects', 'Helpdesk'] },
      { who: 'consulting firms', shows: ['Proposal follow-ups', 'Utilisation'], explore: ['Proposals', 'Workload', 'Reports'] },
      { who: 'staffing firms', shows: ['Client and candidate chaos', 'Invoice delays'], explore: ['Client pipeline', 'Requirements', 'Billing'] }
    ],
    whoLead: 'Different services, one method: win the work, deliver it on time, and bill every hour. Scroll down to follow one client.',
    storyEyebrow: 'The client journey', storyTitle: ['Now, let’s follow ', 'one client.'], storyLead: 'From the first enquiry to renewal, here is what the CRM does at every step.', cta: 'Book a demo for your firm',
    steps: [
      { key: 'lead', label: 'Lead', title: 'Every enquiry qualified quickly.', text: 'Website, referral, LinkedIn and email enquiries become deals with their service and value, assigned to the right partner.', tags: ['Lead capture', 'Qualification', 'Partner assignment'],
        card: { title: 'New lead', who: 'Nova Foods · Tax advisory', meta: 'Referral · Today', chips: ['GST + audit', 'Annual'], status: 'Discovery call tomorrow', rows: [['Source', 'Client referral'], ['Partner', 'R. Iyer'], ['Size', 'Mid-market']] } },
      { key: 'proposal', label: 'Proposal', title: 'Proposals that go out on time.', text: 'Build proposals from service templates, send them for e-signature, and get a follow-up task if they go quiet.', tags: ['Service templates', 'E-signature', 'Follow-ups'],
        card: { title: 'Proposal', who: 'PR-207 · Tax and audit', meta: 'Sent · Opened', chips: ['Annual retainer', 'E-sign'], status: 'Follow-up in 3 days', rows: [['Services', '3'], ['Billing', 'Monthly'], ['Valid', '21 days']] } },
      { key: 'engagement', label: 'Engagement', title: 'Engagement starts cleanly.', text: 'Once signed, the CRM creates the client project, onboarding checklist and document requests automatically.', tags: ['Project from deal', 'Onboarding checklist', 'Document requests'],
        card: { title: 'Engagement', who: 'Nova Foods · Signed', meta: 'Onboarding · Week 1', chips: ['KYC done', '3 docs pending'], status: 'Document reminder sent', rows: [['Checklist', '7 of 10'], ['Team', '3 people'], ['Kick-off', 'Done']] } },
      { key: 'delivery', label: 'Delivery', title: 'Deadlines nobody misses.', text: 'Recurring tasks, deadlines, time tracking and workload views keep every engagement on schedule.', tags: ['Recurring tasks', 'Time tracking', 'Workload'],
        card: { title: 'Project', who: 'Nova Foods · Q2 filings', meta: '2 deadlines this month', chips: ['On track', '18 h logged'], status: 'GST return due Friday', rows: [['Open tasks', '6'], ['Overdue', '0'], ['Utilisation', '78%']] } },
      { key: 'billing', label: 'Billing', title: 'Every hour billed.', text: 'Invoices from retainers or tracked time, payment links and reminders until they are paid.', tags: ['Retainer invoices', 'Time-based billing', 'Payment reminders'],
        card: { title: 'Invoice', who: 'INV-1180 · June retainer', meta: 'Sent · Due in 15 days', chips: ['Retainer', 'Payment link'], status: 'Reminder scheduled', rows: [['Amount', 'Retainer + extras'], ['Hours', '18 logged'], ['Status', 'Awaiting payment']] } },
      { key: 'renewal', label: 'Renewal', title: 'Renewals and the next service.', text: 'Renewal reminders, satisfaction checks and cross-sell opportunities turn one engagement into a long relationship.', tags: ['Renewal reminders', 'Feedback', 'Cross-sell'],
        card: { title: 'Client', who: 'Nova Foods', meta: 'Client since 2025', chips: ['Renewal in 60 days', 'NPS 9'], status: 'Payroll services proposed', rows: [['Services', '2 active'], ['Renewal', 'March'], ['Opportunity', 'Payroll']] } }
    ],
    fit: 'Bitrix24 manages clients, proposals, projects, time and billing follow-ups. It does not replace your accounting software; we connect it through its API where available.'
  }
};

/* ---------------- Home page ---------------- */

export const HOME_SEGMENTS: Segment[] = [
  { who: 'real estate brokers', shows: ['Leads from portals', 'Flats promised twice'], explore: ['Broker CRM'], href: '/real-estate/brokers' },
  { who: 'builders and developers', shows: ['Inventory in Excel', 'Partner payout disputes'], explore: ['Builder CRM'], href: '/real-estate/builders' },
  { who: 'hospitals and clinics', shows: ['Missed enquiries', 'No-shows'], explore: ['Healthcare CRM'], href: '/industries/healthcare' },
  { who: 'manufacturers', shows: ['RFQs lost in email', 'Slow quotations'], explore: ['Manufacturing CRM'], href: '/industries/manufacturing' },
  { who: 'schools and colleges', shows: ['Admission rush', 'Parents not called back'], explore: ['Education CRM'], href: '/industries/education' },
  { who: 'retail stores', shows: ['No single customer view', 'After-sales chasing'], explore: ['Retail CRM'], href: '/industries/retail' },
  { who: 'service firms', shows: ['Proposals go quiet', 'Unbilled hours'], explore: ['Service firm CRM'], href: '/industries/professional-services' }
];

export const HOME_STORY: StoryStep[] = [
  { key: 'capture', label: 'Capture', title: 'Every enquiry lands in one inbox.', text: 'Calls, WhatsApp, portals, ads, email and your website all create a lead in Bitrix24 with its source. Nothing sits on a personal phone.', tags: ['Contact center', 'WhatsApp and telephony', 'Web forms'],
    card: { title: 'New lead', who: 'Rahul M. · 2 BHK resale', meta: '99acres · 2 min ago', chips: ['Whitefield', 'Budget shared'], status: 'Assigned automatically', rows: [['Source', '99acres'], ['Channel', 'Lead email'], ['Tool', 'Bitrix24 CRM']] } },
  { key: 'assign', label: 'Assign', title: 'The right person, in seconds.', text: 'Rules route each lead by area, product or turn. A call task is created, and the manager is alerted if nobody responds in time.', tags: ['Automation rules', 'Call task', 'SLA alerts'],
    card: { title: 'Routing', who: 'East zone · Priya', meta: 'Rule: area = Whitefield', chips: ['Call in 15 min', 'Manager watching'], status: 'Call task created', rows: [['Rule', 'By area'], ['Agent', 'Priya'], ['Escalation', 'After 15 min']] } },
  { key: 'follow', label: 'Follow up', title: 'Calls summarised. Follow-ups set.', text: 'CoPilot transcribes the call and fills in the fields. The next follow-up is a task with a WhatsApp message ready to send.', tags: ['CoPilot AI', 'Tasks and reminders', 'WhatsApp templates'],
    card: { title: 'CoPilot summary', who: 'Call with Rahul · 6 min', meta: 'Transcribed by AI', chips: ['Loan pre-approved', 'Wants Sat visit'], status: 'Visit invite ready on WhatsApp', rows: [['Budget', 'Filled by AI'], ['Next step', 'Site visit Sat'], ['Sentiment', 'Positive']] } },
  { key: 'meet', label: 'Meet', title: 'Visits and meetings that happen.', text: 'Book on shared calendars, send confirmations and reminders, and get a feedback task after every meeting or site visit.', tags: ['Calendars', 'Reminders', 'Feedback tasks'],
    card: { title: 'Site visit', who: 'Sat 11:00 · Prestige Lakeside', meta: 'Confirmed · Reminder sent', chips: ['24 h reminder', '2 h reminder'], status: 'Feedback task after visit', rows: [['Agent', 'Priya'], ['Client', 'Rahul M.'], ['Status', 'Confirmed']] } },
  { key: 'close', label: 'Close', title: 'Quote, sign and get paid.', text: 'Send quotes and documents from the deal, sign online and collect payment by link. Status updates itself as the deal moves.', tags: ['Quotes and documents', 'E-signature', 'Payment links'],
    card: { title: 'Booking', who: 'Token received · ₹1,00,000', meta: 'Receipt generated', chips: ['E-signed', 'Paid by UPI'], status: 'Property marked Booked', rows: [['Document', 'Token receipt'], ['Payment', 'UPI link'], ['Deal', 'Won']] } },
  { key: 'report', label: 'Report', title: 'Managers see it all, live.', text: 'Dashboards show sources, conversion, team activity and revenue as they happen. No spreadsheets at month end.', tags: ['BI dashboards', 'Team reports', 'Source ROI'],
    card: { title: 'This month', who: 'Sales dashboard', meta: 'Updated live', chips: ['All sources', 'All agents'], status: 'Shared with directors every morning', rows: [['Leads', 'By source'], ['Conversion', 'By agent'], ['Revenue', 'By project']] } }
];
