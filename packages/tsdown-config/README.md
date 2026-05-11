[![Felix Icaza tsdown Config](https://raw.githubusercontent.com/felixicaza/configs/HEAD/.github/assets/tsdown-config.jpg)](https://npmx.dev/package/@felixicaza/tsdown-config)

# 🔨 @felixicaza/tsdown-config

[![npm version](https://img.shields.io/npm/v/@felixicaza/tsdown-config?color=d68e38&logo=npm&logoColor=888888&labelColor=ffffff)](https://npmx.dev/package/@felixicaza/tsdown-config)
![GitHub actions workflow tests status](https://img.shields.io/github/actions/workflow/status/felixicaza/configs/tests.yml?color=d68e38&logo=rocket&logoColor=888888&label=tests&labelColor=ffffff)
[![license](https://img.shields.io/github/license/felixicaza/configs?color=d68e38&logo=googledocs&logoColor=888888&labelColor=ffffff)](https://github.com/felixicaza/configs/blob/main/LICENSE)

Configuración de tsdown con opciones predefinidas para compilaciones de librerías.

## ✨ Características

- 🎯 Target mínimo Node v24.
- 🗜️ Minificación de archivos de tipos (.d.ts).
- ⚡ Minificación por defecto.
- ✨ Optimización de las compilaciones.

## 📦 Instalación

Puedes instalar [`@felixicaza/tsdown-config`](https://npmx.dev/package/@felixicaza/tsdown-config) usando npm:

```sh
$ npm install tsdown @felixicaza/tsdown-config -D
```

<details>
  <summary>¿Usando un gestor de paquetes diferente?</summary>
  <br/>

  Usando pnpm:
  ```sh
  $ pnpm add tsdown @felixicaza/tsdown-config -D
  ```

  Usando yarn:
  ```sh
  $ yarn add tsdown @felixicaza/tsdown-config -D
  ```

  Usando bun:
  ```sh
  $ bun add tsdown @felixicaza/tsdown-config -D
  ```
</details>

## ⚡ Uso

Establece el preset de configuración en tu archivo de [configuración de tsdown](https://tsdown.dev/options/config-file) `tsdown.config.ts`:

```ts
// tsdown.config.ts
import { felixicaza } from '@felixicaza/tsdown-config'

export default felixicaza()
```

### ⚙️ Opciones

Configuraciones del preset:

#### `options` (object) — opcional

Un objeto que contiene los presets de configuración a usar. Por defecto, se incluyen todos los presets disponibles.

- `dts` (boolean) — Habilita o deshabilita el preset de configuración para minificación de archivos de tipos (.d.ts).
- `staleGuard` (boolean) — Habilita o deshabilita el preset de configuración para optimización de compilación.

#### `userConfigs` (object[]) — opcional

Un array que recibe objetos de configuración de usuario adicionales, [compatibles con las opciones de Tsdown](https://tsdown.dev/reference/api/Interface.UserConfig), para sobrescribir cualquier configuración predeterminada de los presets.

<details>
  <summary>Ejemplo</summary>
  <br/>

  ```ts
  import { felixicaza } from '@felixicaza/tsdown-config'

  export default felixicaza(
    {
      dts: true,
      staleGuard: true
    },
    [
      {
        entry: 'src/index.ts',
        target: 'node18',
        format: 'cjs',
        minify: false
      }
    ]
  )
  ```
</details>

## 📚 Proyectos Relacionados

- [`@felixicaza/eslint-config`](./packages/eslint-config)
- [`@felixicaza/oxfmt-config`](./packages/oxfmt-config)
- [`@felixicaza/oxlint-config`](./packages/oxlint-config)

## 🏆 Créditos

Este paquete está muy inspirado en las siguientes configuraciones, pero adaptadas para [tsdown](https://tsdown.js.org/docs/guide/usage/linter.html):

- [`@anftu/eslint-config`](https://github.com/antfu/eslint-config)
- [`@sxzz/eslint-config`](https://github.com/sxzz/eslint-config)
- [`@ocavue/eslint-config`](https://github.com/ocavue/eslint-config)
- [`@ntnyq/eslint-config`](https://github.com/ntnyq/eslint-config)

## 🤝 Contribuir

Las contribuciones a este repo no son necesarias, pero son bienvenidas. Igualmente, siéntete libre de tomar cualquier configuración, adaptarla a tus necesidades y usarla en tus proyectos.

### ¿Cómo puedo obtener este paquete?

Para obtener este paquete de manera sencilla y sin el historial de Git por detrás, puedes usar [`giget`](https://github.com/unjs/giget) con el siguiente comando:

```sh
$ npx giget@latest gh:felixicaza/configs/packages/tsdown-config tsdown-config
```

Instalar la dependencia de desarrollo:

```sh
$ npm install vitest -D
```

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](https://github.com/felixicaza/configs/blob/main/LICENSE) para más detalles.
