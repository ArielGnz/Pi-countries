import { Link } from 'react-router-dom';

const continentColors = {
  Americas: 'bg-emerald-100 text-emerald-800 border-emerald-200/50 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-900/30',
  Europe: 'bg-blue-100 text-blue-800 border-blue-200/50 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-900/30',
  Asia: 'bg-amber-100 text-amber-800 border-amber-200/50 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-900/30',
  Africa: 'bg-rose-100 text-rose-800 border-rose-200/50 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-900/30',
  Oceania: 'bg-purple-100 text-purple-800 border-purple-200/50 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-900/30',
  Antarctic: 'bg-sky-100 text-sky-800 border-sky-200/50 dark:bg-sky-950/70 dark:text-sky-300 dark:border-sky-900/30',
};

function Card({ country }) {
  const { image, name, continent, poblation, id } = country;

  const badgeClass = continentColors[continent] || 'bg-muted text-muted-foreground border-border/50';

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5">
      <Link className="flex flex-1 flex-col no-underline text-card-foreground" to={`/detail/${id}`}>
        
        {/* Flag Image Cover with continent badge */}
        <div className="relative aspect-[1.5/1] overflow-hidden bg-muted/20">
          <img
            src={image}
            alt={`Flag of ${name}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className={`absolute left-3 top-3 rounded-full border px-2.5 py-0.5 text-xs font-bold backdrop-blur-md shadow-sm transition-colors ${badgeClass}`}>
            {continent}
          </span>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
          <div className="space-y-1.5">
            <h2 className="text-lg font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 line-clamp-1 group-hover:text-primary sm:text-xl">
              {name}
            </h2>
            
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <svg className="h-4 w-4 text-muted-foreground/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{poblation?.toLocaleString?.() ?? poblation} people</span>
            </div>
          </div>

          {/* Card footer details link */}
          <div className="mt-4 flex items-center text-xs font-bold text-primary group-hover:text-primary/85 transition-colors">
            <span>View Details</span>
            <svg
              className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Card;
