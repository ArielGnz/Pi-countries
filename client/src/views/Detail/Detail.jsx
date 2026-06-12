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

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
      <Link
        to="/home"
        className="mb-4 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        ← Back to Home
      </Link>

      <article className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
        <div className="aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
          <img
            src={detail.image}
            alt={detail.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-4 p-5 sm:p-8">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{detail.name}</h1>

          <ul className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 sm:text-base">
            <li className="rounded-md bg-muted px-3 py-2">
              <span className="font-semibold text-foreground">Id:</span>{' '}
              <span className="text-muted-foreground">{detail.id}</span>
            </li>
            <li className="rounded-md bg-muted px-3 py-2">
              <span className="font-semibold text-foreground">Continent:</span>{' '}
              <span className="text-muted-foreground">{detail.continent}</span>
            </li>
            <li className="rounded-md bg-muted px-3 py-2">
              <span className="font-semibold text-foreground">Population:</span>{' '}
              <span className="text-muted-foreground">
                {detail.poblation?.toLocaleString?.() ?? detail.poblation}
              </span>
            </li>
            <li className="rounded-md bg-muted px-3 py-2">
              <span className="font-semibold text-foreground">Capital:</span>{' '}
              <span className="text-muted-foreground">{detail.capital}</span>
            </li>
            <li className="rounded-md bg-muted px-3 py-2">
              <span className="font-semibold text-foreground">Area:</span>{' '}
              <span className="text-muted-foreground">
                {detail.area?.toLocaleString?.() ?? detail.area} km²
              </span>
            </li>
            <li className="rounded-md bg-muted px-3 py-2">
              <span className="font-semibold text-foreground">Subregion:</span>{' '}
              <span className="text-muted-foreground">{detail.subregion}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Detail;
