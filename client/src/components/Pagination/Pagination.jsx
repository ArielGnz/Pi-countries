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
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      <button
        type="button"
        className="btn-outline min-w-[80px]"
        onClick={prev}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <span className="inline-flex min-w-[100px] items-center justify-center rounded-md border-2 border-primary bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
        {currentPage} / {page || 1}
      </span>

      <button
        type="button"
        className="btn-outline min-w-[80px]"
        onClick={next}
        disabled={currentPage === page || page === 0}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
