# 🌌 CosmosHub

> Plateforme fullstack d'exploration et de surveillance spatiale — construite progressivement, module par module.

---

## Vue d'ensemble

**CosmosHub** est une application web fullstack qui centralise et exploite des données spatiales publiques provenant de différentes APIs NASA. Le projet est structuré en **3 phases indépendantes mais complémentaires**, chacune s'appuyant sur les fondations de la précédente.

| Phase | Module | Statut |
|-------|--------|--------|
| 1 | 🪨 Asteroid Tracker | En cours |
| 2 | 🔴 Mars Mission Control | À venir |
| 3 | 🪐 Exoplanet Explorer | À venir |

---

## Stack technique

### Backend
- **Spring Boot** — framework principal
- **Spring Security** avec JWT — authentification
- **PostgreSQL** — persistance des données
- **WebClient** — appels aux APIs externes
- Architecture modulaire par domaine

### Frontend
- **Angular** avec lazy loading par module
- **ApexCharts** — visualisation de données
- Services dédiés par feature

---

## Roadmap

### Phase 1 — Asteroid Tracker
> Construire le socle technique de CosmosHub · *4 à 6 semaines*

**Fonctionnalités**
- Authentification JWT (inscription / connexion)
- Intégration de l'API NeoWs (Near Earth Objects)
- Liste des astéroïdes par date + page détail
- Système de favoris
- Historisation des données en base
- Graphique : nombre d'astéroïdes par jour

**Compétences ciblées** — consommation d'API externe, mapping DTO, modélisation BDD relationnelle, Spring Security

---

### Phase 2 — Mars Mission Control
> Ajouter un module orienté médias et interactions · *3 à 5 semaines*

**Fonctionnalités**
- Intégration de l'API Mars Rover Photos
- Galerie filtrable (rover / caméra / date) avec pagination
- Favoris photos
- Commentaires utilisateurs

**Compétences ciblées** — gestion d'images, relations entre entités, optimisation des requêtes, structuration modulaire avancée

---

### Phase 3 — Exoplanet Explorer
> Ajouter un module orienté analyse scientifique · *4 à 6 semaines*

**Fonctionnalités**
- Intégration de l'API Exoplanet Archive
- Recherche avancée multi-critères
- Calcul d'un score d'habitabilité
- Comparaison avec la Terre
- Graphiques statistiques avancés

**Compétences ciblées** — traitement mathématique, manipulation de datasets volumineux, optimisation des performances, architecture évolutive

---

## Approche & philosophie

Le projet est **volontairement incrémental** : chaque phase produit une application fonctionnelle et valorisable, sans attendre que tout soit terminé.

- ✅ Socle technique solide dès la Phase 1
- ✅ Montée en compétences progressive et sécurisée
- ✅ Projet démontrable à chaque étape
- ✅ Architecture extensible sans refonte

---

*Document de cadrage — v2 — 26/02/2026*
