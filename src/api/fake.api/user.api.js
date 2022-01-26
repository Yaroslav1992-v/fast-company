import { professionsObject as professions } from "./professions.api";
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

const users = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Джон Дориан",
        email: "Jony7351@tw.com",
        sex: "male",
        profession: professions.doctor,
        qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        completedMeetings: 36,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Кокс",
        email: "white4571@twipet.com",
        sex: "male",
        profession: professions.doctor,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 15,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Боб Келсо",
        email: "bob007@tw.com",
        sex: "male",
        profession: professions.doctor,
        qualities: [qualities.buller],
        completedMeetings: 247,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Рэйчел Грин",
        email: "green7311@fam.biz",
        sex: "female",
        profession: professions.waiter,
        qualities: [qualities.uncertain],
        completedMeetings: 148,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Шелдон Купер",
        email: "mindgames6878@phis.tech",
        sex: "male",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 37,
        rate: 4.6,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Леонард Хофстедтер",
        email: "mindes000@phis.tech",
        sex: "male",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 147,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Говард Воловиц",
        email: "gov1903@phis.tech",
        sex: "male",
        profession: professions.engineer,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 72,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Никола Тесла",
        email: "electro@underground.tech",
        sex: "male",
        profession: professions.engineer,
        qualities: [qualities.handsome],
        completedMeetings: 72,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Моника Геллер",
        email: "mono@super.com",
        sex: "female",
        profession: professions.cook,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Рататуй",
        email: "ratatatata@underground.com",
        sex: "male",
        profession: professions.cook,
        qualities: [qualities.handsome, qualities.buller],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Джоуи Триббиани",
        email: "joe@trib.com",
        sex: "male",
        profession: professions.actor,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 434,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Брэд Питт",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.actor,
        qualities: [qualities.handsome],
        completedMeetings: 434,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47112s",
        name: "Декстер Морган",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.cop,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 90,
        rate: 4,
        bookmark: false
    },
    {
        _id: "67rdcdsa7f6fgeed47112s",
        name: "Джек Бауер",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.agent,
        qualities: [qualities.buller, qualities.handsome],
        completedMeetings: 34,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7fasgeed47112s",
        name: "Елизавета II",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.queen,
        qualities: [qualities.buller, qualities.alcoholic],
        completedMeetings: 234,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdcaxxs7f6fgeed47112s",
        name: "Джеймс Бонд",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.spy,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 139,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rxcaxxs8f6fgeed47112s",
        name: "Тирион Ланнистер",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.banker,
        qualities: [qualities.buller, qualities.smart, qualities.alcoholic],
        completedMeetings: 19,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rxcaxxs8f6fgeedl7112p",
        name: "Джейк Харпер",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.cook,
        qualities: [qualities.dumb, qualities.tedious],
        completedMeetings: 89,
        rate: 2,
        bookmark: false
    },
    {
        _id: "67rxcaxsad8f6fgeedl7112p",
        name: "Уолтер Уайт",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.cook,
        qualities: [qualities.smart, qualities.buller],
        completedMeetings: 28,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rxcaxxs8s6fgeed47112s",
        name: "Серсея Ланнистер",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.queen,
        qualities: [qualities.buller, qualities.alcoholic],
        completedMeetings: 1239,
        rate: 3,
        bookmark: false
    },
    {
        _id: "67rxcaxxs8faseed47112s",
        name: "Майкл Скотт",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.sales,
        qualities: [qualities.dumb, qualities.tedious],
        completedMeetings: 831,
        rate: 3,
        bookmark: false
    },
    {
        _id: "67rxcasxs8faseed47112s",
        name: "Майкл Скофилд",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.engineer,
        qualities: [qualities.smart, qualities.handsome],
        completedMeetings: 239,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rxcasxs8facdsa7112s",
        name: "Рик Гримс",
        email: "superstar@star.com",
        sex: "male",
        profession: professions.cop,
        qualities: [qualities.strange],
        completedMeetings: 219,
        rate: 3,
        bookmark: false
    }
];

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("users")));
        }, 2000);
    });
const update = (id, data) =>
    new Promise((resolve) => {
        const users = JSON.parse(localStorage.getItem("users"));
        const userIndex = users.findIndex((u) => u._id === id);
        users[userIndex] = { ...users[userIndex], ...data };
        localStorage.setItem("users", JSON.stringify(users));
        resolve(users[userIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (user) => user._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update
};
