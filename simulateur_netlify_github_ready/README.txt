# Simulateur rentabilité — package GitHub / Netlify

## Contenu
- `index.html`
- `netlify/functions/sheet.js`
- `netlify.toml`

## Déploiement recommandé
1. Crée un repo GitHub vide.
2. Dépose ces fichiers à la racine du repo en gardant l'arborescence :
   - `index.html`
   - `netlify.toml`
   - `netlify/functions/sheet.js`
3. Push sur GitHub.
4. Dans Netlify :
   - Add new project
   - Import from Git
   - Sélectionne le repo
5. Déploie.

## Vérification
Après déploiement :
- ouvre `/.netlify/functions/sheet`
- tu dois voir un JSON
- puis ouvre la home page
- le bandeau doit devenir vert

## Source data
Google Sheet :
- ID : `1tiiiWK4RQM_vm97ijUcbovVLDEw1ZwMeiu8P4LK_niY`
- Onglet : `BDD_trimestrielle`
