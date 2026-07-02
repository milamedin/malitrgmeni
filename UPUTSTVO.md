# Uputstvo za uređivanje menija — Мали Трг

Sve što se tiče **jela, cijena i teksta** je u jednom fajlu: **`data.js`**.
Fotografije su u folderu **`images/`**. Dizajn i ikonice su u **`index.html`**.

---

## ⚠️ Prije nego što bilo šta diraš — 2 pravila

1. **Napravi kopiju foldera** prije izmjena (ili čuvaj `mali-trg-meni.zip`). Ako nešto pukne, vratiš staro.
2. **Koristi pravi editor koda — [VS Code](https://code.visualstudio.com) (besplatan)**, NE TextEdit.
   - TextEdit ume da pretvori navodnike `"` u „pametne" `„ "` — a to **razbije cijeli meni** (ostane prazna stranica).
   - VS Code boji kod i odmah pokaže gdje je greška.

**Kako se meni „razbije"?** Ako slučajno obrišeš jedan `"` ili `,` ili `{ }`. Onda stranica ostane prazna. Rješenje: vrati zarez/navodnik ili učitaj kopiju.

---

## 1) Promjena CIJENE — NAJLAKŠE ✅

U `data.js` nađi jelo i promijeni samo ono u navodnicima kod `price`:

```js
price:"11.00€",   →   price:"12.50€",
```

Cijena je ista za sve jezike — mijenjaš je samo jednom.
Isto važi za gramažu: `unit:"440 g"`.

---

## 2) Promjena NAZIVA ili OPISA jela ✅

Svako jelo ima tekst na 7 jezika (`me` = crnogorski, `en` = engleski, `ru, fr, de, it, es`).
Mijenjaš **samo tekst između navodnika**. `n` = naziv, `d` = opis.

```js
me:{n:"Маргарита", d:"Сан Марцано пелат, моцарела, свјежи босиљак"},
```

👉 Ako mijenjaš naziv, promijeni ga u svakom jeziku koji koristiš (bar `me` i `en`).

---

## 3) Dodavanje NOVOG jela ✅ (malo pažnje)

Kopiraj ovaj šablon i zalijepi ga **unutar liste, ispred reda `];`** koji zatvara hranu.
Za novo jelo dovoljno je popuniti **`me` i `en`** — ostali jezici će automatski pokazati engleski.

```js
{cat:"pizza", price:"12.00€", unit:"440 g", img:"images/moja-slika.jpg", t:{
  me:{n:"Naziv na crnogorskom", d:"Sastojci..."},
  en:{n:"Name in English", d:"Ingredients..."}
}},
```

**`cat`** (u koju kategoriju ide) — dozvoljene vrijednosti:
`breakfast, cold, hot, main, salads, pizza, pizzasand, addons, cakes`
(za piće: `coffee, drinks, spirits, wine`)

⚠️ Pazi da svaki red završava zarezom `,` i da su sve vitičaste `{ }` zatvorene.

---

## 4) Dodavanje / mijenjanje FOTOGRAFIJE ✅

Najsigurnije: uz jelo dodaj `img:"images/ime-slike.jpg"` (kao u šablonu gore).

- Spusti svoju sliku u folder `images/` (npr. `images/margarita.jpg`)
- Kod jela dodaj: `img:"images/margarita.jpg",`
- Ta slika će se prikazati i na kartici i u velikom prikazu i u slideshow-u.

Preporuka za slike: široke/„landscape" (npr. 1200×800 px), JPG, do ~300 KB (da se brzo učita).

*(Napomena: postojeća jela već imaju placeholder slike `images/kategorija-broj.jpg`. Možeš samo zamijeniti taj fajl svojom slikom pod istim imenom — ali najlakše je koristiti `img:"..."`.)*

---

## 5) Nove IKONICE ili nove KATEGORIJE — tehnički ⚙️

Ikonice kategorija su „nacrtane" kodom (SVG) u `index.html`. Dodavanje nove kategorije
traži i prevod naziva na 7 jezika. **To je najlakše da mi javiš** pa ja dodam za par minuta —
ti mi samo kažeš: „nova kategorija X, ide poslije Y, evo jela".

---

## Najlakši način od svih 🙂

Ako ti je bilo šta nejasno ili se žuriš — **samo mi pošalji izmjene** (novo jelo, cijene,
slike) i ja ih ubacim i objavim. Ti ne moraš dirati kod.

---

## Poslije izmjena — da se vidi online

Kad sačuvaš izmjene u `data.js`, one se odmah vide kad **lokalno otvoriš `index.html`**.
Da se vide na internetu (GitHub Pages / link), treba **push na GitHub** (GitHub Desktop → Push origin).
