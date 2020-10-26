# version-x
This small utility helps to change version in your project

## How to use in your project
1. In your terminal run command:
```
npm install @pixelygroup/version-x --save-dev
```
2. Add into scripts section in package.json
```
 "scripts": {
    ...
    "version-x": "version-x",
    "version-major": "version-x -- -m",
    "version-minor": "version-x -- -i",
    "version-patch": "version-x -- -p",
    ...
  },
```

## Usage
```
Usage: -b 1.1.1 <version> / -m <major> / -i <minor> / -p <patch>.
In case of passing multiple options,
the conditions will be checked and applied
in the same order (left > right)

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -x, --exact    requires version in format 1.1.1 or 1.1.1-beta, etc.   [string]
  -m, --major    Bumps a version on X position X.1.1                   [boolean]
  -i, --minor    Bumps a version on X position 1.X.1                   [boolean]
  -p, --patch    Bumps a version on X position 1.1.X                   [boolean]
  -t, --tag      Creates and pushes git tag                            [boolean]
```

## Global installation
### How to install globally directly from cloned Github repo
1. Download the repository.
2. Enter the directory and run

```
npm install -g .
```

### How to install globally from NPM
In your terminal run command:

```
npm install -g @pixelygroup/version-x
```

### How to uninstall globally
```
npm uninstall -g @pixelygroup/version-x
```
## Do you enjoy this package? Help us keep it maintained?
### [Buy us a coffee or become a sponsor](https://github.com/sponsors/pixelygroup)
