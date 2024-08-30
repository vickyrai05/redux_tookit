import axios from "axios";

export async function getApi(url) {
    let response = await axios.get(url)
    return response.data
}
