import { PaginationPropsDataTypes } from "@/types/props";
export default function Pagination({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationPropsDataTypes) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number, e: Event) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <nav>
      <div className='wrapper'>
        <ul className='pagiation'>
          {pageNumbers.map((number) => (
            <li key={number}></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
