# Guía de publicación en GitHub

El enunciado solicita clonar un repositorio oficial. Como no se proporcionó uno, se prepara un repositorio nuevo personal para publicar el proyecto. **No debe afirmarse que se clonó el repositorio oficial.**

## Paso 1 — Inicializar main

Abrir la terminal en la carpeta `Sistema_Hospitalario_Equipo1`:

```bash
git init -b main
git config user.name "Mariel Andrea Vargas"
git config user.email "TU_CORREO_CONFIRMADO_DE_GITHUB"
git add .gitignore package.json
git commit -m "chore: inicializar repositorio y configuración"
git branch --show-current
```

## Paso 2 — Crear la rama solicitada

```bash
git switch -c equipo1-sistema-hospitalario
git branch --show-current
```

## Paso 3 — Los cinco commits de la actividad

Ejecutar en orden. El commit inicial de configuración no sustituye ninguno de los cinco solicitados.

```bash
git add index.html src/ database/demo.json
git commit -m "feat: implementar gestión de pacientes y citas"

git add docs/Canvas.pdf docs/Requisitos.docx
git commit -m "docs: agregar canvas y requisitos funcionales"

git add figma/ README.md
git commit -m "docs: documentar proyecto y referencia visual"

git add database/schema.json tests/ package.json
git commit -m "test: añadir esquema y pruebas de validación"

git add docs/Backlog.xlsx docs/Riesgos.xlsx docs/Informe_Actividad_2.pdf docs/Guia_Evidencias.md github/
git commit -m "docs: incorporar backlog riesgos e informe"
```

Si algún archivo no cambió entre commits, Git lo indicará; revisar con `git status`. No publicar información privada.

## Paso 4 — Crear el repositorio web

Entrar en https://github.com/new, crear uno llamado `sistema-hospitalario-equipo1` **vacío**, sin README ni `.gitignore`. Copiar la URL resultante:

```bash
git remote add origin https://github.com/TU_USUARIO/sistema-hospitalario-equipo1.git
git push -u origin main
git push -u origin equipo1-sistema-hospitalario
```

Como `main` se creó con un commit inicial y la implementación está en la rama del equipo, el PR mostrará los cinco commits y archivos del sistema. GitHub solicitará autenticación.

## Paso 5 — Solicitar revisión

GitHub → Pull requests → New pull request → base `main` ← compare `equipo1-sistema-hospitalario`. Copiar la descripción de `github/PULL_REQUEST_TEMPLATE.md`, asignar un revisor real disponible y crear el PR. Hacer merge **solo si está aprobado**.

## Evidencias reales a capturar

1. Perfil de Microsoft Learn mostrando nombre, ruta, progreso y fecha.
2. Terminal con `git branch --show-current` mostrando `main` antes de cambiar de rama.
3. Terminal mostrando creación y cambio a rama `equipo1-sistema-hospitalario`.
4. Ramas y archivos publicados desde GitHub.
5. Explorador de archivos abierto en VS Code.
6. README previsualizado y su código Markdown.
7. Historial de cinco commits y perfil de contribuciones.
8. PR con rama origen, destino, descripción y revisor; merge solo si está aprobado.

**Nota:** cualquier evidencia aún no obtenida debe permanecer identificada como pendiente, nunca reemplazarse por una captura artificial.
