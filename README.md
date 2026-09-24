# SIGBAS — Universidad Popular

Web app built jointly by **SIGBAS** (Secretaría de Inclusión, Género, Bienestar y Articulación Social) at FIUBA — Facultad de Ingeniería, Universidad de Buenos Aires — and **Universidad Popular**, the faculty's community education programme.

Public landing and sign-in for the programme's participants. User-facing content is in Spanish.

## Stack

Next.js (App Router) · JavaScript · Tailwind CSS · Docker Compose

## Layout

```
web/src/app/
├── components/Home/   Navbar, Footer
├── ingresar/          Sign-in
├── layout.js          Root layout
├── page.js            Landing
└── not-found.js       404
docker-compose.yml     Single node:18 service, source bind-mounted
Makefile               up / logs / stop
```

The container bind-mounts `./web` and runs `yarn install && yarn dev` on start, so there is no local Node version to match — Docker is the only prerequisite.

## Running it

Requires Docker. Create a `.env` in the project root — `docker-compose.yml` loads it and expects:

```
NEXT_PORT=3000
NEXT_TELEMETRY_DISABLED=1
```

```bash
make up      # http://localhost:3000
make logs    # follow container logs; ctrl-c to detach
make stop
```

## Contributors

Built with [@NahuelNGomez](https://github.com/NahuelNGomez) and [@Hyahuasi](https://github.com/Hyahuasi).

## License

See [LICENSE](LICENSE).
