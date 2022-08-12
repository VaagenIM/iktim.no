# iktim.no
[![Build Status](https://img.shields.io/github/workflow/status/VaagenIM/iktim.no/CI)](https://github.com/VaagenIM/iktim.no/)
[![GitHub latest commit](https://img.shields.io/github/last-commit/VaagenIM/iktim.no)](https://github.com/VaagenIM/iktim.no/commit/)

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
