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
        profession: professions.doctor,
        qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        completedMeetings: 36,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Кокс",
        profession: professions.doctor,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 15,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Боб Келсо",
        profession: professions.doctor,
        qualities: [qualities.buller],
        completedMeetings: 247,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Рэйчел Грин",
        profession: professions.waiter,
        qualities: [qualities.uncertain],
        completedMeetings: 148,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Шелдон Купер",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 37,
        rate: 4.6,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Леонард Хофстедтер",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 147,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Говард Воловиц",
        profession: professions.engineer,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 72,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Никола Тесла",
        profession: professions.engineer,
        qualities: [qualities.handsome],
        completedMeetings: 72,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Моника Геллер",
        profession: professions.cook,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Рататуй",
        profession: professions.cook,
        qualities: [qualities.handsome, qualities.buller],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Джоуи Триббиани",
        profession: professions.actor,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 434,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Брэд Питт",
        profession: professions.actor,
        qualities: [qualities.handsome],
        completedMeetings: 434,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47112s",
        name: "Декстер Морган",
        profession: professions.cop,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 90,
        rate: 4,
        bookmark: false
    },
    {
        _id: "67rdcdsa7f6fgeed47112s",
        name: "Джек Бауер",
        profession: professions.agent,
        qualities: [qualities.buller, qualities.handsome],
        completedMeetings: 34,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7fasgeed47112s",
        name: "Елизавета II",
        profession: professions.queen,
        qualities: [qualities.buller, qualities.alcoholic],
        completedMeetings: 234,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdcaxxs7f6fgeed47112s",
        name: "Джеймс Бонд",
        profession: professions.spy,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 139,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rxcaxxs8f6fgeed47112s",
        name: "Тирион Ланнистер",
        profession: professions.banker,
        qualities: [qualities.buller, qualities.smart, qualities.alcoholic],
        completedMeetings: 19,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rxcaxxs8f6fgeedl7112p",
        name: "Джейк Харпер",
        profession: professions.cook,
        qualities: [qualities.dumb, qualities.tedious],
        completedMeetings: 89,
        rate: 2,
        bookmark: false
    },
    {
        _id: "67rxcaxsad8f6fgeedl7112p",
        name: "Уолтер Уайт",
        profession: professions.cook,
        qualities: [qualities.smart, qualities.buller],
        completedMeetings: 28,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rxcaxxs8s6fgeed47112s",
        name: "Серсея Ланнистер",
        profession: professions.queen,
        qualities: [qualities.buller, qualities.alcoholic],
        completedMeetings: 1239,
        rate: 3,
        bookmark: false
    },
    {
        _id: "67rxcaxxs8faseed47112s",
        name: "Майкл Скотт",
        profession: professions.sales,
        qualities: [qualities.dumb, qualities.tedious],
        completedMeetings: 831,
        rate: 3,
        bookmark: false
    },
    {
        _id: "67rxcasxs8faseed47112s",
        name: "Майкл Скофилд",
        profession: professions.engineer,
        qualities: [qualities.smart, qualities.handsome],
        completedMeetings: 239,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rxcasxs8facdsa7112s",
        name: "Рик Гримс",
        profession: professions.cop,
        qualities: [qualities.strange],
        completedMeetings: 219,
        rate: 3,
        bookmark: false
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(users);
        }, 2000);
    });

export default {
    fetchAll
};
