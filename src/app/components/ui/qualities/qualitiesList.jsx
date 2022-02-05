import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualities }) => {
    const { isLoading, getQuality } = useQualities();
    const quals = qualities.map((id) => getQuality(id));
    return (
        <>
            {!isLoading ? quals.map((qual) => (
                <Quality key={qual._id} {...qual} />
            )) : "is Loading"}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
