# Colores

## Utilización

Autogeneración de clases css
Autogeneración de clases color y background
Función `color` para obtener un color
Función `color-alpha` para obtener un color translucido
Función `gradient` para generar degradados



## Settings

Los colores de la aplicación se dividen en tres grupos:

- Colores de marca
- Colores neutros (grises)
- Colores para las notificaciones

Puedes añadir/eliminar/modificar cualquier color, pero tienes que mantener los mismos grupos para que todo funcione correctamente.

Normalmente utilizariamos variables CSS para definir los colores, como hacemos en el resto del framework, pero en este caso estamos utilizando un mapa de SASS.

El principal motivo es aprovechar el potencial de los mapas SASS, que nos permite iterar através de ellos realizando acciones, como crear clases para cada color, o incluso crear variables css.

```scss
//
// Colores
//
$color-brand-map: (
  brand-darker: hsl(190, 90%, 25%),
  brand-dark: hsl(190, 70%, 35%),
  brand: hsl(190, 65%, 45%),
  brand-light: hsl(190, 65%, 65%),
  brand-lighter: hsl(190, 60%, 85%),
);

$color-gray-map: (
  gray1: hsl(196, 25%, 12%),
  gray2: hsl(198, 17%, 28%),
  gray3: hsl(200, 5%, 46%),
  gray4: hsl(198, 7%, 64%),
  gray5: hsl(202, 13%, 83%),
  gray6: hsl(206, 17%, 92%),
  gray7: hsl(220, 18%, 97%),
  gray8: hsl(0, 0%, 100%),
);

$color-notify-map: (
  warning-darker: hsl(39, 100%, 35%),
  warning-dark: hsl(41, 100%, 45%),
  warning: hsl(41, 100%, 60%),
  warning-light: hsl(41, 100%, 75%),
  warning-lighter: hsl(41, 100%, 90%),
  success-darker: hsl(94, 80%, 30%),
  success-dark: hsl(94, 67%, 41%),
  success: hsl(94, 52%, 50%),
  success-light: hsl(94, 66%, 70%),
  success-lighter: hsl(94, 70%, 90%),
  danger-darker: hsl(6, 100%, 30%),
  danger-dark: hsl(6, 100%, 45%),
  danger: hsl(6, 100%, 60%),
  danger-light: hsl(6, 100%, 75%),
);
```
