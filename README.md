# MineLearning
# Project requirements or dependence:

  - Django 3.0
  - DRF
  - Simple jwt
  - django_json_widget
  - ckeditor
  - PostgreSQL
# Project Deployment
Начнем с миграций
```sh
$ python manage.py makemigrations
$ python manage.py migrate
```
Создаем супер пользователя
```sh
$ python manage.py createsuperuser
```
Теперь самое интересно сборка статических файлов для ckeditor и javascript
Сначала изменим файл setting.py:
    - Отключаем Debug
    - Изменияем настройки путей для static файлов
```sh
#setting.py
DEBUG = False
###
STATIC_URL = '/static/'
#STATIC_DIR = os.path.join(BASE_DIR, 'static')
#STATICFILES_DIRS = [STATIC_DIR, ]
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
```
Собираем статические файлы
```sh
$ python manage.py collectstatic
```
Теперь мы собрали статические файлы, но эти настройки нужны когда проект уже отправлен в продакшен.
Для дальнейшей разработки и отладки нужно использовать следующий алгоритм...
# Project development
Данные настройки для отладки проекта с использованием статических файлов:
```sh
#setting.py
DEBUG = True
###
STATIC_URL = '/static/'
STATIC_DIR = os.path.join(BASE_DIR, 'static')
STATICFILES_DIRS = [STATIC_DIR, ]
#STATIC_ROOT = os.path.join(BASE_DIR, 'static')
```
Сборка статических файлов привела к некоторому неудобству, дело в том что теперь когда мы будем компилировать react код он не будет сохраняться в созданных статических файлах, а будет компилироваться в исходном месте, а именно в компоненте frontend
Теперь есть несколько способов того как заниматься разработкой проекта:
    - Постоянно пересобирать статистические файлы
    - Изменить файлы настроек
Способ 1 был описан выше, теперь о способе изменении настроек
Вы можете закоментировать 2 строки:
```sh
#setting.py
DEBUG = True
###
STATIC_URL = '/static/'
#STATIC_DIR = os.path.join(BASE_DIR, 'static')
#STATICFILES_DIRS = [STATIC_DIR, ]
#STATIC_ROOT = os.path.join(BASE_DIR, 'static')
```
Это приведет к тому что django будет подгружать статические файлы из компонентов, а не из собранной нами коллекции, но зато ckeditor работать не будет тк django его не видит, но вы можете
    - Заранее создать нужные поля в бд с использованием ckeditor(настройки без комментирования 2 строчек)
    - После поменять на настройки(комментирование 2 строк) выше, чтобы быстро отлаживать javacscript код
