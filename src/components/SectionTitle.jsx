export default function SectionTitle({ eyebrow, title, cta, href }) {
  return (
    <div className="flex items-end justify-between mb-5">
      <div>
        {eyebrow && <p className="text-brand text-sm font-medium">{eyebrow}</p>}
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      </div>
      {cta && href && (
        <a href={href} className="text-brand hover:underline">{cta} →</a>
      )}
    </div>
  )
}
