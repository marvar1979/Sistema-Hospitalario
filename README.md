# Hospitalia — Sistema de Gestión Hospitalaria

**Equipo:** 1 · **Rama:** `equipo1-sistema-hospitalario`  
**Responsable e integrante único:** Mariel Andrea Vargas  
**Estado:** prototipo funcional de demostración (versión 1.0, sin despliegue ni backend).

## Descripción

Hospitalia es una interfaz académica para organizar pacientes y citas médicas en un entorno hospitalario simulado. Dispone de panel con indicadores, registro CRUD de pacientes, agenda CRUD de citas, filtros, búsqueda y estados de atención.

## Objetivo general

Desarrollar una aplicación web básica que facilite la organización simulada de pacientes y citas, aplicando fundamentos de Git, GitHub Flow y documentación de proyectos.

## Tecnologías

HTML5, CSS3, JavaScript ES Modules, JSON y `localStorage`; Node.js solo para ejecutar pruebas automatizadas.

## Cómo ejecutar

Se necesita un servidor HTTP local porque JavaScript utiliza módulos ES. Desde la raíz:

```bash
python -m http.server 8080
```

Abrir `http://localhost:8080`. Alternativamente, utilizar la extensión **Live Server** de Visual Studio Code. No es necesario instalar dependencias para la interfaz.

Para probar las utilidades (requiere Node.js 18 o superior):

```bash
npm test
```

## Funciones

- Registrar, modificar, buscar y eliminar pacientes de demostración.
- Crear, modificar, filtrar y eliminar citas.
- Visualizar cifras de pacientes, citas pendientes, completadas y del día.
- Detectar documentos duplicados y horarios repetidos de una especialidad.
- Restablecer registros de ejemplo desde la sección «Acerca del sistema».

## Organización

- `index.html`: interfaz principal.
- `src/`: estilos, lógica y funciones reutilizables.
- `database/`: ejemplo de datos y esquema JSON.
- `tests/`: pruebas de utilidades.
- `docs/`: Canvas, requisitos, backlog, riesgos, informe y guía de entrega.
- `figma/`: referencia al prototipo visual (enlace real pendiente).
- `github/`: instrucciones de publicación y plantilla de Pull Request.

## Prototipo Figma

Pendiente de elaboración/publicación; consultar `figma/enlace_figma.md`. El prototipo navegable se encuentra en el propio `index.html`.

## Limitaciones y seguridad

**Uso exclusivamente académico.** Los registros son ficticios y se almacenan localmente en el navegador sin sincronización, control de acceso, respaldo seguro ni cifrado de datos clínicos. **No ingresar datos de pacientes reales ni utilizar en atención médica.**

## Estado y próximos pasos

Versión web funcional de demostración. Pendiente: repositorio remoto, publicación de rama, revisión del Pull Request, prototipo Figma y certificado personal de Microsoft Learn.

## Licencia

Proyecto académico de demostración. No se asigna licencia de código abierto por el momento.
