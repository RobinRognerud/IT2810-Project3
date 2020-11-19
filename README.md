Løsning på prosjekt 3 i Webdev - IT2810. I samarbeid med Siw Døvle og Ragnhild Øie Langåker



# Project 3

Countries er en nettside hvor man kan søke, filtrere og sortere på et utvalg av verdens land. Vi har valgt å bruke de opplysningene vi synes er mest relevant for denne oppgaven. På siden er det mulig å se ytterligere informasjon om hvert land ved å trykke på “more information”.

## Kjøre prosjektet

1. Klon repoet med HTTP i ønsket lokasjon
2. `cd project-3`, slik at man er inne i project-3 før de neste stegene
3. I en terminal `cd backend` og skriv `npm install` deretter `npm start`
4. I en ny terminal `cd frontend` og skriv `npm install` deretter `npm start`

## Desgin

Vi har valgt å bruke bootstrap til å designe hjemmesiden. Det er ikke laget egne css filer men heller stylet alt ved hjelp av rammeverket til bootstrap. For å style koden er det blitt brukt en blanding av ferdig kode av bootstrap, og egen kode. Et eksempel på kode vi gjenbrukt fra bootstrap, [bootstrap cards](https://getbootstrap.com/docs/4.0/components/card/).

For blaing har vi brukt knapper for neste og forrige side med 9 land per side. Knappene er gjort ”disabled” når det ikke er noe neste eller forrige.

## Backend

Vi installerte MonogDB på NTNU sin virtueller server, der la vi inn data om land generet fra [REST Countries](http://restcountries.eu/#filter-response). Vi brukte denne URL´en [https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag;languages;currencies;population;area](https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag;alpha3code;region;languages;currencies;population;area) og la inn 166 land i databasen. MongoDb passet oss bra ettersom den lagrer data i et JSON-lignende format og dataen blir lagret i arrays som gjør at databasestrukturen blir intuituv og enklere å jobbe med. I databasen har vi en collection som heter countries. Denne har følgende felt: name, capital, region, flag, languages, currencies, population, area og likes (felt vi har lagt til selv, som holder styr på hvor mange ganger landet har blitt likt)
Vi implementerte et REST API med Node.js og Express sammen med mongoose (for Mongodb objekt modellering). Vi implementerte to endepunkt ettersom vi fulgte https://restfulapi.net/resource-naming/ sin anbefaling om å bruke query parametere for sortering, filtrering og blaing og dermed ikke trengte flere spesifikke endepunkt.
Fra det første endepunktet henter vi all informasjon fra databasen:

```
GET: http://localhost:4000/countries
```

| Query parametere | Tillatte verdier                                                       | Beskrivelse                                                                             |  Eksempel                                                                                             |
| ---------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| skip             | Tar imot heltall med et intervall på 9                                 | Bestemmer hviken side som skal vises                                                    | `/countries/?skip=9` hopper over de 9 første landa                                                    |
| search           | en streng                                                              | Spesifiserer ønska land etter navn, enten partiell eller fullt navn                     | `/countries/?name=nor` returner land som starter på nor                                               |
| sort             | nameasc, nameDESC, population, populationDESC, capitalasc, capitalDESC | sorterer landets navn og hovedsted A til Z, Z til A og innbyggertall max-min og min-max | `/countries/?sort=nameDESC` vil returnere landa i alfabestik synkende rekkefølge etter navn på landet |
| filter           | Africa, Americas, Asia, Europe, Oceania                                | filtrerer dataen baset på region                                                        | `/countries/?filter=Europe` vil returnerer alle landene som er i europa                               |

search parameteret brukes også til å hente ut et spesifikt land når _more details_ knappen klikkes og detaljert informasjon vises om et land.

Endepunktet har også en begrensning _limit_ som er satt til å være 9 i backend for å begrense antall returnerte verdier til 9 ettersom dette passet layouten.

Det andre endeputet er en put for å oppdatere antall likes:

```
PUT: http://localhost:4000/countries/:countryName
```

CountryName er unikt og brukes dermed for å spesifisere hvilket land som skal få inkrementert likes med 1

## Teknologi

### React

Prosjektet er basert på React med bruk av Typescript og ble initialisert med: npx create-react-app my-app --template typescript

### Redux

Vi tok i bruk redux for å behandle state, slik at vi fikk en global state som kan brukes hvor som helst i appen uten og bli sendt som props gjennom flere komponenter. Redux gjør også at man slipper callback funksjoner for å sende data oppover i komponenthierarkiet. For eksempel har vi en _more details_ knapp i CountryCard som lar deg se mer detaljert informasjon om det spesifikke landet, når denne trykkes blir _showDetailedView_ kalt som oppdaterer verdier i den globale staten (show til true og spesfiserer hvilket land som skal vises). Dette kan vi så bruke i øverste komponent App ved å hente ut verdien fra den globale store`en.
Redux består av en store, constants, actions, action creators og reducers. Det er mest utbredt å plassere dette i egne filer hver for seg, men dette virket lite skalerbart. Derfor søkte vi etter andre måte og strukturere redux koden og kom over redux ducks, som vil si at man samler alle filene i en modul som omhandler det samme. Redux thunk ble benyttet som middleware for å gjøre kall til databasen.
Hver duck er ansvarlig for å styre logikken til en state. Vi har benyttet oss av disse:

| Duck                | Beskrivelse                                                                       | Action Creator                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| countryDuck         |  Styrer logikken for henting av land basert på søk, sortering og andre parametere |  **getCountry** er funksjonen som brukes for å hente land fra backend. Kallet til backend blir spesifisert med ulike parametere. Et velykket resultat kaller FETCH_COUNTRY_SUCCESS som sender dataen videre til countryReducer som oppdaterer den globale staten. Om det skulle oppstå en error i GetCountry vil FETCH_COUNTRY_FAILURE bli kalt og det blir returnert en feilmelding. |
| detailedCountryDuck | styrer om _CountryCardDetail_ eller _Main_ skal vises                             | **showDetailedView** tar imot navnet til et land og setter show til true, slik at _CountryCardDetail_ komponentet vises med det spesifiserte landet. **hideDetailedView** endrer show variablen til false, slik at _Main_ vises igjen                                                                                                                                                 |
| filterDuck          | spesifiserer hvilken region det skal filtreres etter                              |  **updateFilter** tar imot hvilken region som blir valgt i dropdown menyen og sender videre til filterReducer                                                                                                                                                                                                                                                                         |
| likeDuck            | styrer logikken for å oppdatere likes                                             |  **updateLike** sender en put request til backend for å oppdate likes                                                                                                                                                                                                                                                                                                                 | paginationDuck | styrer logikken for blaing |  **updateSkipAmount** tar inn en skipDirection string som spesifiserer om _prev_ eller _next_ er trykket og _countryStateLength_ som brukes for å vite om vi er på siste side, ut ifra dette sendes skipAmount videre til paginationReducer |
| searchDuck          | spesifiserer hvilket søkeord som det skal filtreres på                            | **updateSearch** tar imot et søkeord og sender det videre til searchReducer                                                                                                                                                                                                                                                                                                           |
| sortDuck            |  spesifiserer hva det skal sorteres etter i backend                               | **updateSort** tar imot et sorteringsstreng som sendes videre til sortReducer                                                                                                                                                                                                                                                                                                         |

**updateFilter**, **updateSearch** og **updateSort** kaller også updateSkipAmount slik at skipAmount nullsettes og man havner på første side.

## Organisering av komponentene

App - Henter ut informasjon fra store som brukes for å parameterisere getCountry() (API kallet) og har logikk for om _CountryCardDetail_ eller _Main_ vises

Header - Inneholder funksjonalitet for å nullstille søkeparametere

Main - Layout for hovedsiden

OptionsBar - Inneholder søkebaren og dropdowns for filter og sortering

CountryCardContainer - Henter ut informasjon om alle land fra store, sender videre til _CountryCard_ som props

CountryCard - Viser enkel informasjon om et land

CountryCardDetail - Viser all informasjon om et land

Footer - Inneholder knappene som tillater blaing

## Testing

Vi har benyttet oss av rammeverket cypress for å forenkle automatisert end-2-end testing. Grunnen til valget av cypress er at det er enkelt å installere, effektivt og testene gir gode tilbakemeldinger i UI-et. Det er også enkelt å debugge feil, og det er god dokumentasjon som er enkelt å finne. Det er skrevet tester som sjekker de mest brukte og viktigste interaktivitets-muligheten på siden. Vi sjekker ikke alle tilfeller da dette ville tatt for lang tid. Noe av det vi har testet er at input-feltet tar imot og bruker verdier, at filtrering og sortering gir korrekte verdier tilbake og at det fungerer å bla i sider.

Vi har prøvd å implementere unit tester via både jest og cypress, men lyktes ikke med det og valgte derfor å velge det bort ettersom dette tok mer tid enn nødvenidg og vi føler at end2end testene dekker mye av det samme.

For å kjøre end2end testene skriv `npx cypress open` og trykk `run all specs` øverst i høyre hjørne.

Gruppen fant ingen ulikheter og siden fungerte optimalt på de nettleserne som ble testet. Testet på chroome, safari og edge

## Git og sammarbeid

Vi fikk tilbakemelding på forrige prosjekt at vi hadde for mange branches og issues. Så denne gangen har vi prøvd å ha issues og branches som rommer større oppgaver. Gruppens erfaring med dette er at det blir en del mer konflikter når man merger. Vi ser i ettertid at vi kunne vært flinkere til å bruke git sitt rammeverk for kommunikasjon. Om noen i gruppe ikke har lykkes med å løse issues har vi benyttet oss av parprogrammering.
