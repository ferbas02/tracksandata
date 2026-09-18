TRACKSAN — Sitio Web
=====================

CONTENIDO DEL PAQUETE
----------------------
index.html              → Página principal del sitio (inglés/español con selector de idioma)
assets/css/styles.css   → Todos los estilos visuales del sitio
assets/js/main.js       → Funcionalidad interactiva (menú móvil, animaciones al hacer scroll,
                           selector de idioma EN/ES)

CÓMO SUBIR EL SITIO
--------------------
Este es un sitio estático (HTML + CSS + JS puro, sin backend, sin base de datos,
sin dependencias de Node/PHP/Python). Para publicarlo, basta con subir estos
tres elementos EXACTAMENTE en esta misma estructura de carpetas a la raíz del
hosting o servidor:

    /
    ├── index.html
    └── assets/
        ├── css/
        │   └── styles.css
        └── js/
            └── main.js

Es importante mantener la carpeta "assets" con esa misma estructura interna
(css/ y js/ como subcarpetas), porque el archivo index.html referencia los
otros dos archivos con esas rutas relativas exactas.

Compatible con cualquier hosting de archivos estáticos: cPanel/FTP tradicional,
Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3+CloudFront, o un servidor
Apache/Nginx normal. No requiere configuración de servidor especial, no
requiere build step, no requiere instalar dependencias.

FUENTES EXTERNAS (Google Fonts)
---------------------------------
El sitio carga tres tipografías desde Google Fonts vía CDN (líneas en el
<head> de index.html: Fraunces, Inter, JetBrains Mono). Esto requiere que
el servidor donde se aloje el sitio tenga salida a internet para que el
navegador del visitante pueda descargar esas fuentes. Si en algún momento
se quiere alojar las fuentes localmente (sin depender de Google), avísenme
y preparo esa versión.

FORMULARIO DE CONTACTO
------------------------
El formulario de la sección de contacto (#contact) actualmente NO está
conectado a ningún backend — es decir, cuando alguien lo completa y presiona
"Send request" / "Enviar solicitud", los datos no se envían a ningún lado
todavía (el atributo onsubmit="return false" en el <form> previene el envío
real por ahora, precisamente para que no falle silenciosamente).

Antes de publicar el sitio en producción, el formulario debe conectarse a
uno de estos métodos (cualquier desarrollador puede implementar esto rápido):
  - Un servicio de formularios como Formspree, Netlify Forms, o Basin
  - Un endpoint propio que reciba el POST y envíe el correo
  - Integración directa con el CRM o correo de TRACKSAN

CORREO DE CONTACTO
--------------------
El sitio muestra "contact@tracksan.com" en varios lugares (encabezado del
formulario, pie de página). Confirmar que esta sea la dirección real antes
de publicar, o reemplazarla por la correcta con un buscar-y-reemplazar en
los tres archivos.

SELECTOR DE IDIOMA
---------------------
El sitio abre en inglés por defecto. El botón EN/ES en la esquina superior
derecha cambia todo el contenido del sitio dinámicamente vía JavaScript
(no son dos páginas separadas, es una sola página con textos duplicados
en un diccionario dentro de main.js). La preferencia de idioma del
visitante se guarda en el navegador (localStorage) para que la recuerde
en su próxima visita.

CUALQUIER DUDA
----------------
Este sitio fue construido íntegramente en HTML/CSS/JavaScript estándar,
sin frameworks (no usa React, Vue, WordPress, etc.), así que cualquier
desarrollador web puede editarlo directamente abriendo los archivos con
cualquier editor de código.
