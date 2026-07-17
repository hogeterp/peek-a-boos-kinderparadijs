# Peek-a-Boo's Kinderparadijs — website v1.0.0

## Bestanden uploaden via je Samsung
1. Download en pak het ZIP-bestand uit in **Mijn bestanden**.
2. Open de map `peek-a-boos-kinderparadijs-v1.0.0`.
3. Open de GitHub-repository `peek-a-boos-kinderparadijs`.
4. Kies **Add file / Upload files**.
5. Upload:
   - `index.html`
   - `reviews.html`
   - `privacy.html`
   - `styles.css`
   - `script.js`
   - de volledige map `assets` met alle bestanden
6. Kies onderaan **Commit changes**.

## Nog invullen voordat de website openbaar gaat
- telefoonnummer;
- e-mailadres;
- globale locatie of wijk;
- openingstijden;
- leeftijdsgroep;
- actuele beschikbaarheid;
- echte reviews met toestemming;
- eventueel eigen foto's van de opvangruimtes.

## Contactformulier activeren
Open `script.js` en vervang:
`VUL-HIER-HET-EMAILADRES-IN`
door het echte e-mailadres.

## Reviews en beheer
Versie 1.0.0 verstuurt een review via e-mail en publiceert niets automatisch.
Dat is veilig en voorkomt ongewenste of foutieve reviews.

Een echt beveiligd beheerpaneel voor:
- reviews goedkeuren/verwijderen;
- foto's toevoegen;
- beschikbaarheid aanpassen;
- nieuws plaatsen;

wordt later gekoppeld aan Firebase Authentication, Firestore en Storage. Zonder die koppeling zou een zogenaamd wachtwoord in de websitecode niet veilig zijn.

## Firebase
Het Firebase-project bestaat al. Hosting en het echte beheerpaneel kunnen later worden gekoppeld.
