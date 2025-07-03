export default function StepDetail({ params }: any) {
  const { step } = params;

  const details: any = {
    'class-2-medical': 'You need to visit a DGCA-approved Class 2 medical examiner...',
    'computer-number': 'Apply for computer number through pariksha.dgca.gov.in...',
    'class-1-medical': 'Class 1 medical is required before starting flying...',
    'dgca-exams': 'Pass Air Navigation, Meteorology, Technical General, etc...',
    'flying-training': 'Enroll in a DGCA-approved flying school. Minimum 200 hours...',
    'rtr-exam': 'RTR(A) is conducted by WPC. It is a license to use aircraft radio...',
    'apply-cpl': 'Submit all required documents to DGCA to obtain your CPL...',
    'airline-job': 'Prepare for airline exams, interviews and simulator checks...',
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{step.replace(/-/g, ' ').toUpperCase()}</h1>
      <p>{details[step]}</p>
    </div>
  );
}
