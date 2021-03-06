import React from "react";
const renderPhrase = (number, check) => {
    const num = number % 10;
    const bool = number > 11 && number < 15;
    const hangOut =
        !bool && num < 5 && num > 1 ? "человека  тусанут" : "человек  тусанет";
    const phrase =
        number > 0
            ? ` ${hangOut}  с тобой сегодня`
            : !check
                ? "Загрузка..."
                : " никто не тусанет с тобой";
    let hangOutClass = "badge ";
    hangOutClass += !check
        ? "bg-secondary"
        : number > 0
            ? "bg-primary"
            : "bg-danger";
    return (
        <span className={hangOutClass}>
            {number > 0 ? number : ""}
            {phrase}
        </span>
    );
};
export default renderPhrase;
