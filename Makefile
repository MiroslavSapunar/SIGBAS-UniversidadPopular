.PHONY: up logs stop

up:
	docker compose up -d

shell:
	docker exec -it Front sh

migrate:
	docker exec -it backend sh -c "yarn prisma migrate dev"

logs:
	docker compose logs -f

stop:
	docker compose stop
