import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-card">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">Countries</h1>
        <p className="mt-2 text-muted-foreground">Discover countries around the world</p>
        <Link to="/home" className="btn-primary mt-6 inline-flex w-full sm:w-auto">
          INGRESAR
        </Link>
      </div>
    </div>
  );
}

export default Landing;
