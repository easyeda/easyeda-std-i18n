# easyeda-i18n

EasyEDA [https://easyeda.com/editor](https://easyeda.com/editor) 

EasyEDA is a free and and powerful and easy to use online PCB tool, it helps a lot of people to bring the idea to real design. 

If you using EasyEDA and love to share it or your public projects with your conutry friends, please help us to make a translation. 

This porject is EasyEDA editor and website i18n locale files, the more language translations contribution will be welcome.

![图片](https://user-images.githubusercontent.com/29702100/130799335-daf481c8-314b-4fd2-89ea-023261a14248.png)


## Folder

`editor-std`: EasyEDA editor standard edition

## Translations

If you would like to help to translation:

1> please fork this project

2> change to the forked project, then edit your language file such as `ui_data_uk.txt` etc. 

3> if you can't find your language file, 

3.1 you can copy **`ui_data_hans.txt`**, 

3.2 and then modify the txt file name with your language code, for example `ui_data_xx.txt`, xx is your language code.   

the language code please refer at https://www.w3schools.com/tags/ref_language_codes.asp   

3.3 and then remove the Chinese text, translate the English to your language. The characters before `=` need to be preserved.  

for example:  
```js
// at ui_data_hans.txt
Select = 选择

// at ui_data_ru.txt
Select = Выбрать
```   

3.4 If the text has free dot(...) or '{}', you need to keep it, for example:  
```js
Join... = Collegati...

Add font success: {name} = 字体添加成功: {name}      //keep the {name}
```  

3.5 The "#" charater start line, just the comment line, please ingore it  
```js
#spice            //this is comment line, don't need to translate
Switch mode = 切换模式
```

the layer translation string, don't need to keep the dot charater, just translate the whole string:
```
ALL.layer = 全部层
Copper.layer = 铜箔层
Non-Copper.layer = 非铜箔层
Other.layer = 其他层
```


3.6 If the text has such structure, please keep it
```js
[menu_project]    //keep this structure
View=查看
[/menu_project]   //keep this structure
```

3.7 If you find out the text miss '=' charater, you can add it by yourself:
```js
Carrier Freq[Hz]  //before
Carrier Freq[Hz] = 载波频率[Hz]  //after
```


3.8 If add a new language file, you need to add it at 'language_list.txt'. We will add this list to editor language menu list

language list as below:
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
the more language list please refer at https://github.com/EasyEDA2021/easyeda-i18n/blob/main/editor-std/language_list.txt


4> when you finish, please make a pull request(before pull request, please fetch and merge this main branch first to avoid the merge conflict), we will merge it. There is no good way to test the translation yet, need to wait us to release a new editor version.

5> we check your translations if they are correctly, we will add it at next editor/website release.


## Notice

1) the `ui_data_hans.txt` is the based locale file, it has full translations. please don't edit it. 
2) if you want to change language to Polish, the editor will read `ui_data_pl.txt` first, if the editor can't find the correspond with English words at this file, then the editor will show the default English word for instead.
3) don't need to create `ui_data_en.txt`, all English words are came from hard code.


## Contributor

**Thanks for all the contributors to help to translate the EasyEDA editor. Thanks**

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
