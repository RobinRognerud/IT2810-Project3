interface Currencies {
  name: string;
  code: string;
  symbol: string;
}

export interface Country {
  name: string;
  capital: string;
  region: string;
  flag: string;
  readonly currencies: Currencies[];
  languages: { name: string; nativeName: string };
  populatioin: number;
  area: number;
}
