function Pagination({ currentPage, setCurrentPage, page }) {
  const next = () => {
    if (currentPage !== page) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <button
        type="button"
        className="btn-outline flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all disabled:opacity-30 disabled:pointer-events-none"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Prev</span>
      </button>

      <span className="inline-flex min-w-[110px] items-center justify-center rounded-full bg-muted/65 border border-border/80 px-4 py-2 text-xs font-bold text-foreground tracking-wider uppercase">
        Page {currentPage} of {page || 1}
      </span>

      <button
        type="button"
        className="btn-outline flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all disabled:opacity-30 disabled:pointer-events-none"
        onClick={next}
        disabled={currentPage === page || page === 0}
      >
        <span>Next</span>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
