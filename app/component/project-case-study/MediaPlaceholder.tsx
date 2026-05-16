type MediaPlaceholderProps = {
  title: string;
  description: string;
};

export function MediaPlaceholder({ title, description }: MediaPlaceholderProps) {
  return (
    <section className="rounded-3xl border border-dashed border-black/20 bg-[#f9f8f4] p-6 md:p-8">
      <h2 className="text-2xl">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="aspect-video rounded-2xl border border-black/15 bg-white p-4 text-sm text-muted-foreground">
          Image Placeholder A
        </div>
        <div className="aspect-video rounded-2xl border border-black/15 bg-white p-4 text-sm text-muted-foreground">
          Image Placeholder B
        </div>
      </div>
    </section>
  );
}
