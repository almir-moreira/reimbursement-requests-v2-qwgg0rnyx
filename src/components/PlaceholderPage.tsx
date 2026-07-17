export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="max-w-4xl mx-auto space-y-6 pt-4 animate-fade-in">
      <h1 className="text-4xl font-bold font-serif text-primary">{title}</h1>
      <div className="p-12 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50 text-center flex flex-col items-center justify-center min-h-[300px]">
        <p className="text-lg font-medium text-slate-500">
          This module will be implemented in a later phase.
        </p>
      </div>
    </div>
  )
}
