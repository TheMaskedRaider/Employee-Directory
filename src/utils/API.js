//importing axios for use with react
import axios from "axios"

//exporting the getRandomEmployee function which returns an array of random users/employees.
export default {
    getRandomEmployee: function () {
        return axios.get("https://randomuser.me/api/?results=100&nat=us");
    }
}
