.PHONY: up logs stop

up:
	docker compose up -d

logs:
	docker compose logs -f

stop:
	docker compose stop
