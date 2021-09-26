# easyeda-i18n

EasyEDA [https://easyeda.com/editor](https://easyeda.com/editor)

EasyEDA is a free, easy to use, powerful online PCB design tool. It helps people bring their creations to life.

If you use EasyEDA and are interested in making it more accessible to people in your country, please help us create the translation files that EasyEDA uses to transform the unser interface into different languages.

This project consists of the EasyEDA Editor language locale files. So the more languages we can add to this list, the more accessible EasyEDA will be for people all over the world.

![图片](https://user-images.githubusercontent.com/29702100/130799335-daf481c8-314b-4fd2-89ea-023261a14248.png)


## Folder

`editor-std`: EasyEDA editor standard edition

## Translations

If you would like to help translate:

* Please fork this project

* Work from your fork, then edit your language file such as `ui_data_uk.txt` (for Ukrainian etc.)

### If you can't find your language file

* Copy **`ui_data_CLEAN.txt`**,

* Change the name of the .txt file using this naming format: `ui_data_xx.txt` where you would replace the xx with your language code. So, for example, if you wanted to translate into Danish, you would rename the file `ui_data_da.txt`.   
  you can refer to this link for the codes: https://www.w3schools.com/tags/ref_language_codes.asp

* Translate the English (on the left side of `=`) into your language, placing your translation on the right side of `=`. The characters on the left side of the `=` symbol **must not be changed**.

For example, if you were translating a file into Russian, you would simply put your translation on the right side of `=`. For example:
```js
// original ui_data_CLEAN.txt
Select = 

// your translated ui_data_ru.txt
Select = Выбрать
```   

If the text has elipses or curly braces, they need to remain in the document.
```js
Join... = Collegati...

Add font success: {name} = 字体添加成功: {name}
```  
The word inside the braces has meaning to the software and should not be translated but it should be included in your translated text on the right.

If a line stars with a hash character, it can be ignored, as hash characters signify a comment in the document and have no impact on the program.
```js
#spice            //this is comment line, don't need to translate
Switch mode = 切换模式
```

When translating a dotted layer notation, it is not necessary to put the dot in the translation. Just translate the words. However, don't remove the dot from the left side of the `=`
```
ALL.layer = 全部层
Copper.layer = 铜箔层
Non-Copper.layer = 非铜箔层
Other.layer = 其他层
```


Items surrounded by brackets simply denote sections and they can be ignored. Please do not modify those demarcation lines, but the words within the sections need to be translated if there is an `=` symbol next to the words.
```js
[menu_project]    //keep this structure
View=查看
[/menu_project]   //keep this structure
```

If you chose to translate into a language that we do not currently have, please update the `language_list.txt` file, and follow its format and insert the language that you are translating into that file. The file will be used to add language menu options in EasyEDA.

```js
# local language (English name) = local language (English name)

# ui_data_zh-hans.txt
简体中文 (Chinese - Simplified) = 简体中文 (Chinese - Simplified)
# ui_data_zh-hant.txt
正體中文 (Chinese - Traditional) = 繁体中文 (Chinese - Traditional)
# ui_data_cs.txt
Čeština (Czech) = Čeština (Czech)
# English
English (English) = English (English)
# ui_data_fr.txt
Français (French) = Française (French)
# ui_data_de.txt
Deutsch (German) = Deutsch (German)

```
The language list can be found here https://github.com/EasyEDA2021/easyeda-i18n/blob/main/editor-std/language_list.txt


The process for doing this, is to first Fork the project on Git over to your account. Then, you clone the repository to your computer - which you can do with the git software client or any number of free git clients.

After you have cloned the project, make a new branch and give it a name of your own choosing. Usually when you create a branch you are given the option to check out that branch, which you need to do. Then you edit the relevant files or copy the base file and rename it etc., making sure that you include those files in your local git project structure.

When you are done, you need to COMMIT the changes you made to the repository, which merely updates your local copy of the project.  Then, you PUSH your local repository back up to your git account and then you log into your git account from a web browser, and go to that repository that you just pushed, and you will see an option to **create a pull request**.

#### Create the pull request

Add a comment to the pull request, and we will then look at your translation and verify that it will work with the software and also check it for accuracy etc. then we will merge it with the master project on our next scheduled maintenance.

## Notice

1) The file named `ui_data_CLEAN.txt` is a root file that is the common template used for all new language translations. Please don't edit this file, but instead make a copy of it, rename it to have your language code in the name, then edit the copy that you made.
2) It is important to edit the file you copied, correctly, making sure you follow the rules listed above. The software looks for the file name that is associated with a given language and if it cannot find the English words that are on the left side of the `=` it will default to showing English instead of the translated text. This is why it's so important to understand the guidlines stated above.
3) We do not need any English translations such as `ui_data_en.txt`, because we have the English language hard coded into the software already and it is the foundation from which the software generates all language translations from the files that you help us create in this project.


## Contributor

**Special Thanks to everyone who has helped translate and for their hard work and dedication to our community. You have helped make EasyEDA more accessible around the globe. THANK YOU**

https://github.com/EasyEDA2021/easyeda-i18n/graphs/contributors

Previous contributors:

- Andrew and Adambyw: Help translated EasyEDA from English to Polish. http://and.elektroda.eu/
- A.Noda: Help translated EasyEDA from English to Japanese language. http://signalkhobho.com/
- JM TERRADE:  Help translated EasyEDA from English to French language. http://terrade.com/
- José Miguel: Help translated EasyEDA from English to Spanish language.
- Kent Ahlberg: Help translated EasyEDA from English to Swedish language.
- Marcel Kuesters: Help translated EasyEDA from English to German language.
- Гололобов Владимир Николаевич: Help translated EasyEDA Tutorial from English to Russian language http://vgololobov.narod.ru/
- Victor Bychek and Травников Александр: Help translated EasyEDA from English to Russian language http://bychek.ru
- 君子兰: Help translated EasyEDA editor from English to Vietnamese language.
- Zdenek Hubner: Help translated EasyEDA from English to Czech language.
- William Kazan: Help translated EasyEDA from English to Portuguese language.
