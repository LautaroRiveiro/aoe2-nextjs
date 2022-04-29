import axios from "axios";
import fs from 'fs/promises';
import { Civilization } from "../interfaces";

const aoe2API = axios.create({
  baseURL: 'https://age-of-empires-2-api.herokuapp.com/api/v1'
})

const getAllCivilizations = async (): Promise<Civilization[]> => {
  // const {data} = await aoe2API.get<CivilizationResponse>('/civilizations')
  // Local fetch to avoid API Calls
  const content = await fs.readFile('./services/civilizations.json', 'utf-8')
  const data = JSON.parse(content)
  return data.civilizations
}

const civilizations = {
  getAllCivilizations
}

export default civilizations