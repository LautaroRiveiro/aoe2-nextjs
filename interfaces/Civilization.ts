export interface CivilizationResponse {
  civilizations: Civilization[];
}

export interface Civilization {
  id:                 number;
  name:               string;
  expansion:          Expansion;
  army_type:          string;
  unique_unit:        string[];
  unique_tech:        string[];
  team_bonus:         string;
  civilization_bonus: string[];
}

export enum Expansion {
  AfricanKingdoms = "African Kingdoms",
  AgeOfKings = "Age of Kings",
  ForgottenEmpires = "Forgotten Empires",
  RiseOfRajas = "Rise of Rajas",
  TheConquerors = "The Conquerors",
}
