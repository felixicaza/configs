[![Felix Icaza mrm preset](https://raw.githubusercontent.com/felixicaza/configs/HEAD/.github/assets/mrm-presets.jpg)](https://npmx.dev/package/@felixicaza/mrm-presets)

# 🛠️ @felixicaza/mrm-presets

[![npm version](https://img.shields.io/npm/v/@felixicaza/mrm-presets?color=0b9d5c&logo=npm&logoColor=888888&labelColor=ffffff)](https://npmx.dev/package/@felixicaza/mrm-presets)
[![GitHub actions workflow tests status](https://img.shields.io/github/actions/workflow/status/felixicaza/configs/tests.yml?color=0b9d5c&logo=rocket&logoColor=888888&label=tests&labelColor=ffffff)](https://github.com/felixicaza/configs/actions/workflows/tests.yml)
[![license](https://img.shields.io/github/license/felixicaza/configs?color=0b9d5c&logo=googledocs&logoColor=888888&labelColor=ffffff)](https://github.com/felixicaza/configs/blob/main/LICENSE)

Una colección de [presets de mrm](https://mrm.js.org/docs/making-presets) para configuraciones automáticas.

## ✨ Características

- 🔒 Medidas de seguridad ante afectaciones a la cadena de suministro mediante `.npmrc` y `pnpm-workspace.yaml`.
- ⚙️ Configuración automática de Oxlint, ESLint y Precommit Hooks.

## ⚡ Uso

Para usar los presets de configuración, simplemente ejecuta los comandos de [mrm](https://mrm.js.org) correspondientes a cada preset.

### 🔒 Security

Linux/MacOS:

```sh
$ npx mrm security --preset @felixicaza/mrm-presets
```

Windows:

```powershell
$ npm exec --package=@felixicaza/mrm-presets --package=mrm -- mrm security --preset @felixicaza/mrm-presets
```

### ⚓ Lint

Linux/MacOS:

```sh
$ npx mrm lint --preset @felixicaza/mrm-presets
```

Windows:

```powershell
$ npm exec --package=@felixicaza/mrm-presets --package=mrm -- mrm lint --preset @felixicaza/mrm-presets
```

## 📚 Proyectos Relacionados

- [`@felixicaza/eslint-config`](./packages/eslint-config)
- [`@felixicaza/oxfmt-config`](./packages/oxfmt-config)
- [`@felixicaza/oxlint-config`](./packages/oxlint-config)
- [`@felixicaza/tsdown-config`](./packages/tsdown-config)

## 🤝 Contribuir

Las contribuciones a este repo no son necesarias, pero son bienvenidas. Igualmente, siéntete libre de tomar cualquier configuración, adaptarla a tus necesidades y usarla en tus proyectos.

### ¿Cómo puedo obtener este paquete?

Para obtener este paquete de manera sencilla y sin el historial de Git por detrás, puedes usar [`giget`](https://github.com/unjs/giget) con el siguiente comando:

```sh
$ npx giget@latest gh:felixicaza/configs/packages/mrm-presets mrm-presets
```

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](https://github.com/felixicaza/configs/blob/main/LICENSE) para más detalles.
