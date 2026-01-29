# Základy JS - Projekt

## Zadání
* Vytvořte JS aplikaci na zadané téma.
* **Dejte si záležet na designu!**
* Webové stránky **musí být** responzivní.
* Používejte relativní jednotky (`rem`, `em`).

## Poznámky
* Všechny potřebné soubory vkládejte do `src`.
* Obrázky ukládejte do složky `src/img`.
* Skripty ukládejte do složky `src/js`.
* Kaskádové styly ukládejte do složky `src/css`.

## 1) Webový plánovač domácích úkolů (School Planner)

### Popis
Vytvoř webovou aplikaci, ve které může žák evidovat domácí úkoly, testy a projekty.  
Data se ukládají do prohlížeče pomocí `localStorage`.

### Povinná funkčnost

1. **Přidávání úkolů**
   - Formulář obsahuje pole:
     - Předmět (text nebo select – např. M, ČJ, AJ…)
     - Popis úkolu (text)
     - Datum odevzdání (input type="date")
     - Typ úkolu (select: domácí úkol / test / projekt)
   - Tlačítko **Přidat úkol**.
   - Po odeslání se úkol zobrazí v seznamu.

2. **Zobrazení úkolů**
   - Úkoly se zobrazují v tabulce nebo v kartách.
   - U každého úkolu se zobrazí:
     - Předmět
     - Popis
     - Datum odevzdání
     - Typ úkolu
     - Stav (např. „Nesplněno“ / „Splněno“)

3. **Označení úkolu jako splněného**
   - U každého úkolu je tlačítko nebo checkbox pro změnu stavu na „Splněno“.
   - Splněný úkol je vizuálně odlišen (např. přeškrtnutý text, jiná barva).

4. **Mazání úkolů**
   - U každého úkolu je tlačítko „Smazat“.
   - Po kliknutí úkol zmizí ze seznamu i z `localStorage`.

5. **Ukládání dat**
   - Úkoly se ukládají do `localStorage`.
   - Po obnovení/zavření a znovu otevření stránky jsou úkoly znovu načteny.

### Možná rozšíření

- Filtrování úkolů podle:
  - předmětu
  - typu úkolu
  - stavu (vše / splněné / nesplněné)
- Seřazení úkolů podle data odevzdání.
- Zobrazení statistik (počet všech úkolů, splněných, nesplněných).
- Barevné zvýraznění úkolů podle toho, jak blízko je termín.

---

## 2) Osobní rozpočet (Budget Tracker)

### Popis
Aplikace pro sledování příjmů a výdajů. Uživatel zadává jednotlivé položky a vidí součet příjmů, výdajů a zůstatek.

### Povinná funkčnost

1. **Přidávání položek**
   - Formulář obsahuje pole:
     - Částka (číslo)
     - Popis (text)
     - Typ (příjem / výdaj – např. pomocí select nebo radio tlačítek)
     - Kategorie (např. jídlo, zábava, škola…)
   - Tlačítko **Přidat položku**.
   - Po odeslání se položka zobrazí v seznamu.

2. **Zobrazení položek**
   - Seznam všech zadaných položek.
   - U každé položky:
     - částka
     - popis
     - typ
     - kategorie

3. **Výpočty**
   - Zobrazení:
     - součet všech příjmů
     - součet všech výdajů
     - aktuální zůstatek = příjmy – výdaje
   - Hodnoty se automaticky přepočítávají po přidání nebo smazání položky.

4. **Mazání položek**
   - U každé položky tlačítko „Smazat“.

5. **Ukládání dat**
   - Položky se ukládají do `localStorage`.
   - Po obnovení stránky zůstává obsah zachovaný.

### Možná rozšíření

- Filtrování položek podle kategorie nebo typu (příjem/výdaj).
- Jednoduché textové „statistiky“ za vybrané období (např. poslední měsíc).
- Zvýraznění velkých výdajů (nad určitou částku).

---

## 3) Učící aplikace – Kartičky (Flashcards)

### Popis
Aplikace slouží k učení slovíček, pojmů, definic apod. Uživatel si vytváří kartičky s otázkou a odpovědí a následně se z nich učí.

### Povinná funkčnost

1. **Tvorba kartiček**
   - Formulář s poli:
     - Otázka (např. slovo v cizím jazyce)
     - Odpověď (např. překlad)
   - Tlačítko **Přidat kartičku**.
   - Kartička se po uložení zobrazí v seznamu.

