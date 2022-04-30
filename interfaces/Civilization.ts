export interface CivilizationResponse {
  civilizations: Civilization[];
}

export interface Civilization {
  id:                 number;
  name:               string;
  expansion:          Expansion;
  army_type:          string;
  unique_unit:        string[];
  unique_unit_data?:  Unit[];
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

export interface Unit {
  id:             number;
  name:           string;
  description:    string;
  expansion:      Expansion;
  age:            Age;
  created_in:     string;
  cost:           Cost;
  build_time?:    number;
  reload_time?:   number;
  attack_delay?:  number;
  movement_rate?: number;
  line_of_sight:  number;
  hit_points:     number;
  range?:         number | string;
  attack?:        number;
  armor:          string;
  accuracy?:      string;
  attack_bonus?:  string[];
  search_radius?: number;
  blast_radius?:  number;
  armor_bonus?:   string[];
}

export enum Age {
  Castle = "Castle",
  Dark = "Dark",
  Feudal = "Feudal",
  Imperial = "Imperial",
}

export interface Cost {
  Wood?:     number;
  Gold?:     number;
  Food?:     number;
}