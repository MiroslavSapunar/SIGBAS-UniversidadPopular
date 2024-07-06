.PHONY: up logs stop

up:
	docker compose up -d

shell:
	docker exec -it Front sh

logs:
	docker compose logs -f

stop:
	docker compose stop
