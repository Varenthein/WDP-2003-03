


# WDP Projekt Zespołowy

## Opis projektu

Przykładowy projekt sklepu tworzony przez cztero osobową grupę przez 3 tygodnie pod nadzorem mentora. Projekt ma na celu naukę progamowania oraz pracy zespołowej. 

## Demo

<a href="https://furniture-shop-project.herokuapp.com/#">Furniture Shop - DEMO </a>

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `yarn install` (lub `npm install`).

Teraz możesz zacząć pracę, korzystając z przygotowanych taska `yarn start` (lub `npm start`).

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderach `src` oraz `public`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderów `src` i `public` buduje project w folderze `build`
- `start`: obserwuje zmiany w folderze `src` i uruchamia podgląd roboczy
- `test`: uruchomienie testów jednostkowych
- `refactor`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu, a także sprawdza błędy za pomocą ESLinta

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostaną uruchomione testy jednostkowe, formatowanie oraz lintowanie
dla plików, które zostały wybrane za pomocą `git add` i mają być zapisane w commicie.

## Konwencje i dobre praktyki

#### Narzędzia pracy:
Jira, Git, GitHub;

#### Biblioteka do tworzenia interfejsu: 
React;

#### Podstawowa struktura katalogów projektu:
src
  - components
    - common
    - features
    - layout
    - views
  - redux
  - styles

#### Zasady umieszczania plików:
* Foldery i pliki grupowane według funkcjonalności;
* Zawartość folderu: folder oraz pliki `.js`, `.scss`, `.test.js` mają nazwy takie jak nazwa komponentu;
* Do nazywania plików stosuje się notację `PascalCase`;
* Do nazywania zmiennych i funkcji stosuje się notację `camelCase`;
* Folder **'components'**: podfoldery grupują komponenty wg ich funkcji;
* Style:
  - Style globalne: katalog `styles`,
  - style dla poszczególnych komponentów - w katalogach konkretnego komponentu pod nazwą `NazwaKomponentu.module.scss`


#### Zasady pracy z kodem i pracy zespołowej:
* Nazewnictwo klas : wg konwencji OOCSS (zorientowanie obiektowe, reużywalność kodu CSS);
* Commity i komentarze na GitHub piszemy w j. angielskim;
* Commity: krótka informacja o konkretnej zmianie (np. `Add styles to komponent (…)`);
* Repozytorium lokalne aktualizujemy z origin master (`git pull origin master`)  przed rozpoczęciem nowego taska;
* Na lokalnym masterze tworzymy nowy branch z nazwą/numerem taska;
* Lokalny branch z taskiem aktualizujemy poprzez pobranie zmian z repozytorium zdalnego (`git pull origin master`);
* Rozwiązujemy konflikty i wysyłamy branch z taskiem na repozytorium zdalne do brancha zdalnego o takiej nazwie jak lokalny (`git push origin _nazwa-taska_`) i tworzymy Pull Request wraz z opisem wprowadzonych zmian;
* Merge brancha: po weryfikacji i 2 zatwierdzeniach;

#### Status prac - aktualizacje:
* GitHub: przy zmianie statusu taska / wprowadzaniu zmian – pamiętamy o zmianach etykiet w sekcji *Labels*.
* Przy przepływie tasków (developer, osoba wykonująca review) zmieniemy status taska poprzez umieszczenie w odpowiedniej kolumnie na platformie Jira.
* Przeznaczenie kolumn:
  - _backlog_ - taski, które czekają na przypisanie do osób
  - _queued_ – taski przypisane do osób
  - _in progress_ – taski w toku
  - _in review_ – taski przesłane do akceptacji
  - _done_ – taski zakończone i  zmergowane do mastera

