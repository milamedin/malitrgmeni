# Мали Трг · Brunch & Pizza — interaktivni meni

Interaktivni digitalni meni (kiosk) za restoran **Мали Трг · Brunch & Pizza**.
Vanilla HTML/CSS/JS — bez biblioteka, radi i offline na touch ekranu.

## Mogućnosti
- **7 jezika** u headeru: ME · EN · RU · FR · DE · IT · ES (hrana prevedena na svih 7)
- **13 kategorija**, ~207 stavki (cijene i gramaže iz zvaničnog menija)
- **Lux dizajn** — crna pozadina, brend zelena/krem/zlatna, elegantan serif font, animacije i tranzicije
- **Klik na jelo** → veliki prikaz sa fotografijom; prelistavanje strelicama / swipe / tastaturom (← → , Esc), kružno kroz sve kategorije
- Pića (kafa, sokovi, žestoko, vino) prikazana kao elegantna lista

## Pokretanje
Dvoklik na `index.html`, ili lokalni server:

```bash
python3 -m http.server 4173
# pa otvori http://localhost:4173
```

## Struktura
- `index.html` — dizajn + logika (render, jezici, lightbox)
- `data.js` — kompletan meni (nazivi, opisi, cijene, gramaže)
- `assets/` — logo (bijeli/zeleni/znak)
- `images/` — placeholder fotografije jela (`{kategorija}-{broj}.jpg`)

## Zamjena fotografija
Ubaci pravu sliku pod istim imenom (npr. `images/pizza-1.jpg`) ili dodaj
`img:"images/ime.jpg"` uz stavku u `data.js`.

---
MM Digital
