[![Felix Icaza Oxfmt Config](https://raw.githubusercontent.com/felixicaza/configs/HEAD/.github/assets/oxfmt-config.jpg)](https://npmx.dev/package/@felixicaza/oxfmt-config)

# ⚓ @felixicaza/oxfmt-config

[![npm version](https://img.shields.io/npm/v/@felixicaza/oxfmt-config?color=017d9e&logo=npm&logoColor=888888&labelColor=ffffff)](https://npmx.dev/package/@felixicaza/oxfmt-config)
![GitHub actions workflow tests status](https://img.shields.io/github/actions/workflow/status/felixicaza/configs/tests.yml?color=017d9e&logo=rocket&logoColor=888888&label=tests&labelColor=ffffff)
[![license](https://img.shields.io/github/license/felixicaza/configs?color=017d9e&logo=googledocs&logoColor=888888&labelColor=ffffff)](https://github.com/felixicaza/configs/blob/main/LICENSE)

Configuración de Oxfmt con opiniones propias para formatear código de manera consistente para HTML, CSS, JavaScript, TypeScript, JSX/TSX, JSON, JSONC, JSON5, YAML, TOML, Markdown, MDX y más.

## ✨ Características

- 🚀 Soporte completo para HTML, CSS, JavaScript, TypeScript, JSX/TSX, JSON, JSONC, etc.
- 📄 Formato consistente y compatible con [ESLint Stylistic](https://eslint.style/).
- 📝 Formato para comentarios de JSDoc.

## 📦 Instalación

Puedes instalar [`@felixicaza/oxfmt-config`](https://npmx.dev/package/@felixicaza/oxfmt-config) usando npm:

```sh
$ npm install oxfmt @felixicaza/oxfmt-config -D
```

<details>
  <summary>¿Usando un gestor de paquetes diferente?</summary>
  <br/>

  Usando pnpm:
  ```sh
  $ pnpm add oxfmt @felixicaza/oxfmt-config -D
  ```

  Usando yarn:
  ```sh
  $ yarn add oxfmt @felixicaza/oxfmt-config -D
  ```

  Usando bun:
  ```sh
  $ bun add oxfmt @felixicaza/oxfmt-config -D
  ```
</details>

## ⚡ Uso

Establece el preset de configuración en tu archivo de [configuración de Oxfmt](https://oxc.rs/docs/guide/usage/formatter/config.html) `oxfmt.config.ts` (recomendado):

```ts
// oxfmt.config.ts
import { felixicaza } from '@felixicaza/oxfmt-config'

export default felixicaza()
```

### ⚙️ Opciones

Configuraciones del preset:

#### `options` (object) — opcional

Un objeto que contiene los presets de configuración a usar. Por defecto, se incluyen todos los presets disponibles.

- `base` (boolean) — Habilita o deshabilita las configuraciones base para archivos soportados por Oxfmt.
- `jsdoc` (boolean) — Habilita o deshabilita el preset de configuración para comentarios de JSDoc.
- `mdx` (boolean) — Habilita o deshabilita el preset de configuración para MDX.
- `yaml` (boolean) — Habilita o deshabilita el preset de configuración para YAML.

#### `userConfigs` (object[]) — opcional

Un array que recibe objetos de configuración de usuario adicionales, [compatibles con las opciones de Oxfmt](https://oxc.rs/docs/guide/usage/formatter/config-file-reference.html), para sobrescribir cualquier configuración predeterminada de los presets.

<details>
  <summary>Ejemplo</summary>
  <br/>

  ```ts
  import { felixicaza } from '@felixicaza/oxfmt-config'

  export default felixicaza(
    {
      base: true,
      jsdoc: true,
      mdx: true,
      yaml: false
    },
    [
      {
        arrowParens: 'avoid'
      }
    ]
  )
  ```
</details>

## 📚 Proyectos Relacionados

- [`@felixicaza/eslint-config`](./packages/eslint-config)
- [`@felixicaza/mrm-presets`](./packages/mrm-presets)
- [`@felixicaza/oxlint-config`](./packages/oxlint-config)
- [`@felixicaza/tsdown-config`](./packages/tsdown-config)

## 🏆 Créditos

Este paquete está muy inspirado en las siguientes configuraciones, pero adaptadas para [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html):

- [`@anftu/eslint-config`](https://github.com/antfu/eslint-config)
- [`@sxzz/eslint-config`](https://github.com/sxzz/eslint-config)
- [`@ocavue/eslint-config`](https://github.com/ocavue/eslint-config)
- [`@ntnyq/eslint-config`](https://github.com/ntnyq/eslint-config)

## 🤝 Contribuir

Las contribuciones a este repo no son necesarias, pero son bienvenidas. Igualmente, siéntete libre de tomar cualquier configuración, adaptarla a tus necesidades y usarla en tus proyectos.

### ¿Cómo puedo obtener este paquete?

Para obtener este paquete de manera sencilla y sin el historial de Git por detrás, puedes usar [`giget`](https://github.com/unjs/giget) con el siguiente comando:

```sh
$ npx giget@latest gh:felixicaza/configs/packages/oxfmt-config oxfmt-config
```

Instalar las dependencias de desarrollo:

```sh
$ npm install tsdown @felixicaza/tsdown-config vitest -D
```

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](https://github.com/felixicaza/configs/blob/main/LICENSE) para más detalles.
