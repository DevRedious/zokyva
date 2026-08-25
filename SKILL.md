---
name: zokyva
description: >-
  Scans and performs 360° uniqueness and virginity audits of domain names, developer package registries
  (npm, PyPI, Crates.io, GitHub, GitLab), social media handles (X, Instagram, TikTok, YouTube, Telegram, Bluesky, Pinterest),
  company registrations (RNE/Sirene), and Wayback Machine web archives using the local `zokyva` CLI.
  Use whenever the user wants to:
  - Check domain name availability and Certificate Transparency (CT) history across TLDs (.com, .fr, .io, .ai, .dev, .app, etc.)
  - Perform a 360° deep audit (`zokyva --deep <keyword>`) across domains, code packages, social media, French company registry, and web archives
  - Export professional Markdown & Dark Mode HTML audit dossiers (`zokyva --deep --export <keyword>`)
  - Verify if a brand, coined word (néologisme) or keyword is 100% pure and unallocated
  - Generate and evaluate clean, brandable domain variations with `--suggest`
  - Perform infrastructure & subdomain reconnaissance without manual web searches
---

# Zokyva — 360° Brand Uniqueness & CT Scanner

`zokyva` is a fast, multi-threaded local CLI tool that performs exhaustive 360° digital, technical, social, and legal audits across Certificate Transparency (CT) logs (`crt.sh`), DNS resolution, developer registries, social media handles, national company databases, and web archives.

## Quick CLI Usage

```bash
# 1. Audit 360° Intégral + Export Pro (Markdown & HTML Dark Mode)
zokyva --deep --export <keyword>

# 2. Audit 360° Standard
zokyva --deep <keyword>

# 3. Scan standard sur 14 TLDs (.com, .fr, .io, .ai, .dev, .app...)
zokyva <keyword>

# 4. Scan étendu sur 24+ TLDs (.cloud, .studio, .xyz, .digital, .agency...)
zokyva <keyword> --all

# 5. Générateur de variations de marque .com vierges
zokyva --suggest <keyword>

# 6. Sortie JSON machine-readable pour pipelines & agents
zokyva --deep <keyword> --json

# 7. Menu interactif TUI
zokyva
```

## 28 Audit Points Matrix

1. **Domain Names & CT Logs (14-24 TLDs)** : `.com`, `.fr`, `.io`, `.ai`, `.dev`, `.app`, `.tech`, `.gg`, `.co`, `.net`, `.group`, `.eu`, `.org`, `.so` (+10 extended).
2. **Developer Packages (5 registries)** : npm, PyPI, Crates.io, GitHub, GitLab.
3. **Social Media Handles (7 platforms)** : X/Twitter, Instagram, TikTok, YouTube, Telegram, Bluesky, Pinterest.
4. **Legal & Web History (2 sources)** : Sociétés FR (RNE/Sirene), Wayback Machine (Archive.org).
5. **Trademark Antériorité (Direct links)** : INPI France, EUIPO/TMview, USPTO.

## Status Classification

- **🟢 100% VIERGE & LIBRE** (`VIRGIN`): 0 certificates in CT logs + DNS inactive + 0 package on npm/PyPI/Crates + 0 GitHub org + 0 social handle taken + 0 company in RNE + 0 snapshot in Wayback.
- **🟡 MINEUR / PARKÉ** (`PARKED` / `LOW_HISTORY`): Minor DNS activity or low historical footprint.
- **🔴 EXPLOITÉ** (`TAKEN`): Registered domain, active certificates, existing package, handle, or registered company.

## Exports & Naming Conventions

- **Markdown Export** : `~/Documents/Dev/scripts/zokyva/audits/AUDIT-MARQUE-<KW>-<DATE>.md` (Clean, zero emoji).
- **HTML Export** : `~/Documents/Dev/scripts/zokyva/audits/AUDIT-MARQUE-<KW>-<DATE>.html` (Dark mode glassmorphism with official SVG logos).
- **Web Title (`<title>`)** : `ZOKYVA | <KW> | <DATE>` (e.g. `ZOKYVA | BRAND | 25/08/2026`).

## Agent Guidelines

- When proposing or evaluating brand, product, or holding names, always run `zokyva --deep <name> --json` to gather empirical real-time data.
- Target names with an **Uniqueness Score ≥ 80%** and `VIRGIN` status on target TLDs (`.com`, `.fr`), developer namespaces (`npm`, `GitHub`), and major social handles.
