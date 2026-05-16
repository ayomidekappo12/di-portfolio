type MediaPlaceholderProps = {
  sectionLabel: string;
  title: string;
  description: string;
  placeholders: string[];
};

export function MediaPlaceholder({
  sectionLabel,
  title,
  description,
  placeholders,
}: MediaPlaceholderProps) {
  return (
    <section className="rounded-[2rem] border border-black/10 bg-white p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {sectionLabel}
      </p>
      <h2 className="mt-2 text-2xl md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-muted-foreground md:text-base">{description}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {placeholders.map((placeholder) => (
          <div
            key={placeholder}
            className="flex aspect-video items-end rounded-2xl border border-dashed border-black/20 bg-[#f7f5ef] p-4"
          >
            <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-muted-foreground">
              {placeholder}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
