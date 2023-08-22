function Pagination({currentPage, setCurrentPage, totalCharacters}) {

    const pages = []
    const totalPages = Math.ceil(totalCharacters/10)
    const disablePrevious = currentPage == 1 ? "disabled": ""
    const disableNext = currentPage == totalPages? "disabled": ""


    for(let i = 1; i<=totalPages; i++){
        const active = i == currentPage? "active": ""
        pages.push(
            <li className={`page-item ${active}`} onClick={()=>setCurrentPage(i)}>
                <a className="page-link">
                    {i}
            </a>
            </li>
        )
    }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${disablePrevious}`}>
          <a className="page-link" disabled={disablePrevious} onClick={()=>setCurrentPage(currentPage-1)}>
            Previous
          </a>
        </li>
        {pages}
        <li className={`page-item ${disableNext}`}>
          <a className="page-link" onClick={()=>setCurrentPage(currentPage+1)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
