cd ~/typescript-project
npm run build:prod

sudo rm -rf ~/../../var/www/typescript-project/html
sudo mv ~/typescript-project/build ~/../../var/www/typescript-project/html 

# вынести пути в отдельные переменные
# разобраться с правами