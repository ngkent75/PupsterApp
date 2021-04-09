import axios from "axios";

const RANDOM = "https://dog.ceo/api/breeds/image/random";
const IMAGES = "https://dog.ceo/api/breed/" + query + "/images";

// Export an object with a "search" method that searches the Dog Ceo API for the passed query
export default {
    search: function (query) {
        return axios.get(IMAGES + query);
    },
    random: function (query) {
        return axios.get(RANDOM);
    }
};