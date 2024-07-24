Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v12 o superior)
- [npm](https://www.npmjs.com/) (v6 o superior)
- [Angular CLI](https://angular.io/cli)

## Instalación de Angular CLI

Para instalar Angular CLI, abre una terminal y ejecuta el siguiente comando:

npm install -g @angular/cli


Instalar Dependencias
Después de clonar el repositorio, navega a la carpeta del proyecto e instala las dependencias necesarias ejecutando los siguientes comandos:

cd nombre-del-proyecto
npm install
Ejecutar el Proyecto


Para iniciar el servidor de desarrollo y ver tu proyecto en el navegador, ejecuta el siguiente comando:

ng serve

Luego, abre tu navegador y navega a http://localhost:4200.

Estructura del Proyecto
Aquí tienes una visión general de los archivos y carpetas más importantes en un proyecto Angular:

src/: Contiene el código fuente del proyecto.
app/: Contiene los componentes y módulos principales.
assets/: Contiene recursos estáticos como imágenes y estilos.
environments/: Contiene configuraciones específicas para diferentes entornos (desarrollo, producción).
Buenas Prácticas al Realizar Commits
Mantener un historial de commits limpio y bien documentado es crucial para la colaboración y el mantenimiento del código. Aquí tienes algunas buenas prácticas para realizar commits:

Commits Frecuentes y Atómicos:

Realiza commits frecuentemente y asegúrate de que cada commit esté enfocado en un solo cambio o tarea. Esto facilita el seguimiento de cambios y la identificación de errores.
Mensajes de Commit Claros y Descriptivos:

Usa mensajes de commit que describan claramente lo que se ha cambiado y por qué. Un buen formato para los mensajes de commit es:

python
Copiar código
tipo(scope): descripción breve

Cuerpo del mensaje (opcional). Aquí puedes explicar en más detalle el "qué" y el "por qué" del cambio.
Ejemplos de tipos de commits:

feat: Una nueva característica
fix: Arreglo de un bug
docs: Cambios en la documentación
style: Cambios que no afectan el significado del código (espacios en blanco, formato, etc.)
refactor: Cambios en el código que no corrigen errores ni añaden características
test: Añadir o corregir tests
chore: Cambios en el proceso de construcción o herramientas auxiliares y bibliotecas
Ejemplo de mensaje de commit:
