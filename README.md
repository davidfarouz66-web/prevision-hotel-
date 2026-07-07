# Odem Event

Prototype mobile-first pour gérer des séjours et réceptions avec prévisionnel, dépenses, encaissements, notes et export Excel.

## Lancer en local

```bash
npm run dev
```

Puis ouvrir :

```text
http://localhost:4173
```

## Supabase

Avant d'utiliser la sauvegarde en ligne, ouvrir Supabase > SQL Editor, puis exécuter :

```text
supabase-setup.sql
```

Ce script crée :

- `app_state` pour sauvegarder les données de l'app ;
- `app_status` pour le keepalive.

## Vercel

Le projet contient :

- `vercel.json` avec un cron quotidien ;
- `api/keepalive.js` pour maintenir une activité Supabase même si personne n'ouvre le CRM.

Variables recommandées dans Vercel :

```text
SUPABASE_URL=https://aykbzbeerstjmhworody.supabase.co
SUPABASE_KEY=sb_publishable_vioHpKZRfR_EcTgDuzyBJQ_l9xNxV5I
```

Le keepalive passe par :

```text
/api/keepalive
```

Vercel l'appelle automatiquement chaque jour via `vercel.json`.

## Note

Pour la phase test, la sauvegarde en ligne utilise une table unique. Avant usage sérieux, ajouter une authentification et des règles d'accès plus strictes.
