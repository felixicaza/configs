[![Felix Icaza Oxlint Config](https://raw.githubusercontent.com/felixicaza/configs/HEAD/.github/assets/oxlint-config.jpg)](https://npmx.dev/package/@felixicaza/oxlint-config)

# ⚓ @felixicaza/oxlint-config

[![npm version](https://img.shields.io/npm/v/@felixicaza/oxlint-config?color=07b8e1&logo=npm&logoColor=888888&labelColor=ffffff)](https://npmx.dev/package/@felixicaza/oxlint-config)
[![GitHub actions workflow tests status](https://img.shields.io/github/actions/workflow/status/felixicaza/configs/tests.yml?color=07b8e1&logo=rocket&logoColor=888888&label=tests&labelColor=ffffff)](https://github.com/felixicaza/configs/actions/workflows/tests.yml)
[![license](https://img.shields.io/github/license/felixicaza/configs?color=07b8e1&logo=googledocs&logoColor=888888&labelColor=ffffff)](https://github.com/felixicaza/configs/blob/main/LICENSE)

Configuración de Oxlint con opiniones propias para mantener un código limpio y libre de errores comunes.

## ✨ Características

- 🧪 Type-Aware Linting habilitado por defecto.
- 🚀 Soporte completo para JavaScript y TypeScript.
- 🚫 Reglas código y comentarios Anti-slop.
- ⚡ Reglas de buenas prácticas de mordernización y performance.
- 🔀 Reglas para complejidad ciclomática.
- 🔍 Reglas nativas y portadas de ESLint.
- 📦 Reglas para imports.
- 📝 Reglas para comentarios de JSDoc.
- 🖥️ Reglas para Node.
- ⚓ Reglas de Oxc.
- 🦄 Reglas de Unicorn.
- 🎨 Reglas para formato de ESLint Stylistic.
- 🔭 Reglas para testing con Vitest.

## 📦 Instalación

Puedes instalar [`@felixicaza/oxlint-config`](https://npmx.dev/package/@felixicaza/oxlint-config) usando npm:

```sh
$ npm install oxlint oxlint-tsgolint @felixicaza/oxlint-config -D
```

<details>
  <summary>¿Usando un gestor de paquetes diferente?</summary>
  <br/>

  Usando pnpm:
  ```sh
  $ pnpm add oxlint oxlint-tsgolint @felixicaza/oxlint-config -D
  ```

  Usando yarn:
  ```sh
  $ yarn add oxlint oxlint-tsgolint @felixicaza/oxlint-config -D
  ```

  Usando bun:
  ```sh
  $ bun add oxlint oxlint-tsgolint @felixicaza/oxlint-config -D
  ```
</details>

## ⚡ Uso

Establece el preset de configuración en tu archivo de [configuración de Oxlint](https://oxc.rs/docs/guide/usage/linter/config.html) `oxlint.config.ts` (recomendado):

```ts
// oxlint.config.ts
import { felixicaza } from '@felixicaza/oxlint-config'

export default felixicaza()
```

### ⚙️ Opciones

Configuraciones del preset:

#### `options` (object) — opcional

Un objeto que contiene los presets de configuración a usar. Por defecto, se incluyen todos los presets disponibles.

- `antfu` (boolean) - Habilita o deshabilita el preset de configuración de reglas de Antfu. `true` por defecto.
- `antiSlop` (boolean) - Habilita o deshabilita el preset de configuración anti-slop. `true` por defecto.
- `noCommentSlop` (boolean) - Habilita o deshabilita el preset de configuración de comentarios de código sin slop. `true` por defecto.
- `stylistic` (boolean) — Habilita o deshabilita el preset de configuración para formato con ESLint Stylistic. `true` por defecto.
- `jsdoc` (boolean) — Habilita o deshabilita el preset de configuración para comentarios de JSDoc. `true` por defecto.
- `e18e` (boolean) - Habilita o deshabilita el preset de configuración para reglas de modernización y performance. `true` por defecto.
- `complexity` (boolean) — Habilita o deshabilita el preset de configuración para complejidad ciclomática. `true` por defecto.
- `imports` (boolean) — Habilita o deshabilita el preset de configuración para imports. `true` por defecto.
- `importIntegrity` (boolean|object) — Habilita o deshabilita el preset de configuración para imports. `true` por defecto.
  - `monorepo`? (boolean) - Habilita o deshabilita las reglas y configuraciones para monorepos. `false` por defecto.
- `promise` (boolean) — Habilita o deshabilita el preset de configuración para Promises. `true` por defecto.
- `node` (boolean) — Habilita o deshabilita el preset de configuración para Node. `true` por defecto.
- `eslint` (boolean) — Habilita o deshabilita el preset de configuración para reglas nativas y portadas de ESLint. `true` por defecto.
- `oxc` (boolean) — Habilita o deshabilita el preset de configuración para reglas de Oxc. `true` por defecto.
- `typescript` (boolean) — Habilita o deshabilita el preset de configuración para TypeScript. `true` por defecto.
- `unicorn` (boolean) - Habilita o deshabilita el preset de configuración de Unicorn. `true` por defecto.
- `vitest` (boolean) — Habilita o deshabilita el preset de configuración para testing con Vitest. `false` por defecto.

#### `userConfigs` (object[]) — opcional

Un array que recibe objetos de configuración de usuario adicionales, [compatibles con las opciones de Oxlint](https://oxc.rs/docs/guide/usage/linter/config-file-reference.html), para sobrescribir cualquier configuración predeterminada de los presets.

<details>
  <summary>Ejemplo</summary>
  <br/>

  ```ts
  import { felixicaza } from '@felixicaza/oxlint-config'

  export default felixicaza(
    {
      antfu: true,
      antiSlop: true,
      noCommentSlop: false,
      stylistic: true,
      jsdoc: false,
      e18e: true,
      complexity: true,
      imports: true,
      importIntegrity: false,
      promise: false,
      node: false,
      eslint: true,
      oxc: true,
      typescript: true,
      unicorn: true,
      vitest: true
    },
    [
      {
        rules: {
          'no-console': 'error'
        }
      }
    ]
  )
  ```
</details>

## 📚 Proyectos Relacionados

- [`@felixicaza/eslint-config`](./packages/eslint-config)
- [`@felixicaza/mrm-presets`](./packages/mrm-presets)
- [`@felixicaza/oxfmt-config`](./packages/oxfmt-config)
- [`@felixicaza/tsdown-config`](./packages/tsdown-config)

## 🏆 Créditos

Este paquete está muy inspirado en las siguientes configuraciones, pero adaptadas para [Oxlint](https://oxc.rs/docs/guide/usage/linter.html):

- [`@anftu/eslint-config`](https://github.com/antfu/eslint-config)
- [`@sxzz/eslint-config`](https://github.com/sxzz/eslint-config)
- [`@ocavue/eslint-config`](https://github.com/ocavue/eslint-config)
- [`@ntnyq/eslint-config`](https://github.com/ntnyq/eslint-config)

## 🤝 Contribuir

Las contribuciones a este repo no son necesarias, pero son bienvenidas. Igualmente, siéntete libre de tomar cualquier configuración, adaptarla a tus necesidades y usarla en tus proyectos.

### ¿Cómo puedo obtener este paquete?

Para obtener este paquete de manera sencilla y sin el historial de Git por detrás, puedes usar [`giget`](https://github.com/unjs/giget) con el siguiente comando:

```sh
$ npx giget@latest gh:felixicaza/configs/packages/oxlint-config oxlint-config
```

Remueve el paquete que tiene el prefijo `workspace:*` en las dependencias de desarrollo:

```sh
$ npm uninstall @felixicaza/tsdown-config
```

Instalar las dependencias de desarrollo:

```sh
$ npm install tsdown @felixicaza/tsdown-config vitest -D
```

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](https://github.com/felixicaza/configs/blob/main/LICENSE) para más detalles.
