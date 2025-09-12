export function SkeletonCard() {
  return (
    <div className="card overflow-hidden">
      <div className="h-44 w-full bg-slate-200 animate-pulse" />
      <div className="p-4 space-y-2">
        <div className="h-4 w-2/3 bg-slate-200 animate-pulse rounded"></div>
        <div className="h-3 w-1/2 bg-slate-200 animate-pulse rounded"></div>
        <div className="h-3 w-1/3 bg-slate-200 animate-pulse rounded"></div>
      </div>
    </div>
  )
}
