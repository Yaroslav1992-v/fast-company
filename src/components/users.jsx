import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "./utils/paginate";
import PropTypes from "prop-types";
import api from "../api";
import GroupList from "./utils/groupList";
import searchStatus from "./searchStatus";
const Users = (user) => {
    const { people, handleDelete, handleBookMark } = user;
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 2;
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    });
    const handeProfessionsSelect = (item) => {
        setSelectedProf(item);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const filteredUsers = selectedProf
        ? people.filter((user) => user.profession.name === selectedProf.name)
        : people;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };
    const page = Math.ceil(count / pageSize);
    useEffect(() => {
        setCurrentPage(page);
    }, [page !== currentPage && page + 1 === currentPage && currentPage !== 1]);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);
    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handeProfessionsSelect}
                        valueProperty="_id"
                        contentProperty="name"
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <h2>{searchStatus(count)}</h2>
                {count > 0 && (
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
                )}
                <div className="d-flex jystify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};
Users.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object, PropTypes.array).isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookMark: PropTypes.func.isRequired
};
export default Users;
