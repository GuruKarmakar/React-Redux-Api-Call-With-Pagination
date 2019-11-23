import React from 'react';

const Pagination = ({ postPerPage, totalPost, peginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className="pagination">
                <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                {
                    pageNumbers.map(number => (
                        <li
                            className={currentPage === number ? 'active' : ''}
                            style={{backgroundColor : currentPage === number ? '#d500f9' : ''}}
                            key={number}
                            onClick={() => peginate(number)}>
                            <a href="#!">{number}</a>
                        </li>
                    ))
                }

                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    );
}

export default Pagination;