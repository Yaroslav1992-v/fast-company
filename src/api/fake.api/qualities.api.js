const qualities = {
    tedious: {
        _id: "67rdca3eeb7f6fgeed471198",
        name: "Нудила",
        color: "primary"
    },
    strange: {
        _id: "67rdca3eeb7f6fgeed471100",
        name: "Странный",
        color: "secondary"
    },
    buller: {
        _id: "67rdca3eeb7f6fgeed4711012",
        name: "Троль",
        color: "success"
    },
    alcoholic: {
        _id: "67rdca3eeb7f6fgeed471101",
        name: "Алкоголик",
        color: "danger"
    },
    handsome: {
        _id: "67rdca3eeb7f6fgeed471102",
        name: "Красавчик",
        color: "info"
    },
    uncertain: {
        _id: "67rdca3eeb7f6fgeed471103",
        name: "Неуверенный",
        color: "dark"
    },
    smart: { _id: "67rdca3eeb7f6fdee471102", name: "Умный", color: "info" },
    dumb: { _id: "67rdca3esadwped471103", name: "Тупой", color: "dark" }
};
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(qualities);
        }, 2000);
    });
export default {
    fetchAll
};
