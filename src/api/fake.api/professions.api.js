export const professionsObject = {
    doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
    waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
    physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
    engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
    actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
    cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" },
    cop: { _id: "67rdca3eeb6f6fgeed471829", name: "Полицейский" },
    banker: { _id: "67rdca3eeb74rted471829", name: "Банкир" },
    agent: { _id: "674dc53eeb7f6fgeed471829", name: "Спец-Анент" },
    spy: { _id: "67rdca3ee27f6fgeed471829", name: "Шпион" },
    queen: { _id: "67rdca3eeb7f6sveed471829", name: "Koролева" },
    sales: { _id: "67rdca3eertsxsveed471829", name: "Продавец" }
};
export const professions = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
    { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
    { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" },
    { _id: "67rdca3eeb6f6fgeed471829", name: "Полицейский" },
    { _id: "67rdca3eeb74rted471829", name: "Банкир" },
    { _id: "674dc53eeb7f6fgeed471829", name: "Спец-Анент" },
    { _id: "67rdca3ee27f6fgeed471829", name: "Шпион" },
    { _id: "67rdca3eeb7f6sveed471829", name: "Koролева" },
    { _id: "67rdca3eertsxsveed471829", name: "Продавец" }
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function() {
            resolve(professionsObject);
        }, 2000);
    });

export default {
    fetchAll
};
