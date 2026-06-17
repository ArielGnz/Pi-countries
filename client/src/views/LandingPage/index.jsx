import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/20 px-4">
      {/* Visual background decorations - glowing blur orbs */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-[80px]" />
      <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[80px]" />

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Main glass card */}
      <div className="animate-fade-in relative z-10 w-full max-w-lg rounded-2xl border border-white/20 dark:border-white/5 bg-card/65 dark:bg-card/45 p-8 text-center backdrop-blur-xl shadow-2xl shadow-primary/5">
        
        {/* Animated Globe Icon Container */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-primary/20 to-emerald-500/20 shadow-inner">
          <svg
            className="h-12 w-12 text-primary animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.905 0-5.54-1.037-7.614-2.766m15.357 5.02a11.201 11.201 0 01-1.52 3.006M4.274 12.754a11.201 11.201 0 001.52 3.006M12 18c-2.905 0-5.54-1.037-7.614-2.766M12 18c2.905 0 5.54 1.037 7.614 2.766"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="bg-gradient-to-r from-primary via-primary to-emerald-500 bg-clip-text text-transparent dark:to-emerald-400">
            Countries
          </span>
        </h1>
        
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Descubre países, explora detalles y crea actividades personalizadas en todo el mundo.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <Link
            to="/home"
            className="btn-primary group relative w-full overflow-hidden px-8 py-3.5 text-base sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Ingresar App
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
          <span className="text-xs text-muted-foreground/60 font-medium uppercase tracking-widest">
            Ariel Individual Project
          </span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
