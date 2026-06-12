import Card from '../Card/Card';

function Cards({ data }) {
  if (!data?.length) {
    return (
      <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 p-8 text-center">
        <p className="text-muted-foreground">No countries found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
      {data.map((country) => (
        <Card country={country} key={country.id ?? country.name} />
      ))}
    </div>
  );
}

export default Cards;
