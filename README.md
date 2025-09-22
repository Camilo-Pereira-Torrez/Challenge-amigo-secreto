# Amigo Secreto

Este proyecto es una aplicación web simple para organizar un sorteo de **Amigo Secreto**. Permite ingresar nombres de participantes, mostrarlos en una lista y seleccionar aleatoriamente un amigo secreto de la lista.

## Características

- **Añadir amigos:** Ingresa el nombre de cada participante y añádelo a la lista.
- **Ver la lista:** Todos los nombres ingresados se muestran en una lista en la pantalla.
- **Sortear un amigo secreto:** Haz clic en el botón "Sortear amigo" para seleccionar un nombre de la lista al azar y mostrar el resultado.
- **Validación:** Evita que se añadan nombres vacíos.

## Estructura de Archivos

- `index.html`: Página principal con la estructura HTML.
- `style.css`: Estilos para la interfaz (debe estar en la raíz del proyecto).
- `app.js`: Lógica de JavaScript para gestionar la lista y el sorteo.
- `/assets`: Carpeta con imágenes utilizadas en la interfaz.

## Cómo funciona

1. Escribe el nombre de un amigo en el campo de entrada.
2. Haz clic en "Añadir" para agregar el nombre a la lista.
3. Repite para todos los participantes.
4. Haz clic en "Sortear amigo" para seleccionar aleatoriamente un amigo secreto.

   

https://github.com/user-attachments/assets/67a08129-0e28-4ab5-ab80-bdfa25687d16



## Explicación a detalle de las Funciones Principales

### 1. `addFriend()`

Esta función se activa cuando el usuario hace clic en el botón "Añadir".

- Recupera el valor del campo de entrada (`newFriendName.value`).
- Si la entrada está vacía, muestra una alerta pidiendo al usuario que ingrese un nombre.
- Si la entrada es válida, añade el nombre al array `friends`, limpia el campo de entrada y llama a `updateFriendList()` para refrescar la lista mostrada.

### 2. `updateFriendList()`

Esta función actualiza la lista de amigos que se muestra en la página.

- Primero, limpia la lista actual estableciendo `listAddedFriends.innerHTML = ""`.
- Luego, itera sobre el array `friends` y crea un elemento `<li>` para cada nombre.
- Cada `<li>` se anexa al `<ul>` con el ID `listFriends`, asegurando que la lista mostrada coincida con el estado actual del array.

### 3. `drawFriend()`

Esta función se activa cuando el usuario hace clic en el botón "Sortear amigo".

- Comprueba si hay amigos en la lista. Si no, alerta al usuario para que añada amigos primero.
- Si hay amigos, limpia cualquier resultado anterior de la lista `secretFriend`.
- Genera un índice aleatorio para seleccionar un nombre del array `friends`.
- Crea un elemento `<li>` que muestra el amigo seleccionado al azar y lo anexa al `<ul>` con el ID `secretFriend`.

## Integración con HTML

Asegúrate de que tu `index.html` incluya el archivo JavaScript al final del `<body>`:

```html
<script src="app.js" defer></script>
```

El HTML debe tener los siguientes elementos con los IDs correspondientes:

- `<input id="friend">` para ingresar nombres.
- `<ul id="listFriends">` para mostrar la lista de amigos.
- `<ul id="secretFriend">` para mostrar el resultado del sorteo.

## Configuración de Desarrollo Recomendada

Se recomienda usar la extensión **Live Server** en Visual Studio Code para ejecutar el proyecto localmente y ver las actualizaciones en tiempo real.

Para usarla:

1. Instala la extensión "Live Server" desde el marketplace de VS Code.
2. Haz clic derecho en `index.html` y selecciona **"Open with Live Server"** (también puedes usar los comandos: Alt+L Alt+O).
3. Tu navegador se abrirá automáticamente, mostrando la aplicación y actualizándose cada vez que guardes cambios.
