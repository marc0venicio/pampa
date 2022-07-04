# pampa

Este projeto foi desenvolvido usando Reactjs, laravel 9 + docker + ngnix + mysql

para rodar Basta clonar este repositório,
entrar no projeto backend rodar um composer install, subir os conteiners com docker-compose up -d,
entrar dentro do conteiner laravel usando o comando docker exec -it laravel /bin/bash
renomear o arquivo .env.example e mudar as variaveis de ambiente a seu gosto.
rodar o comando chmod -R 777 storage,
rodar as migrate com php artisan migrate e por fim executar o comando
php artisan command:breeds, esse comando acionára um evento que irá consumir uma api publica do https://api.thecatapi.com/v1/breeds

e vuala o backend já se encontrara configurado.

para configurar o front, basta entrar no diretório my-app e rodar os comandos
npm install && npm start
