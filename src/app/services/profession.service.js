import httpService from "./http.service";
const professionEndpoint = "profession/";
const professionSerice = {
    get: async () => {
        const { data } = await httpService.get(professionEndpoint);
        return data;
    }
};
export default professionSerice;
