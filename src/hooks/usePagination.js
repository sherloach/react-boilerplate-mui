import { useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const _changePage = (event, newPage) => setPage(newPage);

  const _changePerPage = (event) => {
    setPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    page,
    perPage,
    _changePage,
    _changePerPage,
  };
};

export default usePagination;
