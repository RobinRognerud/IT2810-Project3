interface Currencies {
  name: string;
  code: string;
  symbol: string;
}

interface Languages {
  name: string; nativeName: string
}

export interface Country {
  name: string;
  capital: string;
  region: string;
  flag: string;
  readonly currencies: Currencies[];
  languages: Languages[];
  population: number;
  area: number;
}
