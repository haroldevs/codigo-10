# First day with Gith/Gitub

Command to configure user and email
* para ver la versión de git

```bash
git --version
```
* Para configurar el correo
```bash
 git config --global username "email"
 ```

 * para configurar el username
```bash
 git config --global username "username"
 ```

 * Para inicializar el repositorio local git
 ```bash
 git init
 ```

* Para ver el estado de nuestros cambios

```bash
 git status
 ```

 * Agrega archvios a la memoria de la pc

```bash
 git add .
 ```

* Crea el registro de los cambios realizados
```bash
 git commit -m "comentario"
 ```

*PODER VER HISTORIAL DE COMMITS

[]git log retorna UN `id` con este id vamos a poder ver el detalle de los cambios que se hicieron en este commit.

```bash
 git log
 ```
* Poder ver el detalle del commmit usamos
```bash
 git show id-del-commit
 ```