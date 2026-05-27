const IconHouse = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <path
      d="M10 24L26 10L42 24V44H32V34H20V44H10V24Z"
      stroke="#03050F"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <circle cx="36" cy="16" r="5" fill="#FF6B9D" />
  </svg>
)

const IconHospital = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect x="10" y="16" width="28" height="30" rx="1" stroke="#03050F" strokeWidth="2" />
    <rect x="16" y="26" width="6" height="6" stroke="#03050F" strokeWidth="1.5" />
    <rect x="26" y="26" width="6" height="6" stroke="#03050F" strokeWidth="1.5" />
    <rect x="16" y="36" width="6" height="10" stroke="#03050F" strokeWidth="1.5" />
    <rect x="26" y="36" width="6" height="10" stroke="#03050F" strokeWidth="1.5" />
    <path d="M18 16V12H30V16" stroke="#03050F" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="38" cy="14" r="6" fill="#FF6B9D" />
    <path d="M38 11v6M35 14h6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const getPlanIcon = (planName: string) => {
  const lower = planName.toLowerCase()
  if (lower.includes('clínica') || lower.includes('clinica')) {
    return <IconHospital />
  }
  return <IconHouse />
}
