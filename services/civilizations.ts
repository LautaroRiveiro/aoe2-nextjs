import axios from "axios";
import { Civilization, CivilizationResponse } from "../interfaces";

const aoe2API = axios.create({
  baseURL: 'https://age-of-empires-2-api.herokuapp.com/api/v1'
})

const getAllCivilizations = async (): Promise<Civilization[]> => {
  const {data} = await aoe2API.get<CivilizationResponse>('/civilizations')
  return data.civilizations
}

const civilizations = {
  getAllCivilizations
}

export default civilizations