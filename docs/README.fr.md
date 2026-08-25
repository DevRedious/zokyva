<div align="center">
  <img src="../assets/branding/z-gradient.png" alt="ZOKYVA logo" width="200">

  <p align="center">
    <b>Français</b> | <a href="../README.md">English</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Python-3.10%2B-3776AB?logo=python&logoColor=white" alt="Python 3.10+">
    <a href="https://github.com/DevRedious/zokyva/releases/latest"><img src="https://img.shields.io/github/v/release/DevRedious/zokyva?color=8B5CF6&label=Release" alt="Latest Release"></a>
    <img src="https://img.shields.io/badge/D%C3%A9pendances-Stdlib%20uniquement-10B981" alt="Aucune dépendance tierce">
    <img src="https://img.shields.io/badge/Scan-%3C2.5s%20multi--thread-06B6D4" alt="Scan sous 2,5 secondes">
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="npm">
    <img src="https://img.shields.io/badge/PyPI-3775A9?logo=pypi&logoColor=white" alt="PyPI">
    <img src="https://img.shields.io/badge/Crates.io-E33B26?logo=rust&logoColor=white" alt="Crates.io">
    <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" alt="GitHub">
    <img src="https://img.shields.io/badge/GitLab-FC6D26?logo=gitlab&logoColor=white" alt="GitLab">
    <img src="https://img.shields.io/badge/RNE-000091" alt="Registre National des Entreprises">
  </p>

  <p align="center">
    <i>Scanner d'unicité 360° &amp; virginité de marque — CT Logs, DNS, paquets développeur,<br>
    réseaux sociaux, registres d'entreprises et archives du web, en une commande.</i>
  </p>
</div>

---

