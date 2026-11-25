// Industry modules built and tested in our Bitrix24 portal. Dashboards mirror the stages and
// demo data there (fictional names and figures only, never real customer records).
export type Dash = {
  hello: string; sub: string; tag: string;
  kpis: Array<[string, string]>; // [value, label]; the first is highlighted
  grid: {
    title: string;
    legend: Array<[string, string]>; // [status, colour]; cells use the index; legend[0] drives the "X of Y" note
    groups: Array<{ name: string; cols: string[]; rows: Array<[string, string]> }>; // [row label, one status digit per column]
  };
  pipe: { title: string; rows: Array<[string, number]> };
  side: { title: string; stats: Array<[string, string]> };
};
export type IndustryModule = {
  key: string; label: string; name: string; text: string; href: string;
  parts: string[]; dash?: Dash; shot?: { src: string; w: number; h: number; alt: string };
};

// Dark enough for white cell text.
const G = '#3D9B5C', Y = '#C98F1E', O = '#D9813E', R = '#C2482A', B = '#3B67C9', S = '#8A96A3';

export const INDUSTRY_MODULES: IndustryModule[] = [
  { key: 're', label: 'Real estate', name: 'Broker, Builder and Agency CRM', href: '/real-estate',
    text: 'Our own real estate modules: property inventory, buyer matching, site visits, unit cost sheets and channel partner commissions.',
    parts: ['Broker CRM', 'Builder CRM', 'Agency CRM', 'Unit inventory'],
    shot: { src: '/screens/broker-overview.webp', w: 1600, h: 1522, alt: 'Broker CRM overview dashboard in Bitrix24' } },
  { key: 'hc', label: 'Healthcare', name: 'Clinic CRM', href: '/industries/healthcare',
    text: 'Patients, appointments, treatment plans and lab orders linked on one record, with WhatsApp reminders and insurance pre-auth tracking.',
    parts: ['Patients', 'Appointments', 'Treatment plans', 'Lab orders'],
    dash: {
      hello: 'Good morning — clinic at a glance', sub: '8 patients · 7 appointments today · 2 follow-ups due', tag: 'Ausumn Clinic (Demo)',
      kpis: [['14', 'Appointments today'], ['3', 'Checked in'], ['2', 'Follow-ups due'], ['₹2.66 L', 'Treatment plans open'], ['₹8,250', 'Collected today']],
      grid: { title: "Today's schedule — OPD",
        legend: [['Open', S], ['Booked', Y], ['Confirmed', B], ['Checked in', O], ['Consulted', G], ['No-show', R]],
        groups: [
          { name: 'Morning OPD', cols: ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30'],
            rows: [['Ortho', '443210'], ['Cardio', '430121'], ['Gynae', '442100'], ['Paeds', '543020']] },
          { name: 'Evening OPD', cols: ['4:00', '4:30', '5:00', '5:30', '6:00', '6:30'],
            rows: [['Ortho', '211000'], ['Cardio', '120100'], ['Gynae', '201010'], ['Paeds', '310200']] }] },
      pipe: { title: 'Patient enquiries', rows: [['New Enquiry', 1], ['Callback Done', 2], ['Appointment Booked', 1], ['Visited', 1], ['Treatment Advised', 1]] },
      side: { title: 'Lab and billing', stats: [['₹9,950', 'Lab orders'], ['1', 'Report ready'], ['1', 'Pre-auth pending']] } } },
  { key: 'mf', label: 'Manufacturing', name: 'Factory CRM', href: '/industries/manufacturing',
    text: 'From dealer quotation to production order, quality check, dispatch and after-sales service tickets.',
    parts: ['Quotations', 'Production orders', 'Dispatches', 'Service tickets'],
    dash: {
      hello: 'Good morning — factory at a glance', sub: '5 work orders · 2 lines running · 1 QC hold', tag: 'Ausumn Works (Demo)',
      kpis: [['5', 'Open work orders'], ['82%', 'Line utilisation'], ['1', 'In quality check'], ['₹48.6 L', 'Quotes in pipeline'], ['3', 'Dispatches this week']],
      grid: { title: 'Shop floor — machines',
        legend: [['Running', G], ['Setup', B], ['QC hold', Y], ['Idle', S], ['Breakdown', R]],
        groups: [
          { name: 'Line A — Fabrication', cols: ['CNC 1', 'CNC 2', 'Laser', 'Bend', 'Weld'],
            rows: [['Shift A', '00102'], ['Shift B', '01030'], ['Shift C', '33303']] },
          { name: 'Line B — Assembly', cols: ['Press', 'Busbar', 'Paint', 'Assy 1', 'Assy 2'],
            rows: [['Shift A', '00204'], ['Shift B', '10020'], ['Shift C', '33333']] }] },
      pipe: { title: 'Production orders', rows: [['Planned', 1], ['Material Issued', 1], ['In Production', 1], ['Quality Check', 1], ['Ready to Dispatch', 1]] },
      side: { title: 'Dispatch and service', stats: [['3', 'Dispatches due'], ['2', 'Open service tickets'], ['98.2%', 'First-pass yield']] } } },
  { key: 'it', label: 'IT services', name: 'IT Services CRM', href: '/industries/professional-services',
    text: 'Projects from kickoff to go-live, support tickets with SLAs, and AMC contracts that remind you before renewal.',
    parts: ['Projects', 'Support tickets', 'AMC contracts', 'Services sales'],
    dash: {
      hello: 'Good morning — delivery at a glance', sub: '5 projects · 4 open tickets · 1 AMC due', tag: 'Ausumn Tech (Demo)',
      kpis: [['5', 'Active projects'], ['₹39.5 L', 'Project value'], ['4', 'Open tickets'], ['1', 'P1 critical'], ['₹5.16 L', 'AMC value']],
      grid: { title: 'Team capacity — this week',
        legend: [['Billable', G], ['Planned', B], ['Support', O], ['Free', S], ['Leave', R]],
        groups: [
          { name: 'Delivery team', cols: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            rows: [['Asha', '00001'], ['Vikas', '00011'], ['Neel', '01100'], ['Rhea', '00330']] },
          { name: 'Support desk', cols: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            rows: [['Kiran', '22222'], ['Tara', '22234'], ['Om', '22422']] }] },
      pipe: { title: 'Services sales', rows: [['New Lead', 1], ['Discovery Call', 1], ['Proposal Sent', 2], ['Negotiation', 1], ['Contract Review', 1]] },
      side: { title: 'SLA health', stats: [['92%', 'Tickets in SLA'], ['1', 'AMC renewal due'], ['3.4 h', 'Avg first response']] } } },
  { key: 'ed', label: 'Education', name: 'Institute CRM', href: '/industries/education',
    text: 'Admissions from enquiry to enrolment, student records and fee collection with automatic reminders.',
    parts: ['Admissions', 'Students', 'Fee collections', 'Corporate training'],
    dash: {
      hello: 'Good morning — admissions at a glance', sub: '6 applications · 1 enrolled · 1 fee pending', tag: 'Ausumn Institute (Demo)',
      kpis: [['42', 'Enquiries this month'], ['6', 'In admissions'], ['1', 'Fee pending'], ['₹19.1 L', 'Admissions pipeline'], ['86%', 'Seats filled']],
      grid: { title: 'Seat availability — 2026 batches',
        legend: [['Open', G], ['Filling', Y], ['Almost full', O], ['Full', R]],
        groups: [
          { name: 'Degree programmes', cols: ['Sec A', 'Sec B', 'Sec C', 'Sec D'],
            rows: [['MBA', '3321'], ['B.Tech', '3210'], ['BBA', '2100'], ['Data Sci', '3200']] },
          { name: 'School', cols: ['Sec A', 'Sec B', 'Sec C', 'Sec D'],
            rows: [['Class 9', '3332'], ['Class 10', '3321'], ['Class 11', '2210'], ['Class 12', '1000']] }] },
      pipe: { title: 'Admissions', rows: [['Enquiry', 1], ['Counselling', 2], ['Campus Visit', 1], ['Fee Pending', 1], ['Enrolled', 1]] },
      side: { title: 'Fee collections', stats: [['₹12.4 L', 'Collected this term'], ['₹3.6 L', 'Due this week'], ['7', 'Reminders sent today']] } } },
  { key: 'rt', label: 'Retail', name: 'Retail CRM', href: '/industries/retail',
    text: 'Orders from placement to delivery, returns and service requests, plus a pipeline for bulk and corporate orders.',
    parts: ['Orders', 'Returns', 'Service requests', 'Bulk orders'],
    dash: {
      hello: 'Good morning — store at a glance', sub: '5 orders in progress · 1 out for delivery · 2 returns', tag: 'Ausumn Store (Demo)',
      kpis: [['5', 'Open orders'], ['₹60,547', 'Open order value'], ['1', 'Out for delivery'], ['2', 'Returns'], ['4.6', 'Average rating']],
      grid: { title: 'Stock by store',
        legend: [['In stock', G], ['Low', Y], ['Reorder', O], ['Out of stock', R]],
        groups: [
          { name: 'Bengaluru stores', cols: ['Phones', 'Laptops', 'TVs', 'Audio', 'Wearables'],
            rows: [['Indiranagar', '00102'], ['Koramangala', '01030'], ['Whitefield', '20013']] },
          { name: 'Warehouses', cols: ['Phones', 'Laptops', 'TVs', 'Audio', 'Wearables'],
            rows: [['Hosur WH', '00000'], ['Online', '01200']] }] },
      pipe: { title: 'Orders', rows: [['Placed', 1], ['Packed', 1], ['Shipped', 2], ['Out for Delivery', 1], ['Delivered', 1]] },
      side: { title: 'Bulk and corporate orders', stats: [['₹6.8 L', 'Bulk pipeline'], ['3', 'Service requests'], ['1.2 days', 'Avg delivery']] } } },
  { key: 'cn', label: 'Construction', name: 'Contractor CRM', href: '/industries/construction',
    text: 'Tenders, site projects by stage and RA bills, so the office and the site see the same progress.',
    parts: ['Tenders', 'Site projects', 'RA bills', 'Client enquiries'],
    dash: {
      hello: 'Good morning — sites at a glance', sub: '4 sites · 1 RA bill pending · 2 tenders open', tag: 'Ausumn Infra (Demo)',
      kpis: [['4', 'Active sites'], ['₹11.55 Cr', 'Contract value'], ['2', 'Tenders open'], ['₹1.8 Cr', 'RA bills pending'], ['63%', 'Avg progress']],
      grid: { title: 'Site progress — Greenline FMCG office G+4',
        legend: [['Done', G], ['In progress', Y], ['Inspection', B], ['Not started', S]],
        groups: [
          { name: 'Block A', cols: ['Columns', 'Slab', 'Blockwork', 'MEP'],
            rows: [['4F', '1333'], ['3F', '0213'], ['2F', '0021'], ['1F', '0001'], ['GF', '0000']] },
          { name: 'Block B', cols: ['Columns', 'Slab', 'Blockwork', 'MEP'],
            rows: [['4F', '3333'], ['3F', '1333'], ['2F', '0233'], ['1F', '0011'], ['GF', '0000']] }] },
      pipe: { title: 'Site projects', rows: [['Mobilisation', 1], ['Foundation', 1], ['Structure', 1], ['Finishing', 1]] },
      side: { title: 'Billing', stats: [['₹2.4 Cr', 'RA bills certified'], ['₹1.8 Cr', 'Pending approval'], ['₹45 L', 'Retention held']] } } }
];
