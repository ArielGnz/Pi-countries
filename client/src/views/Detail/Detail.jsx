import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getDetail } from '../../redux/actions';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  if (!detail?.name) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center px-4">
        <p className="text-muted-foreground">Loading country details...</p>
      </div>
    );
  }

  const activities = detail.Activities || detail.activities || [];

  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 lg:px-8 animate-fade-in">
      <Link
        to="/home"
        className="group mb-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary/80"
      >
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>

      <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
        {/* Hero Banner Flag Section */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted">
          {/* Blurred background flag for cinematic effect */}
          <img
            src={detail.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover blur-md scale-110 opacity-30 dark:opacity-20"
          />
          {/* Actual crisp flag in center */}
          <div className="relative flex h-full w-full items-center justify-center p-4">
            <img
              src={detail.image}
              alt={`Flag of ${detail.name}`}
              className="h-[80%] max-h-48 rounded-lg border border-white/20 dark:border-white/10 object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Country Profile
            </span>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {detail.name}
            </h1>
          </div>

          {/* Metrics Grid with SVG Icons */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Country ID Code */}
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Country Code</p>
                <p className="font-bold text-foreground">{detail.id}</p>
              </div>
            </div>

            {/* Capital */}
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Capital</p>
                <p className="font-bold text-foreground">{detail.capital || 'N/A'}</p>
              </div>
            </div>

            {/* Continent */}
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2 2 0 002-2V7.5C19 6.12 17.88 5 16.5 5c-1.38 0-2.5-1.12-2.5-2.5V3m-3.95 19.95A9 9 0 1122 12c0 2.485-.9 4.761-2.386 6.51" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Continent</p>
                <p className="font-bold text-foreground">{detail.continent}</p>
              </div>
            </div>

            {/* Subregion */}
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Subregion</p>
                <p className="font-bold text-foreground">{detail.subregion || 'N/A'}</p>
              </div>
            </div>

            {/* Population */}
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Population</p>
                <p className="font-bold text-foreground">
                  {detail.poblation?.toLocaleString?.() ?? detail.poblation ?? 0}
                </p>
              </div>
            </div>

            {/* Area */}
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Area Size</p>
                <p className="font-bold text-foreground">
                  {detail.area?.toLocaleString?.() ?? detail.area ?? 0} km²
                </p>
              </div>
            </div>

          </div>

          {/* Tourist Activities Section */}
          <div className="border-t border-border/60 pt-8">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Tourist Activities
            </h2>

            {activities.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/15 p-6 text-center">
                <p className="text-sm text-muted-foreground">No tourist activities registered for this country yet.</p>
                <Link
                  to="/create"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  Create new activity
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {activities.map((act) => {
                  const difficultyStars = Array.from({ length: 5 }, (_, i) => i < Number(act.difficulty));
                  const seasonColors = {
                    summer: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
                    winter: 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300',
                    autumn: 'bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300',
                    spring: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
                  };
                  const seasonClass = seasonColors[act.season?.toLowerCase()] || 'bg-muted text-muted-foreground';

                  return (
                    <div
                      key={act.id ?? act.name}
                      className="rounded-xl border border-border/80 bg-card p-4 shadow-sm space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-foreground text-base leading-tight">
                          {act.name}
                        </h3>
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold capitalize ${seasonClass}`}>
                          {act.season}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
                        {/* Difficulty rating stars */}
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Difficulty</span>
                          <div className="flex items-center gap-0.5">
                            {difficultyStars.map((filled, idx) => (
                              <svg
                                key={idx}
                                className={`h-4.5 w-4.5 ${
                                  filled ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'
                                }`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Duration</span>
                          <span className="font-bold text-foreground flex items-center gap-1">
                            <svg className="h-3.5 w-3.5 text-muted-foreground/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {act.duration} {Number(act.duration) === 1 ? 'hour' : 'hours'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </article>
    </div>
  );
}

export default Detail;
