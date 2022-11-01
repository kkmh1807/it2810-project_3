# Project 3 - Group 37

This is the repository of project 3. Project 3 is a search engine where you can search movies based on actors, genres and title.

## Table of Contents

[Project setup (english)](#project-setup)  
[Documentation (norwegian)](#dokumentasjon)

## Project setup

Project setup for frontend and backend is documented in `/frontend` and `/backend`.

### Technologies

This project is using the MERN stack.

- MongoDB
- Express with graphQL
- React with typescript
- Node.js

### File structure

The the project is divided into backend and frontend.

<details>
<summary>Click to see folder structure</summary>

### Folder structure

```
project
│   README.md
│
└───backend
│   │   ...     <-- Config files
│   └───data
│           imdb_top_1000.csv <-- Data
│   │
│   └───src
│       └───graphql <--GraphQL files
│       └───models  <--MongoDB schemas
│       │   index.ts
│
└───frontend
│   │   ...     <-- Config files
│   └───public  <-- Public content
│       │   ...
│   │
│   └───src  <-- Developed code
│       │   ...
│
```

</details>

### Local setup of database - mongoDB

MongoDB instance should be installed and running locally. [Link to mongoDB setup](https://www.mongodb.com/docs/manual/installation/)

Import data to the database instance with the following command from `/backend`:

```
mongoimport -d imdb_movies -c movies --type csv --file data/imdb_top_1000.csv --headerline
```

## Dokumentasjon

### Stack-valg

Som nevnt i prosjektinformasjonen bruker vi MERN (mongoDB, Express, React, Node) stacken. Vi startet først med å sette opp GRAND-stacken, men gikk bort ifra dette valget på grunn av oppsettstrøbbel på én av gruppemedlemmenes datamaskin. Det viste seg likevel å være et godt valg ettersom at vi brukte lite tid på oppsett av MERN-stacken og kunne begynne med utvikling av applikasjonen mye raskere enn med GRAND-stacken.

### Brukergenerert data

Som løsning for å sende inn brukergenerert data, har vi lagt til rette for at en bruker kan markere en film som sett eller ikke.

### Backend

Vi har brukt MongoDB, Express-GraphQL fordi de var en del av MERN-stacken. Vi valgte å ikke benytte oss av Apollo GraphQL fordi express-graphQL tilbyr det vi trengte i dette prosjektet.

### Frontend

#### Lagring - Recoil

Vi stod mellom både Redux og Recoil da vi skulle velge state management i frontend, hvor vi endte opp med å velge Recoil. En grunn til dette var fordi det er nærmere til funksjonell programmering enn Redux og det var mindre boilerplate kode for å komme i gang. [Les mer her](https://www.imaginarycloud.com/blog/recoil-vs-redux/)

#### API

I frontend henter vi data fra backend ved å bruke javascript sitt `fetch`-API. Dette gjør vi også for å sende POST-requests til backenden. Vi valgte å gjøre det på denne måten fordi det var den enkleste metoden å kommunisere med den oppsatte databasen på. I tillegg sender vi POST-requests istedenfor GET-requests fordi det er best practice i GraphQL ifølge [denne kilden.](https://graphql.org/learn/serving-over-http/)

### Testing

#### Ende-til-ende testing

Vi har benyttet oss av Cypress til å skrive automatisert ende-til-ende testing og komponenttester. Vi har skrevet 3 tester som skal teste de vanligste brukerinteraksjonene med nettsiden. I tillegg har vi testet alle komponentene. Vi gikk bortifra jest til komponenttesting fordi vi allerede hadde implementert Cypress og ønsket å lære et nytt testverktøy.
For å kjøre disse testene:

```
Komponenttester: npm run cypress:run-component
E2E-tester:      npm run cypress:run-e2e
```

## Universell utforming

For å teste universell utforming har vi testet at alle elementer er aksesserbare via tastaturet. Vi testet også nettsiden med skjermleser slik at elementene blir lest opp korrekt for de som benytter seg av det.

Ved fargevalg har vi brukt WebAIM (web accessibility in mind) for å sjekke om fargene er godkjente i henhold til WCAG-standarder. [Les mer](https://webaim.org/resources/contrastchecker/)

## Bærekraftig webutvikling

Vi har prøvd å utvikle applikasjonen ved å skrive så lite kode som mulig, i tillegg har vi etterstrebet å tilgjengeliggjøre alle funksjoner ovenfor alle komponenter for å unngå overflødig kode. Dette følger "low coupling, high cohesion"-tankegangen for å kunne opprettholde en bærekraftig kodebase. [Les mer her](https://medium.com/codex/low-coupling-and-high-cohesion-af77df4cc005)

Ved å paginere dataen vil vi redusere antall kall til databasen, noe som bidrar til å minske energibruken til browser. I tillegg har vi ingen nye sider som lastes inn etter søket blir gjennomført og man får detaljert informasjon ved en statisk boks som åpnes og lukkes som blant annet fører til en bedre brukeropplevelse.
