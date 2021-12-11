import React from "react";
const renderQualities = (qualities) => {
    const getBageClasses = (color) => {
        let classes = "badge rounded-pill m-2 bg-";
        classes += color;
        return classes;
    };
    return qualities.map((quality) => {
        const { _id, color, name } = quality;
        return (
            <span key={_id} className={getBageClasses(color)}>
                {name}
            </span>
        );
    });
};

export default renderQualities;
