[![Felix Icaza Oxlint Config](https://raw.githubusercontent.com/felixicaza/configs/HEAD/.github/assets/oxlint-config.jpg)](https://npmx.dev/package/@felixicaza/oxlint-config)

# ⚓ @felixicaza/oxlint-config

[![npm version](https://img.shields.io/npm/v/@felixicaza/oxlint-config?color=07b8e1&logo=npm&logoColor=888888&labelColor=ffffff)](https://npmx.dev/package/@felixicaza/oxlint-config)
![GitHub actions workflow tests status](https://img.shields.io/github/actions/workflow/status/felixicaza/configs/tests.yml?color=07b8e1&logo=rocket&logoColor=888888&label=tests&labelColor=ffffff)
[![license](https://img.shields.io/github/license/felixicaza/configs?color=07b8e1&logo=googledocs&logoColor=888888&labelColor=ffffff)](https://github.com/felixicaza/configs/blob/main/LICENSE)

Configuración de Oxlint con opiniones propias para mantener un código limpio y libre de errores comunes.

## ✨ Características

- 🧪 Type checking habilitado por defecto.
- 🚀 Soporte completo para JavaScript y TypeScript.
- 🔀 Reglas para complejidad ciclomática.
- 🔍 Reglas nativas y portadas de ESLint.
- 📦 Reglas para imports.
- 📝 Reglas para comentarios de JSDoc.
- 🖥️ Reglas para Node.
- ⚓ Reglas de Oxc.
- 🎨 Reglas para formato de ESLint Stylistic.

## 📦 Instalación

Puedes instalar [`@felixicaza/oxlint-config`](https://npmx.dev/package/@felixicaza/oxlint-config) usando npm:

```sh
$ npm install oxlint @felixicaza/oxlint-config -D
```

<details>
  <summary>¿Usando un gestor de paquetes diferente?</summary>
  <br/>

  Usando pnpm:
  ```sh
  $ pnpm add oxlint @felixicaza/oxlint-config -D
  ```

  Usando yarn:
  ```sh
  $ yarn add oxlint @felixicaza/oxlint-config -D
  ```

  Usando bun:
  ```sh
  $ bun add oxlint @felixicaza/oxlint-config -D
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

- `stylistic` (boolean) — Habilita o deshabilita el preset de configuración para formato con ESLint Stylistic.
- `jsdoc` (boolean) — Habilita o deshabilita el preset de configuración para comentarios de JSDoc.
- `complexity` (boolean) — Habilita o deshabilita el preset de configuración para complejidad ciclomática.
- `imports` (boolean) — Habilita o deshabilita el preset de configuración para imports.
- `promise` (boolean) — Habilita o deshabilita el preset de configuración para Promises.
- `node` (boolean) — Habilita o deshabilita el preset de configuración para Node.
- `eslint` (boolean) — Habilita o deshabilita el preset de configuración para reglas nativas y portadas de ESLint.
- `oxc` (boolean) — Habilita o deshabilita el preset de configuración para reglas de Oxc.
- `typescript` (boolean) — Habilita o deshabilita el preset de configuración para TypeScript.

#### `userConfigs` (object[]) — opcional

Un array que recibe objetos de configuración de usuario adicionales, [compatibles con las opciones de Oxlint](https://oxc.rs/docs/guide/usage/linter/config-file-reference.html), para sobrescribir cualquier configuración predeterminada de los presets.

<details>
  <summary>Ejemplo</summary>
  <br/>

  ```ts
  import { felixicaza } from '@felixicaza/oxlint-config'

  export default felixicaza(
    {
      stylistic: true,
      jsdoc: false,
      complexity: true,
      imports: true,
      promise: false,
      node: false,
      eslint: true,
      oxc: true,
      typescript: true
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

Instalar las dependencias de desarrollo:

```sh
$ npm install tsdown @felixicaza/tsdown-config vitest -D
```

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](https://github.com/felixicaza/configs/blob/main/LICENSE) para más detalles.