2. **Zobrazení kartiček**
   - Seznam všech kartiček (např. tabulka nebo karty).
   - U každé kartičky je možnost ji smazat.

3. **Režim učení**
   - Zobrazí se jedna kartička – nejdříve otázka.
   - Po kliknutí na tlačítko (např. „Zobrazit odpověď“) se ukáže odpověď.
   - Tlačítko „Další kartička“ načte další např. náhodně nebo v pořadí.

4. **Ukládání dat**
   - Kartičky se ukládají do `localStorage`.
   - Po obnovení stránky jsou kartičky opět načteny.

### Možná rozšíření

- Označení, zda uživatel odpověděl správně/špatně a počítání úspěšnosti.
- Filtrování nebo opakování hlavně těch kartiček, které uživatel často neuhodne.
- Přidání kategorií kartiček (např. „Angličtina“, „Dějepis“).

---

## 4) Online zápisník / poznámkový blok

*(původně projekt č. 6)*

### Popis
Jednoduchá aplikace pro psaní a ukládání krátkých poznámek přímo v prohlížeči.

### Povinná funkčnost

1. **Přidávání poznámek**
   - Formulář obsahuje:
     - Nadpis poznámky (text)
     - Text poznámky (textarea)
   - Tlačítko **Přidat poznámku**.
   - Poznámka se zobrazí v seznamu poznámek.

2. **Zobrazení poznámek**
   - Seznam poznámek ve formě karet/boxů.
   - U každé poznámky se zobrazí nadpis a začátek textu (případně celý text).

3. **Mazání poznámek**
   - U každé poznámky je tlačítko „Smazat“.

4. **Ukládání dat**
   - Poznámky se ukládají do `localStorage`.
   - Po obnovení stránky jsou poznámky opět načteny.

### Možná rozšíření

- Možnost **editace** existující poznámky (změna textu, nadpisu).
- Vyhledávání nebo filtrování poznámek podle nadpisu.
- Zobrazení detailu poznámky po kliknutí (otevření v samostatném panelu/modal okně).

---

## 5) Knihovnička / seznam přečtených knih

*(původně projekt č. 7)*

### Popis
Aplikace slouží k evidenci knih, které uživatel čte, četl nebo chce číst.

### Povinná funkčnost

1. **Přidávání knih**
   - Formulář obsahuje:
     - Název knihy
     - Autor
     - Rok vydání (volitelné)
     - Stav (např. „Chci číst“, „Čtu“, „Dočteno“)
   - Tlačítko **Přidat knihu**.
   - Kniha se objeví v seznamu.

2. **Zobrazení knih**
   - Seznam všech knih v tabulce nebo kartách.
   - V seznamu je vidět název, autor, rok, stav.

3. **Změna stavu knihy**
   - U každé knihy možnost změnit stav (např. pomocí selectu nebo tlačítek).
   - Stav se ihned projeví v zobrazení a uloží.

4. **Mazání knih**
   - U každé knihy tlačítko „Smazat“.

5. **Ukládání dat**
   - Všechny knihy se ukládají do `localStorage`.
   - Po obnovení stránky zůstanou zachovány.

### Možná rozšíření

- Filtrování knih podle stavu (jen „Chci číst“, jen „Dočteno“).
- Hodnocení knih (např. 1–5 hvězdiček).
- Vyhledávání podle názvu nebo autora.

---

## 6) Kvízový systém s kategoriemi

*(původně projekt č. 9)*

### Popis
Aplikace s kvízem, ve kterém si uživatel vybere kategorii otázek (např. IT, sport, filmy) a následně odpovídá na otázky v dané kategorii.

### Povinná funkčnost

1. **Datový model otázek**
   - Otázky jsou uloženy v poli objektů v JavaScriptu.
   - Každá otázka obsahuje:
     - text otázky
     - 3–4 možné odpovědi
     - informaci o správné odpovědi
     - kategorii (např. "IT", "Sport", "Filmy")

2. **Výběr kategorie**
   - Na úvodní obrazovce si uživatel vybere kategorii (např. pomocí selectu nebo tlačítek).

3. **Průběh kvízu**
   - Zobrazuje se jedna otázka najednou.
   - Uživatel vybere jednu z nabízených odpovědí (radio button).
   - Tlačítko „Další“ přejde na další otázku.
   - Po zodpovězení všech otázek v kategorii se zobrazí **výsledek** (skóre – počet správných odpovědí).

