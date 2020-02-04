Steps to run application locally
1) clone repo

2) In terminal with project in root do 
    1) npm i
    2) npm start

3) Add your CoinMarketCap api key to a top level .env file in the format 'MARKET_CAP_API_KEY={api_key}'

4) There are 3 endpoints with only the id query param as required 
http://{IP}:5060/api/v1/currencylist?sort=asc || dsc
http://{IP}:5060/api/v1/currency?id=1
http://{IP}:5060/api/v1/currencyAppend?id=1

Steps to run with docker
1) Have docker installed on system
2) Open terminal and make sure you are in root of project
3) Run these commands in order
    make build
    make start
