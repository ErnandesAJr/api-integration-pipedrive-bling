</p>
<br>

# Integration PipeDrive + Bling

##### REST API to automate requests completed by Pipedrive and automatically open an order on Bling

### About

The main objective of this project was to challenge the integration between two platforms, hitherto unknown to me, and thus to practice the best forms of development, focusing on decoupling and readability.

Follows application requirements:

- [x] Create test accounts on the Pipedrive and Bling platforms.
- [x] Create an integration between Pipedrive and Bling platforms. (The integration must search for opportunities with status equal to earned in Pipedrive, then insert them as requested in Bling).
- [x] Create mongo database, there are services like MongoDB Atlas to create for free
- [x] Create a collection in the MongoDB database, adding the opportunities inserted in Bling by day and total value.
- [x] Create endpoint to bring the consolidated data from the MongoDB collection.

As a future goal, here are some interesting features mapped during code development and improvements

- [ ] Creation of error handling for each specific service of both PipeDrive and Bling.
- [ ] Availability on Heroku or GitHub
- [ ] Dockerize
- [ ] Place the SWAGGER
- [ ] Add the Bling Customer and Products Register
- [ ] Integrate PipeDrive using WebHook
- [ ] Create cronjob to update mongo data without the need for a request

# api-integration-pipedrive-bling

## Mongo

https://stackoverflow.com/questions/63224330/where-do-i-find-my-dbname-for-mongodb-connection-string/63224699#:~:text=By%20default%2C%20the,you%20based%20on%20the%20name.

https://mongoosejs.com/docs/

## Bling

https://ajuda.bling.com.br/hc/pt-br/articles/360035558634-Usu%C3%A1rio-e-Usu%C3%A1rio-API

https://ajuda.bling.com.br/hc/pt-br/categories/360002186374-Integra%C3%A7%C3%B5es-e-Lojas-Virtuais

https://ajuda.bling.com.br/hc/pt-br/categories/360002186394-API-para-Desenvolvedores

https://ajuda.bling.com.br/hc/pt-br/sections/360008117394-Pedidos-API-para-desenvolvedores

## PipeDrive

https://support.pipedrive.com/hc/pt-br/articles/207344545-Como-posso-encontrar-minha-chave-de-API-pessoal-

https://pipedrive.readme.io/docs

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=WELCOME&color=1459c1&labelColor=000020" alt="PRs WELCOME!" />
