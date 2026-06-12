import { Link } from 'react-router-dom';

function Card({ country }) {
  const { image, name, continent, poblation, id } = country;

  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <Link className="block no-underline text-card-foreground" to={`/detail/${id}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2 p-4 sm:p-5">
          <h2 className="text-lg font-bold leading-tight sm:text-xl">{name}</h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Continent:</span> {continent}
            </li>
            <li>
              <span className="font-medium text-foreground">Population:</span>{' '}
              {poblation?.toLocaleString?.() ?? poblation}
            </li>
          </ul>
        </div>
      </Link>
    </article>
  );
}

export default Card;
