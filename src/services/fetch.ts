import axios from "axios"
import { COUNTRY_SPECIFIC_COVID_DATA, GRAPH_COVID_DATA, WORLD_WIDE_COVID_DATA } from "../constants/constants"
// fetch data from url

const fetchData = async (url: string) => {
    const response = await axios.get(url)
    return response.data
}

// world covid data

const worldCovidData = fetchData(WORLD_WIDE_COVID_DATA)

// country covid data

const countryCovidData = fetchData(COUNTRY_SPECIFIC_COVID_DATA)

// graph covid data

const graphCovidData = fetchData(GRAPH_COVID_DATA)

export { worldCovidData, countryCovidData, graphCovidData }