4. **Vyhodnocení**
   - Na konci kvízu se vypíše:
     - počet správných odpovědí
     - počet otázek celkem
   - Volitelně i procentuální úspěšnost.

### Možná rozšíření

- Zobrazení správných odpovědí po skončení kvízu.
- Časový limit na celou kategorii nebo na jednotlivé otázky.
- Uložení nejlepšího dosaženého výsledku do `localStorage`.

---

## 7) To-Do list s prioritami a termíny

*(původně projekt č. 10)*

### Popis
To-Do aplikace, kde má každý úkol svou prioritu a termín. Uživatel vidí přehled úkolů a může je označovat jako splněné.

### Povinná funkčnost

1. **Přidávání úkolů**
   - Formulář obsahuje:
     - Text úkolu
     - Datum (termín splnění)
     - Priorita (např. „nízká / střední / vysoká“ – select)
   - Tlačítko **Přidat úkol**.
   - Úkol se zobrazí v seznamu.

2. **Zobrazení úkolů**
   - Seznam všech úkolů.
   - U každého úkolu:
     - text
     - termín
     - priorita (vizuálně odlišená – např. barvou)

3. **Označení jako splněný**
   - U každého úkolu checkbox nebo tlačítko pro označení jako „splněno“.
   - Splněný úkol je vizuálně odlišen (přeškrtnutý, vybledlý…).

4. **Mazání úkolů**
   - U každého úkolu tlačítko „Smazat“.

5. **Ukládání dat**
   - Úkoly a jejich stav se ukládají do `localStorage`.
   - Po obnovení stránky se data načtou.

### Možná rozšíření

- Třídění úkolů podle:
  - termínu (nejbližší nahoře)
  - priority
- Zobrazení pouze nesplněných úkolů.
- Jednoduché upozornění na „prošlé“ termíny (termín v minulosti).

---

## 8) Správa receptů / kuchařka

*(původně projekt č. 14)*

### Popis
Aplikace pro ukládání oblíbených receptů. Každý recept má název, krátký popis, ingredience a postup.

### Povinná funkčnost

1. **Přidávání receptů**
   - Formulář obsahuje:
     - Název receptu
     - Krátký popis
     - Ingredience (např. textarea – jednotlivé suroviny na nový řádek)
     - Postup (textarea)
   - Tlačítko **Přidat recept**.
   - Recept se objeví v seznamu.

2. **Zobrazení receptů**
   - Seznam receptů (např. jako karty).
   - U každého receptu se zobrazuje minimálně název a krátký popis.

3. **Detail receptu**
   - Po kliknutí na recept se zobrazí detail:
     - kompletní seznam ingrediencí
     - celý postup
   - Detail může být v samostatném panelu, na nové stránce nebo v modálním okně.

4. **Mazání receptů**
   - U každého receptu tlačítko „Smazat“.

5. **Ukládání dat**
   - Recepty se ukládají do `localStorage`.
   - Po obnovení stránky zůstávají uložené.

### Možná rozšíření

- Vyhledávání podle názvu receptu.
- Kategorie (např. sladké / slané / hlavní jídlo / dezert).
- Zobrazení počtu receptů v jednotlivých kategoriích.

---

## 9) Habit tracker – sledování návyků

### Popis
Aplikace pro sledování návyků (např. „čtení“, „cvičení“, „učení se AJ“).  
Uživatel si zvolí, jaké návyky chce sledovat, a označuje si dny, kdy daný návyk splnil.  
Data se ukládají do `localStorage`.

### Povinná funkčnost

1. **Přidávání návyků**
   - Formulář obsahuje:
     - Název návyku (např. „Přečíst 10 stran“, „20 kliků“).
   - Tlačítko **Přidat návyk**.
   - Nový návyk se zobrazí v seznamu sledovaných návyků.

2. **Zobrazení návyků**
   - Seznam návyků (např. v řádcích).
   - Pro každý návyk se zobrazí:
     - název návyku
     - jednoduchý přehled dnů (např. za aktuální měsíc nebo posledních 7/14 dní).

3. **Označení splněného dne**
   - U každého návyku je „mřížka“ dní (např. 1–30).
   - Kliknutím na konkrétní den:
     - se daný den označí jako splněný (např. vyplněný čtvereček)
     - opětovným kliknutím je možné označení zrušit (přepínání splněno/nesplněno).
   - Označení se okamžitě projeví v uložených datech (model v JS).

