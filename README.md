# Настройка проекта на JS
_Проект создаем в IDE VSCode_
#### Вводная часть 
В данной статье мы рассмотрим, как настроить компоненты NodeJS, такие как: _babel, nodemon, webpack, mocha, chai._<br>
Для начала скачиваем и устанавливаем [NODEjs](https://nodejs.org/en "nodejs home") для создания веб-серверной структуры.<br>
NodeJS содержит в себе различные инструменты и приложения, которые мы рассмотрим ниже.<br>
__npm (node package manager)__ устанавливается автоматически вместе при установке nodejs.<br>
Устанавливать пакеты библиотек будем при помощи консоли.<br>

##### Первый этап:
На данном этапе мы инициализируем проект (`-y` поумолчанию) в папку, где будет он у нас распологаться<br>(команду прописываем в консоли)<br>
`>npm init -y`<br>
У нас появится файл Package.json, где будут указаны настройки и в дальнейшем подключенные зависимости нашего проекта.<br>
![Package.json](https://github.com/NikitaVasil/setting_JS/blob/master/img/2024-02-05_22-03-42.png)

Проверяем работу NodeJs, спомощью команды `>node code.js` мы можем запустить скрипт не обращаясь к консоли браузера.<br>
Таким образом мы минуем ряд производимых операций при отладке программы.
![code.js](https://github.com/NikitaVasil/setting_JS/blob/master/img/2024-02-05_22-37-06.png)

##### Второй этап:
Для более соврменной и эфективной разработке подключим библиотеку babel:<br>
* Создаем файл `.babelrc` с содержимым
  ```
  {
    "presets": ["@babel/preset-env"]
  }
  ```
* Добавим файл `.gitigore` с содержимым
  ```
  .DS_Store
  node_modules
  /dist

  # local env files
  .env.local
  .env.*.local

  # Log files
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
  
  # Editor directories and files
  .idea
  .vscode
  *.suo
  *.ntvs*
  *.njsproj
  *.sln
  *.sw*
  ```

* И в консоли прописываем две команды:<br>
  `npm install --save-dev @babel/core @babel/node @babel/cli @babel/preset-env @babel/plugin-transform-runtime @babel/runtime babel-loader`<br>
  `npm install -g @babel/core @babel/node @babel/cli @babel/preset-env @babel/plugin-transform-runtime @babel/runtime babel-loader`<br>

  Подключив данную библиотеку мы можем использовать более новейший синтаксис, напримере расмотрим _import/export_:
  

