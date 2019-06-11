import Axios from "axios";

const KEY = "5a012ca8f59e2543842ebe500f1804a6";

export default Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/"
});
