[![Felix Icaza ESLint Config](https://raw.githubusercontent.com/felixicaza/configs/HEAD/.github/assets/eslint-config.jpg)](https://npmx.dev/package/@felixicaza/eslint-config)

# 🔍 @felixicaza/eslint-config

[![npm version](https://img.shields.io/npm/v/@felixicaza/eslint-config?color=641efc&logo=npm&logoColor=888888&labelColor=ffffff)](https://npmx.dev/package/@felixicaza/eslint-config)
![GitHub actions workflow tests status](https://img.shields.io/github/actions/workflow/status/felixicaza/configs/tests.yml?color=641efc&logo=rocket&logoColor=888888&label=tests&labelColor=ffffff)
[![license](https://img.shields.io/github/license/felixicaza/configs?color=641efc&logo=googledocs&logoColor=888888&labelColor=ffffff)](https://github.com/felixicaza/configs/blob/main/LICENSE)

Configuración de ESLint con opiniones propias para Astro, JSON, JSONC, JSON5 y YAML.

### ¿Por qué?

Este paquete brinda soporte de linting y formato (vía [ESLint Stylistic](https://eslint.style/)) para archivos que no son compatibles con [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) u [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html).

> [!IMPORTANT]
> Este paquete planea ser deprecado en el futuro en favor de [Oxlint](https://oxc.rs/docs/guide/usage/linter.html), que es un linter moderno y con mejor rendimiento. Sin embargo, mientras no se soporte completamente plugins de lenguajes, este paquete seguirá estando activo.
>
> Ver: [Embedded Framework Support for Oxlint (Language Plugins)](https://github.com/oxc-project/oxc/discussions/21936) y [`@felixicaza/oxlint-config`](https://github.com/felixicaza/configs/blob/main/packages/oxlint-config) para JavaScript y TypeScript.

## ✨ Características

- 🚀 Soporte completo de linting y formato para Astro.
- 📄 Linter y formato para JSON, JSONC y JSON5.
- 🧾 Ordena correctamente el archivo `package.json`.
- 🗒️ Soporte de linter y formato para YAML.

## 📦 Instalación

Puedes instalar [`@felixicaza/eslint-config`](https://npmx.dev/package/@felixicaza/eslint-config) usando npm:

```sh
$ npm install eslint @felixicaza/eslint-config -D
```

<details>
  <summary>¿Usando un gestor de paquetes diferente?</summary>
  <br/>

  Usando pnpm:
  ```sh
  $ pnpm add eslint @felixicaza/eslint-config -D
  ```

  Usando yarn:
  ```sh
  $ yarn add eslint @felixicaza/eslint-config -D
  ```

  Usando bun:
  ```sh
  $ bun add eslint @felixicaza/eslint-config -D
  ```
</details>

## ⚡ Uso

Establece el preset de configuración en tu archivo de [configuración de ESLint](https://eslint.org/docs/latest/use/configure/configuration-files) `eslint.config.js` o `eslint.config.ts` (para la configuración en TypeScript necesitarás instalar [`jiti`](https://eslint.org/docs/latest/use/configure/configuration-files#typescript-configuration-files)):

```ts
// eslint.config.js o eslint.config.ts
import { felixicaza } from '@felixicaza/eslint-config'

export default felixicaza()
```

### ⚙️ Opciones

Configuraciones del preset:

#### `options` (object) — opcional

Un objeto que contiene los presets de configuración a usar. Por defecto, se incluyen todos los presets disponibles.

- `astro` (boolean) — Habilita o deshabilita el preset de configuración para Astro.
- `json` (boolean) — Habilita o deshabilita el preset de configuración para JSON, JSONC y JSON5.
- `yaml` (boolean) — Habilita o deshabilita el preset de configuración para YAML.

#### `userConfigs` (object[]) — opcional

Un array que recibe objetos de configuración de usuario adicionales, [compatibles con las opciones de ESLint](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects), para sobrescribir cualquier configuración predeterminada de los presets.

<details>
  <summary>Ejemplo</summary>
  <br/>

  ```ts
  import { felixicaza } from '@felixicaza/eslint-config'

  export default felixicaza(
    {
      astro: true,
      json: true,
      yaml: false
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

- [`@felixicaza/mrm-presets`](./packages/mrm-presets)
- [`@felixicaza/oxfmt-config`](./packages/oxfmt-config)
- [`@felixicaza/oxlint-config`](./packages/oxlint-config)
- [`@felixicaza/tsdown-config`](./packages/tsdown-config)

## 🏆 Créditos

Este paquete está muy inspirado en las siguientes configuraciones:

- [`@anftu/eslint-config`](https://github.com/antfu/eslint-config)
- [`@sxzz/eslint-config`](https://github.com/sxzz/eslint-config)
- [`@ocavue/eslint-config`](https://github.com/ocavue/eslint-config)
- [`@ntnyq/eslint-config`](https://github.com/ntnyq/eslint-config)

## 🤝 Contribuir

Las contribuciones a este repo no son necesarias, pero son bienvenidas. Igualmente, siéntete libre de tomar cualquier configuración, adaptarla a tus necesidades y usarla en tus proyectos.

### ¿Cómo puedo obtener este paquete?

Para obtener este paquete de manera sencilla y sin el historial de Git por detrás, puedes usar [`giget`](https://github.com/unjs/giget) con el siguiente comando:

```sh
$ npx giget@latest gh:felixicaza/configs/packages/eslint-config eslint-config
```

Instalar las dependencias de desarrollo:

```sh
$ npm install tsdown @felixicaza/tsdown-config vitest -D
```

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](https://github.com/felixicaza/configs/blob/main/LICENSE) para más detalles.