4. **Mazání návyků**
   - U každého návyku je tlačítko „Smazat“.
   - Po smazání návyk zmizí ze seznamu i z `localStorage`.

5. **Ukládání dat**
   - Seznam návyků a informace o splněných dnech se ukládají do `localStorage`.
   - Po obnovení stránky se návyky i označené dny znovu načtou.

### Možná rozšíření

- **Počítání „streaku“ (šňůry splněných dní)**  
  - U každého návyku zobrazit:
    - aktuální počet dní v řadě, kdy byl návyk splněn
    - nejlepší dosažený streak.

- **Statistiky návyků**
  - Například:
    - počet splněných dní v aktuálním měsíci,
    - procentuální úspěšnost (splněné dny / všechny sledované dny).

- **Výběr období**
  - Možnost přepínat zobrazení:
    - posledních 7 dní / posledních 30 dní,
    - konkrétní měsíc (např. pomocí selectu).

- **Vizuální zlepšení**
  - Barevné škálování podle úspěšnosti (např. návyk s vysokou úspěšností zeleně).
  - Ikony nebo emoji pro jednotlivé návyky.

---

## 10) Pomodoro / timer na učení

### Popis
Aplikace slouží k lepšímu soustředění při učení pomocí techniky **Pomodoro** – střídání bloků soustředěné práce a krátkých pauz (např. 25 minut práce, 5 minut pauza).

Uživatel spustí časovač, aplikace odpočítává čas a informuje, zda je právě fáze **Práce** nebo **Pauza**.

### Povinná funkčnost

1. **Nastavení časů**
   - Uživatel může nastavit délku:
     - pracovního intervalu (např. výchozí 25 minut),
     - pauzy (např. výchozí 5 minut).
   - Hodnoty se zadávají pomocí vstupních polí (input type="number" pro minuty).

2. **Zobrazení odpočtu**
   - Na obrazovce je viditelný:
     - zbývající čas (minuty:sekundy),
     - aktuální režim: „Práce“ nebo „Pauza“.
   - Při přechodu mezi režimy se text i logika přepne (po skončení práce začne pauza, po pauze znovu práce).

3. **Ovládací tlačítka**
   - Minimálně tato tlačítka:
     - **Start** – spustí odpočet od aktuálně nastaveného času.
     - **Pause/Pauza** – zastaví odpočet (čas se nezresetuje).
     - **Reset** – zastaví odpočet a nastaví čas zpět na začátek aktuálního režimu.
   - Pokud je odpočet spuštěný, tlačítko Start buď:
     - nefunguje,
     - nebo se změní na „Pokračovat“ podle vaší volby.

4. **Automatické střídání režimů**
   - Po doběhnutí odpočtu pracovního intervalu se:
     - automaticky přepne režim na „Pauza“,
     - nastaví čas pauzy a začne odpočet.
   - Po doběhnutí pauzy se:
     - přepne režim na „Práce“,
     - nastaví čas práce a začne odpočet.
   - Není nutná podpora více dlouhých pauz, stačí jednoduché střídání práce/pauza.

5. **Základní vizuální rozlišení**
   - Režim „Práce“ a „Pauza“ jsou vizuálně odlišené:
     - například jinou barvou pozadí,
     - nebo výrazným textem.

6. **Počítání dokončených cyklů**
   - Zobrazit, kolik pomodoro cyklů (Práce+Pauza) uživatel dnes dokončil.
   - Po každém skončení pauzy číslo zvýšit o 1.

7. **Ukládání nastavení**
   - Uložit délky práce a pauzy do `localStorage`.
   - Po obnovení stránky se poslední nastavení načte.

8. **Zvukové nebo vizuální upozornění**
   - Při přechodu z práce na pauzu (a naopak) přehrát krátký zvuk nebo zobrazit výraznou hlášku/další barvu.

### Možná rozšíření

- **Dlouhá pauza po několika cyklech**
  - Například po 4 pracovních intervalech:
    - místo krátké pauzy spustit delší pauzu (např. 15 minut).
  - Zobrazit, v kolikátém intervalu se uživatel nachází (1–4).

- **Zobrazení aktuálního času**
  - Kromě odpočtu může být na stránce i aktuální čas (hodiny: minuty) pro lepší přehled.


