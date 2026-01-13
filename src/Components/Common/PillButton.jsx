export default function PillButton({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center
        px-6 py-2
        text-sm font-medium
        text-blue-600
        bg-blue-50
        rounded-full
        hover:bg-blue-100
        transition
        ${className}
      `}
    >
      {text}
    </button>
  )
}
