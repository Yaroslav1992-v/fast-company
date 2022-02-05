import httpService from "./http.service";
const userEndpoint = "user/";
const userSerice = {
    get: async () => {
        const { data } = await httpService.get(userEndpoint);
        return data;
    }
};
export default userSerice;
