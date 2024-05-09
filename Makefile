init:
	@docker compose build --no-cache
	@docker compose up

up:
	@docker compose up -d
	
down:
	@docker compose down

exec:
	@docker exec -it front sh

format:
	@docker exec front yarn format