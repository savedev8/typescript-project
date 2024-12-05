cd ~/typescript-project
npm run build:prod

rm -rf ~/../var/www/typescript-project/html
mv ~/typescript-project/build ~/var/www/typescript-project/html # вынести пути в отдельные переменные