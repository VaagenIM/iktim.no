# iktim.no
Kildekoden til https://iktim.no

Kjøres via docker:
`docker run -d -p 80:80 ghcr.io/vaagenim/iktim.no`

## Utvikling
Last ned kildekoden og åpne `src` i din IDE.
Installer prosjektet via `npm i`
Start utviklingsserver via `npm run dev`

## Oppsett
Krever et FQDN (Fully Qualified Domain Name), valgfrie `.env` variabler via `docker build`:
`BASE_URL=iktim.no`
