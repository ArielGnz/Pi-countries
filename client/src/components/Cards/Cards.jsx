import Card from '../Card/Card';

function Cards({ data }) {
  if (!data?.length) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center animate-fade-in">
        <div className="rounded-full bg-muted p-4 text-muted-foreground/70 mb-4">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-foreground">No countries found</h3>
        <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
          We couldn't find any countries matching your criteria. Try adjusting your filters or spelling.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((country) => (
        <Card country={country} key={country.id ?? country.name} />
      ))}
    </div>
  );
}

export default Cards;
