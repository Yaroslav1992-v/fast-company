import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";
import api from "../api";
import GroupList from "./utils/groupList";
import searchStatus from "./searchStatus";
import UserTable from "./usersTable";
import _ from "lodash";
const Users = () => {
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const pageSize = 8;
    const [users, setUsers] = useState([]);
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter((id) => id._id !== userId));
    };
    const handleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
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
    const handleSort = (item) => {
        setSortBy(item);
    };

    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession.name === selectedProf.name)
        : users;
    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);
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
            <div className="d-flex flex-column w-100">
                <h2>{searchStatus(count, professions)}</h2>
                {count > 0 && (
                    <UserTable
                        users={userCrop}
                        handleDelete={handleDelete}
                        handleBookMark={handleBookMark}
                        onSort={handleSort}
                        selectedSort={sortBy}
                    ></UserTable>
                )}
                <div className="d-flex justify-content-center">
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
export default Users;
