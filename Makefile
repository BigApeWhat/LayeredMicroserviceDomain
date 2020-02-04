APP_NAME = template
# http://127.0.0.1:5060/api/v1/{endpoint}
fetch:
	# image pull

start-local:
	npm i
	node app.js

test-unit:
	npm run test-unit

test-integration:
	npm run test-integration

test-ete:
	npm run test-ete

start:
	docker run -p 49160:5060 -d ${APP_NAME}
# 	docker run --rm -it -p 5060:5060 ${APP_NAME}

build:
	docker build -t ${APP_NAME} .
# docker build --target ci -t  ${APP_NAME}:ci .

push:
	# docker push image

deploy:
	# deploy image

clean:
	rm -rf node_modules
	docker rmi ${APP_NAME}

clean-local-deploy: clean fetch build
