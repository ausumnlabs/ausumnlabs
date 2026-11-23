// Industry modules built and tested in our Bitrix24 portal. Stages and cards mirror the
// demo data there (fictional names only, never real customer records).
export type Board = { title: string; stages: Array<{ name: string; color: string; cards: Array<[string, number?]> }> };
export type IndustryModule = {
  key: string; label: string; name: string; text: string; href: string;
  parts: string[]; board?: Board; shot?: { src: string; w: number; h: number; alt: string };
};

const C = ['#47A3F3', '#FFC34D', '#2FC6F6', '#FFA900'];
const b = (title: string, cols: Array<[string, Array<[string, number?]>]>): Board =>
  ({ title, stages: cols.map(([name, cards], i) => ({ name, color: C[i % C.length], cards })) });

export const INDUSTRY_MODULES: IndustryModule[] = [
  { key: 're', label: 'Real estate', name: 'Broker, Builder and Agency CRM', href: '/real-estate',
    text: 'Our own real estate modules: property inventory, buyer matching, site visits, unit cost sheets and channel partner commissions.',
    parts: ['Broker CRM', 'Builder CRM', 'Agency CRM', 'Unit inventory'],
    shot: { src: '/screens/broker-overview.webp', w: 1600, h: 1522, alt: 'Broker CRM overview dashboard in Bitrix24' } },
  { key: 'hc', label: 'Healthcare', name: 'Clinic CRM', href: '/industries/healthcare',
    text: 'Patients, appointments, treatment plans and lab orders linked on one record, with WhatsApp reminders and insurance pre-auth tracking.',
    parts: ['Patients', 'Appointments', 'Treatment plans', 'Lab orders'],
    board: b('Patients', [
      ['New Registration', [['Fatima Shaikh · PT-1043'], ['Imran Qureshi · PT-1048']]],
      ['Under Treatment', [['Ananya Rao · PT-1041'], ['Meera Iyer · PT-1045']]],
      ['Follow-up Due', [['Rahul Menon · PT-1042'], ['Arjun Kulkarni · PT-1046']]],
      ['Long-term Care', [['Vikram Joshi · PT-1044']]]]) },
  { key: 'mf', label: 'Manufacturing', name: 'Factory CRM', href: '/industries/manufacturing',
    text: 'From dealer quotation to production order, quality check, dispatch and after-sales service tickets.',
    parts: ['Quotations', 'Production orders', 'Dispatches', 'Service tickets'],
    board: b('Production Orders', [
      ['Planned', [['WO-2613 · Voltek busbar spares']]],
      ['Material Issued', [['WO-2612 · Kaveri valve bodies']]],
      ['In Production', [['WO-2611 · Voltek busbar set']]],
      ['Quality Check', [['WO-2608 · Kaveri valve bodies (lot 1)']]]]) },
  { key: 'it', label: 'IT services', name: 'IT Services CRM', href: '/industries/professional-services',
    text: 'Projects from kickoff to go-live, support tickets with SLAs, and AMC contracts that remind you before renewal.',
    parts: ['Projects', 'Support tickets', 'AMC contracts', 'Services sales'],
    board: b('IT Projects', [
      ['Kickoff', [['PRJ-303 · Bluebay Foods ERP integration', 980000]]],
      ['Development', [['PRJ-301 · Orbit Logistics customer portal', 1450000], ['PRJ-305 · Kite Finserv sales dashboard', 360000]]],
      ['UAT', [['PRJ-302 · Zenith Realty CRM rollout', 620000]]],
      ['Go-live Prep', [['PRJ-304 · Pinnacle Edu AWS migration', 540000]]]]) },
  { key: 'ed', label: 'Education', name: 'Institute CRM', href: '/industries/education',
    text: 'Admissions from enquiry to enrolment, student records and fee collection with automatic reminders.',
    parts: ['Admissions', 'Students', 'Fee collections', 'Corporate training'],
    board: b('Admissions', [
      ['Enquiry', [['Rohan Das · Data Science', 120000]]],
      ['Counselling', [['Aditya Verma · MBA', 650000], ['Siddharth Jain · Class 11', 180000]]],
      ['Campus Visit', [['Priya Nair · B.Tech', 480000]]],
      ['Fee Pending', [['Kavya Reddy · BBA', 360000]]]]) },
  { key: 'rt', label: 'Retail', name: 'Retail CRM', href: '/industries/retail',
    text: 'Orders from placement to delivery, returns and service requests, plus a pipeline for bulk and corporate orders.',
    parts: ['Orders', 'Returns', 'Service requests', 'Bulk orders'],
    board: b('Orders', [
      ['Placed', [['ORD-55021 · Ritu Sharma', 4899]]],
      ['Packed', [['ORD-55022 · Karan Malhotra', 12999]]],
      ['Shipped', [['ORD-55023 · Divya Menon', 2350], ['ORD-55025 · Sana Khan', 1799]]],
      ['Out for Delivery', [['ORD-55024 · Aman Singh', 38500]]]]) },
  { key: 'cn', label: 'Construction', name: 'Contractor CRM', href: '/industries/construction',
    text: 'Tenders, site projects by stage and RA bills, so the office and the site see the same progress.',
    parts: ['Tenders', 'Site projects', 'RA bills', 'Client enquiries'],
    board: b('Site Projects', [
      ['Mobilisation', [['Factory boundary wall · Voltek', 7500000]]],
      ['Foundation', [['Kaveri Exports godown', 21000000]]],
      ['Structure', [['Greenline FMCG office G+4', 54000000]]],
      ['Finishing', [['Metro Infra staff quarters', 33000000]]]]) }
];
