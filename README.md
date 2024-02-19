# Настройка проекта на JS
_Проект создаем в IDE VSCode_
#### Вводная часть 
В данной статье мы рассмотрим, как установить и настроить компоненты NodeJS: _babel, nodemon, webpack, mocha, chai._<br>
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

  Подключив данную библиотеку мы можем использовать более новейший синтаксис, напримере расмотрим _import/export_ на рисунке ниже:<br>
  ![ie](https://github.com/NikitaVasil/setting_JS/blob/master/img/2024-02-05_23-20-16.png)

  Таким образом код становится более читабельным и понятным, чем нежели конструкция которая описана ниже:<br>
  ```js
    module.exports = className; //экспортируем данные класса
    const Nameobj = require('./scripts.js') // импортируем данные класса
  ```

##### Третий этап:
Подключаем _webpack-dev-server_, для автоматической перезагрузке страницы:
* Создаем `webpack.config.js` и заполняем содержимым:<br>
  ```js
    const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    module.exports = {
      entry: './src/index.js', // Точка входа для сборки проекта

      output: {
        filename: 'bundle.js', // Имя выходного файла сборки
        path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
      },

      module: {
        rules: [
        {
            test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
            use: [MiniCssExtractPlugin.loader, 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
        },
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        },
        ],
      },

      plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
      ],

      devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Каталог для статики
        },
      },
  };
  ```

* Подключаем сам webpack и плагины к нему, прописываем данные команды в консоль:<br>
  `npm install --save-dev webpack webpack-cli webpack-dev-server` <br>
  `npm install --save-dev html-webpack-plugin` <br>
  `npm isntall --save-dev css-loader style-loader` <br>
  `npm install --save-dev mini-css-extract-plugin` <br>
  Данные команды содержат минимальный набор для удобной разработки web-сайта.

* В _Package.json_ в _"scripts:"_ занесем команды:<br>
  ```json
    "serve": "webpack serve --open --mode development",
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "nodemon": "nodemon --exec babel-node script.js",
    "test": " mocha --require @babel/register"
  ```

* И создадим html страницу, где подключим любой скрипт js<br>
* Командой `>npm run dev` мы соберем проект в режиме development <br>
* Командой `>npm run serve` мы запустим сервер с содержащей страницей.<br>
Страница будет обновляться автоматически при сохранении изменений.

##### Четвертый этап:
Расмотрим инструмент `nodemon`, с помощью которого автоматически запускается anyfilename.js при сохранении изменений в файле.<br>
Данной командой устанавливаем _nodemon_:<br>
`>npm i -g nodemon`<br>
Чтобы открыть файл JS при помощи nodemon, вызовем команду:<br>
`>nodemon anyfilename.js`<br>
Но чтобы рабоать так же с инструментами import/export, мы вызовем команду вместе с _babel_:<br>
`>nodemon --exec babel-node anyfilename.js`


##### Пятый этап:
На данном этапе мы подключим инструменты такие как: mocha и chai, для тестирования наших скриптов.<br>
`>npm i -g mocha`<br>
`>npm i -g chai@4.3.6`<br>
Заметьте chai я подключаю определенной версии, так как если подключить chai начиная с версии 5.0.0 возникают проблемы с ECMAScript.
Чтобы протестировать, как работают эти два инструмента. Создадим два файла script.js и test.js, заполним их: 
```js
  //script.js
  function getSUM(...args){
    return args.reduce((a,b)=>a+b);
  }

  function getMAX(...args){
    return Math.max(...args);
  }

  export {
    getMAX, getSUM
  };
```
```js
  //test.js
  import { getMAX, getSUM } from './script';
  const expect = require('chai').expect;

  describe('Тестируем код', function () {
    it('Сравним два числа:', ()=>{
      let first = 15;
      let second = 15;
      expect(first).to.be.equal(second);
    });

    it('getSUM', function () {
        expect(getSUM(1, 2, 3,4,5)).to.be.equal(15);
    });
    it('getMAX', function () {
        expect(getMAX(1, 2, 3, 4)).to.be.equal(4);
    });
});
```
Вызовем команду, чтобы запустить тестирование:<br>
`>mocha --require @babel/register`<br>
У нас должен получится следующий результат:<br>
![mocha](https://github.com/NikitaVasil/setting_JS/blob/master/img/2024-02-06_00-25-04.png)<br>

### Заключение
Данный краткий экскурс поможет начинающим программистам настроить свой проект и использовать ряд необходимых инструментов,
которые в свою очередь оптимизируют разработку и отладку кода.