## <img src="../assets/icons/list-ul.svg" width="24" align="middle" style="vertical-align:middle" alt=""> Sommaire
- [Pourquoi ZOKYVA ?](#sec-pourquoi-zokyva)
- [Les 28 Points d'Audit 360°](#sec-les-28-points-d-audit-360)
- [Fonctionnalités Clés](#sec-fonctionnalites-cles)
- [Installation & Démarrage Rapide](#sec-installation-demarrage-rapide)
- [Modes d'Utilisation](#sec-modes-d-utilisation)
- [Exports & Rapports](#sec-exports-rapports)
- [Pack Branding & Logos Officiels](#sec-pack-branding-logos-officiels)
- [Architecture & Performance](#sec-architecture-performance)
- [Intégration Multi-Agents (Skills)](#sec-integration-multi-agents-skills)

---

<a id="sec-pourquoi-zokyva"></a>
## <img src="../assets/icons/target.svg" width="24" align="middle" style="vertical-align:middle" alt=""> Pourquoi ZOKYVA ?

Déposer ou lancer une marque, un projet SaaS ou un néologisme exige une vérification qui dépasse le simple `.com`. **ZOKYVA** interroge en parallèle et en temps réel l'ensemble de l'écosystème numérique, technique, social et juridique pour calculer un **Score d'Unicité Globale 360° (0-100%)**.

> **Guide Stratégique Inclus** : Consultez [`LE-POUVOIR-DU-NEOLOGISME.md`](LE-POUVOIR-DU-NEOLOGISME.md) pour comprendre pourquoi les marques les plus puissantes du monde (*Rolex, Google, Spotify, Sony*) reposent sur des néologismes 100% purs.

---

<a id="sec-les-28-points-d-audit-360"></a>
## <img src="../assets/icons/magnifier.svg" width="24" align="middle" style="vertical-align:middle" alt=""> Les 28 Points d'Audit 360°

| Catégorie | Cibles & Points Audités | Méthode & Source |
| :--- | :--- | :--- |
| **1. Noms de Domaine (14 à 24 TLDs)** | `.com`, `.fr`, `.io`, `.ai`, `.dev`, `.app`, `.tech`, `.gg`, `.co`, `.net`, `.group`, `.eu`, `.org`, `.so` *(+10 en mode `--all`)* | Logs publics de certificats SSL/TLS (**Certificate Transparency** via `crt.sh`) + Résolution DNS UDP/DoH en direct |
| **2. Packages Développeur (5 points)** | **npm** (JS/TS), **PyPI** (Python), **Crates.io** (Rust), **GitHub** (Org/User), **GitLab** (User/Group) | APIs publiques officielles et codes de statut HTTP |
| **3. Réseaux Sociaux & Handles (7 points)** | **X / Twitter** (@handle), **Instagram**, **TikTok**, **YouTube**, **Telegram** (t.me), **Bluesky** (@handle.bsky.social), **Pinterest** | Requêtes HTTP furtives & endpoints publics |
| **4. Registre Sociétés (1 point)** | **Sociétés FR / RNE (INSEE / Sirene)** | API Recherche Entreprises (Gouvernement Français) |
| **5. Archives du Web (1 point)** | **Wayback Machine (Internet Archive)** | API CDX / Archive.org (vérification d'antériorité de contenu web) |
| **6. Recherche Marques (Liens directs)** | **INPI France**, **EUIPO / TMview (Europe & Monde)**, **USPTO (USA)** | Génération dynamique des URLs officielles de recherche |

---

<a id="sec-fonctionnalites-cles"></a>
## <img src="../assets/icons/sparkles.svg" width="24" align="middle" style="vertical-align:middle" alt=""> Fonctionnalités Clés

- **Multi-Threading Ultrarapide** : Audit simultané des 28 points en moins de 2.5 secondes via `ThreadPoolExecutor`.
- **Indicateur de Chargement Fluide (Spinner)** : Feedback visuel en direct pendant l'analyse dans le terminal.
- **Cache Local Intelligent (TTL 15 min)** : Évite le spam réseau et accélère les ré-audits récents (`~/.local/share/zokyva/cache.json`).
- **Export Double Format Pro** :
  - **Markdown (`.md`)** : Épuré, structuré, compatible documentation & Notion.
  - **HTML Dark Pro (`.html`)** : Interface sombre moderne, glassmorphism, responsive, avec bouton d'impression / export PDF instantané.
- **Zero-Emoji Policy dans les Exports** : Remplacement de tous les emojis par des crochets professionnels dans le Markdown et par des **icônes vectorielles SVG officielles et colorées** dans le HTML.
- **Nommage Web Normalisé** : L'onglet du navigateur affiche le format standardisé `ZOKYVA | NOM | DATE`.
- **Générateur de Néologismes (`--suggest`)** : Création automatique de variations de marque disponibles en `.com` avec préfixes et suffixes premium.

---

<a id="sec-installation-demarrage-rapide"></a>
## <img src="../assets/icons/box.svg" width="24" align="middle" style="vertical-align:middle" alt=""> Installation & Démarrage Rapide

### Prérequis
* Nobara / Fedora / Ubuntu / Debian / macOS
* Python 3.10 ou supérieur

### Option A : Installation Globale via Bun / NPM (Direct depuis GitHub)
```bash
# Via Bun (Ultra-rapide)
bun add -g https://github.com/DevRedious/zokyva

# Via NPM
npm install -g DevRedious/zokyva

# Ou exécution directe sans installation
bunx https://github.com/DevRedious/zokyva --deep <mot>
```

### Option B : Installation Directe en 1 ligne (Curl)
```bash
curl -fsSL https://raw.githubusercontent.com/DevRedious/zokyva/main/zokyva -o ~/.local/bin/zokyva
chmod +x ~/.local/bin/zokyva
```

### Option C : Lien Symbolique Local (depuis les sources)
```bash
git clone https://github.com/DevRedious/zokyva.git
cd zokyva
chmod +x zokyva
ln -sf $(pwd)/zokyva ~/.local/bin/zokyva
```

---

<a id="sec-modes-d-utilisation"></a>
## <img src="../assets/icons/rocket.svg" width="24" align="middle" style="vertical-align:middle" alt=""> Modes d'Utilisation

### 1. Menu Interactif (TUI)
Lancez simplement `zokyva` sans argument pour ouvrir le menu interactif avec recherche, suggestions, historique et vidage de cache :
```bash
zokyva
```

### 2. Audit 360° Complet avec Export Automatique (Recommandé)
```bash
zokyva --deep --export <MOT_OU_MARQUE>
```
*Génère instantanément le rapport `.md` et le dossier `.html` dans `~/Documents/Dev/scripts/zokyva/audits/`.*

### 3. Scan Rapide de Noms de Domaine
```bash
# Scan des 14 TLDs principaux
zokyva <MOT>

# Scan étendu sur 24+ TLDs (.cloud, .xyz, .studio, .agency, .digital...)
zokyva <MOT> --all
```

### 4. Générateur de Variations & Suggestions
```bash
zokyva --suggest <RACINE>
```
*Teste instantanément des combinaisons intelligentes avec préfixes (`get`, `use`, `try`, `go`...) et suffixes (`hq`, `lab`, `core`, `flow`, `tech`...).*

### 5. Sortie JSON Machine-Readable (pour Agents & CI/CD)
```bash
zokyva --deep <MOT> --json
```

### 6. Gestion du Cache
```bash
zokyva --clean
```

---

<a id="sec-exports-rapports"></a>
## <img src="../assets/icons/file-arrow-down.svg" width="24" align="middle" style="vertical-align:middle" alt=""> Exports & Rapports

Les rapports sont sauvegardés dans `~/Documents/Dev/scripts/zokyva/audits/` :

```text
├── audits/
│   ├── AUDIT-MARQUE-ZOKYVA-2026-08-25_17h36.html
│   └── AUDIT-MARQUE-ZOKYVA-2026-08-25_17h36.md
```

### Format du Titre Web dans l'Onglet (`<title>`)
```html
<title>ZOKYVA | NOM | DATE</title>
```
*Exemple : `<title>ZOKYVA | ZOKYVA | 25/08/2026</title>`*

---

<a id="sec-pack-branding-logos-officiels"></a>
## <img src="../assets/icons/palette.svg" width="24" align="middle" style="vertical-align:middle" alt=""> Pack Branding & Logos Officiels

Le dossier [`assets/`](../assets/) regroupe la charte graphique complète de ZOKYVA (1024×1024 et 256×256) :

### <img src="../assets/icons/diamond.svg" width="20" align="middle" style="vertical-align:middle" alt=""> Identité ZOKYVA (Suite Vectorielle Pure Officielle)
| Variante | Format PNG | Format SVG | Utilisation Recommandée |
| :--- | :--- | :--- | :--- |
| **Emblème Gradient Cyan / Violet** | [`z-gradient.png`](../assets/branding/z-gradient.png) | [`z-gradient.svg`](../assets/branding/z-gradient.svg) | Logo officiel, README, rapports web |
| **Monochrome Blanc (Dark Mode)** | [`z-white.png`](../assets/branding/z-white.png) | [`z-white.svg`](../assets/branding/z-white.svg) | GitHub Dark, terminaux, favicons sombres |
| **Monochrome Noir (Light Mode / Print)** | [`z-black.png`](../assets/branding/z-black.png) | [`z-black.svg`](../assets/branding/z-black.svg) | Impression papier, fonds clairs, PDF |
| **Tracé Vectoriel Brut** | — | [`z.svg`](../assets/branding/z.svg) | Intégration SVG inline & animations |

### <img src="../assets/icons/boxes-3.svg" width="20" align="middle" style="vertical-align:middle" alt=""> Logos Tiers & Registres Officiels

* <img src="https://cdn.simpleicons.org/pypi/3775A9/4B8BBE" width="14" alt=""> **PyPI** : Crayonné isométrique officiel 3D avec cubes bleu, jaune et lavande (`../assets/third-party/pypi.svg`).
* <img src="https://cdn.simpleicons.org/rust/E33B26/FF6B4A" width="14" alt=""> **Crates.io** : Cartons Rust isométriques 3D sur palette en bois (`../assets/third-party/crates-io.png`).
* <img src="https://cdn.simpleicons.org/npm/CB3837/FF5252" width="14" alt=""> **npm** : Bloc rouge officiel `#CB3837` avec typographie blanche.
* <img src="https://cdn.simpleicons.org/gitlab/FC6D26/FC6D26" width="14" alt=""> **GitLab** : Renard 3D tri-tons officiel (`#FC6D26`, `#E24329`, `#FCA326`).
* <img src="https://cdn.simpleicons.org/github/181717/FFFFFF" width="14" alt=""> **GitHub** : Octocat blanc pur sur fond sombre vitré.
* <img src="https://cdn.simpleicons.org/instagram/E4405F/E4405F" width="14" alt=""> **Instagram** : Dégradé officiel Sunset (`#f09433` → `#bc1888`).
* <img src="https://cdn.simpleicons.org/tiktok/000000/FFFFFF" width="14" alt=""> **TikTok** : Note centrale noire `#000000` avec glitch chromatique officiel cyan `#26f4ee` & magenta `#fb2c53` (`../assets/third-party/tiktok.svg`).
* <img src="https://cdn.simpleicons.org/youtube/FF0000/FF0000" width="14" alt=""> **YouTube** : Badge rouge `#FF0000` et bouton Play blanc.
* <img src="https://cdn.simpleicons.org/telegram/26A5E4/26A5E4" width="14" alt=""> **Telegram** : Cercle bleu `#24A1DE` et avion en papier.
* <img src="https://cdn.simpleicons.org/bluesky/0285FF/0285FF" width="14" alt=""> **Bluesky** : Papillon bleu officiel `#0285FF`.
* <img src="https://cdn.simpleicons.org/pinterest/E60023/E60023" width="14" alt=""> **Pinterest** : Cercle rouge `#E60023` et P officiel.
* **Sociétés FR** : Cocarde tricolore républicaine officielle.

---

<a id="sec-architecture-performance"></a>
## <img src="../assets/icons/cpu.svg" width="24" align="middle" style="vertical-align:middle" alt=""> Architecture & Performance

```text
zokyva/
├── zokyva                    # Script CLI autonome Python 3 (TUI, Engine, Renderers)
├── README.md                 # Documentation complète du projet
├── LE-POUVOIR-DU-NEOLOGISME.md# Guide de création & stratégie de marque
├── SKILL.md                  # Définition de compétence pour agents IA
├── assets/                   # Ressources graphiques & charte
│   ├── branding/             # Identité visuelle ZOKYVA (PNG, SVG, Transparent, Monochrome)
│   └── third-party/          # Logos officiels des registres tiers (PyPI, Crates, TikTok)
└── audits/                   # Dossiers d'audits exportés (.md & .html)
```

- **Stockage Données XDG** :
  - Cache : `~/.local/share/zokyva/cache.json`
  - Historique : `~/.local/share/zokyva/history.jsonl`
  - Logs JSON bruts : `~/.local/share/zokyva/logs/`

---

<a id="sec-integration-multi-agents-skills"></a>
## <img src="../assets/icons/face-robot.svg" width="24" align="middle" style="vertical-align:middle" alt=""> Intégration Multi-Agents (Skills)

Zokyva est équipé d'une compétence agentique universelle (`SKILL.md`) synchronisée automatiquement avec :
- **Antigravity / Codex** : `~/.agents/skills/zokyva/SKILL.md`
- **Claude Code / Cursor** : `~/.claude/skills/zokyva/SKILL.md`

Les agents IA peuvent ainsi invoquer Zokyva à tout moment pour auditer de nouveaux noms de marques, holdings ou projets avant toute décision technique ou légale.
