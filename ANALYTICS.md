# Supabase Analytics (OpenBento)

OpenBento can track:

- **Inbound traffic**: page views on the exported bento page
- **Outbound traffic**: clicks on blocks (links / social)

This is done via two Supabase Edge Functions:

- `openbento-analytics-track` (public write endpoint)
- `openbento-analytics-admin` (admin read endpoint, protected by a token)

## 1) Provision Supabase

1. Create a Supabase project
2. Install the Supabase CLI: https://supabase.com/docs/guides/cli
3. Get:
   - `SUPABASE_PROJECT_REF` (project ref)
   - `SUPABASE_SERVICE_ROLE_KEY` (Settings → API → Service role key)
   - Pick an `OPENBENTO_ANALYTICS_ADMIN_TOKEN` (any strong random string)

## 2) Create tables + deploy functions

From the repo root:

```bash
SUPABASE_PROJECT_REF=xxxx \
SUPABASE_SERVICE_ROLE_KEY=... \
OPENBENTO_ANALYTICS_ADMIN_TOKEN=... \
npm run analytics:supabase:init
```

This will:

- Apply the migration in `supabase/migrations/`
- Set Edge Function secrets
- Deploy the Edge Functions

## 3) Enable analytics in the builder

In the Builder sidebar:

1. Go to **Analytics (Supabase)**
2. Toggle **Enable analytics**
3. Paste your **Supabase Project URL** (example: `https://xxxx.supabase.co`)

When you export, the generated page will automatically send `page_view` and `click` events.

## 4) View analytics (admin)

In the builder, open **Analytics** and paste your `OPENBENTO_ANALYTICS_ADMIN_TOKEN`.

The dashboard calls:

`{SUPABASE_URL}/functions/v1/openbento-analytics-admin?siteId=...`

