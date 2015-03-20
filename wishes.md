# Пожелания по структуре

sass файлы лучше все-таки хранить отдельно от проекта, а привычную структуру проекта css, img, js оставить такой, какая есть
Предлагаю тебе создать папку frontend, в которую вынести папку sass и настройки config.rb

В config.rb слишком много ненужных импортов, посмотри у тебя один и тот же файл подключается раз 20, зачем это?
В config.rb настрой новые пути до папок

Зачем это нужно сделать, то что выше?
Затем, что таким образом ты сможешь разделить исходники от собранного и будет проще ориентироваться
Зачастую, при передаче верстки бакенд разработчику ему не нужны sass исходники, нужен только финальные css/js/img 

Так как, в дальнейшем с помощью grunt/gulp мы научимся не только тупо собирать scss в css, но и оптимизировать графику, оптимизировать собранные стили и js, то исходников будет больше и это "разделение" потребуется еще сильнее

Теперь немного углубимся в структуру scss
Писать все в одном файле, это значит далеко не отходить от привычного css, одна из проблем которого как раз длинный листинг кода, в котором зачастую сложно ориентироваться
Предлагаю тебе все разбить на следующие файлы и папки:

```
sass
    _variables.scss - тут надо хранить переменные
    _mixins.scss - тут надо хранить mixin, которые к слову ты не совсем верно используешь
    _normalize.scss - это normalize, его можно взять с http://necolas.github.io/normalize.css/ Зачем он нужен, расскажу подробнее на созвоне
    _blocks - папка
        тут предлагаю создать файлы, для описания каждого блока на сайте, так будет проще поддерживать и управлять кодом
    _layout - папка
        _header.scss - стили для header
        _footer.scss - стили для footer
    style.scss - главный файл, в котором через @import ты подключишь все другие файлы
```

Зачем я назвал файлы с нижнем подчеркиванием см и читай тут http://www.sass-lang.com/guide в секции Partials

# Пожелания по написанию scss

## Общие пожелания

1. Привести все файлы и их содержимое к структуре выше
2. Переделать переменные. Как, см. ниже
3. Избавиться от лишних mixins, см. ниже
4. Добавить extends

### Проблема с переменными

Во-первых, ` $color: #333; $color2: #fff; $color3: #000;` представь что ты через какое-то время будешь поддерживать этот проект, и я уверен что даже тебе самому, как автору проекта, уже будет не ясно в тексте что значат color1, color2 и тп. Плюс ко всему прочему это не очень-то удобно использовать

Во-вторых, в SASS есть map для того, чтобы объединять общие по логике вещи.

Поэтому, на примере с цветом разберем как это могло бы быть

```
$clrs: (
    black: #000,
    gray: #333,
    white: #fff
);
```
Как это потом использовать?

```
.indexTitle {
    color: map-get($clrs, gray);
}
```

### Проблема с mixins

mixins вообще лучше использовать только тогда, когда ты хочешь внутрь mixin передать какую-то переменную, чтобы можно было использовать его универсально и в разных условиях.

К примеру, очень хорошо когда при использовании inline-block указывается vertical-align. _(Что, кстати, у тебя как раз не очень используется)_
Поэтому, в принципе, для таких целей, чтобы часто не писать эти 2 строчки, можно воспользоваться mixin. Но почему именно mixin? Да потому, что  большинстве случаев нам нужен vertical-align: top, но есть и вероятность того, что нам потребуется и другое выравнивание, которым как раз легко управлять через параметр mixinа

```
@mixin inline-block($valign: $inline-block-alignment) {
    display: inline-block;
    vertical-align: $valign;
}
```

Обрати внимание, что в качестве default параметра я передаю значение переменной $inline-block-alignment, которое почти в каждом проекте у меня установлено в top

Теперь посмотрим на твои mixins

```
@mixin marginsClear() {
  margin: 0;
  padding: 0;
}

@mixin center() {
  margin: 0 auto;
}
```

Ты не передаешь туда никакие параметры и зачем в таком случае использовать mixin не ясно. Лучше использовать @extend, про него ниже

### Улучшаем код используя extend

Что это такое, опять же можно ознакомится вот тут - http://www.sass-lang.com/guide, в секции Extend/Inheritance

Краткая суть в том, что ты можешь использовать общие стили и sass объединит их при компиляции тем самым, сделав оптимизацию стилей. Так же есть еще один хороший момент, если ты хочешь использовать "вспомогательные" общие стили и не хочешь, чтобы создался ненужный класс в css (тот который не будешь использовать), можно ставить вместо . % перед началом селектора. Ниже пример, для того чтобы было понятно о чем речь

```
.offsetsClear {
	margin: 0;
	padding: 0;
}

.wrapper {
	@extend .offsetsClear;
}
```

В 99.99% ты не будешь использовать отдельно классы offsetsClear, поэтому смысла в нем нет. Да он удобен тем, что мы таким образом пишем меньше и объединяем классы, но все-таки чувствуется что он лишний. Поэтому в таком случае, лучше записать все вот так: 

```
%offsetsClear {
	margin: 0;
	padding: 0;
}

.wrapper {
	@extend %offsetsClear;
}
```

После компиляции в этом случае не создастся класс offsetsClear, а те селекторы что используют его в extend объединятся в один.

### Улучшение читабельности кода и использование возможностей SASS

Разберем для начала как правильно использовать его с БЭМ
В SASS 3.3 добавилась возможность писать код так, как ниже

```
.footer__credits {
    тут стили для footer__credits

    &__social-links {
        text-align: center;
        margin-bottom: 40px;

        li {
            display: inline-block;
            margin-right: 5px;
        }
    }
}
```

Плюсов от такого написания, как выше целых 2: 

1. Вместо & подставится ``` footer__credits ``` и таким образом можно быстрее все писать, экономить время на написание стилей
2. В скомпилировааном css будет все выглядеть лучше. Не будет не нужной вложенности. В твоем решении селектор будет ``` .footer__credits .footer__credits__social-links. ``` В решении выше просто ``` .footer__credits__social-links ```

Опять же по причинам излишней вложенности, лучше убрать socialBtn из блока footer__credits и описать его отдельно

```
.socialBtn {
    display: block;
    width: 45px;
    height: 48px;
    background-color: rgba($bgColor2, 1);
    background-image: url($path + "/img/sprites/socials/sprite.png");
    background-repeat: no-repeat;
    
    &-twitter {
        background-position: -55px -3px;
    }

    &-facebook {
        background-position: -1px -7px;
    }

    &-youtube {
        background-position: -116px -3px;
    }
}
```