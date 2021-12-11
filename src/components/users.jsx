import React, { useState } from "react";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "./utils/paginate";
import PropTypes from "prop-types";
const Users = (user) => {
    const { people, handleDelete, handleBookMark, search } = user;
    const count = people.length;
    const pageSize = 7;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(people, currentPage, pageSize);
    return (
        <>
            <h2>{search(people.length)}</h2>
            {people.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился,раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User
                                key={user._id}
                                {...user}
                                handleDelete={handleDelete}
                                handleBookMark={handleBookMark}
                            ></User>
                        ))}
                    </tbody>
                </table>
            ) : (
                ""
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookMark: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired
};
export default Users;
