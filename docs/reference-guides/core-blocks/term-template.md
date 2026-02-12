# Term Template

**Name:** `core/term-template`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Contains the block elements used to render a taxonomy term, like the name, description, and more.

## Block Relationships

**Ancestor blocks:**
- `core/terms-query`

## Attributes

_This block has no custom attributes._

## Supports

- **anchor**: `true`
- **reusable**: `false`
- **html**: `false`
- **align**: `"wide"`, `"full"`
- **layout**: `true`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - _FontFamily_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - blockGap: `{"__experimentalDefault":"1.25em"}`
  - _DefaultControls_ (experimental): `{"blockGap":true,"padding":false,"margin":false}`
- **interactivity**:
  - clientNavigation: `true`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`

## Context

**Uses Context:**

- `termQuery`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

export default function TermTemplateSave() {
	return <InnerBlocks.Content />;
}
```

</details>

**Example post content:**

```html
<!-- wp:term-template -->
<!-- wp:term-name {"isLink":true} /-->
<!-- wp:term-count /-->
<!-- /wp:term-template -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/term-template/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/term-template/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/term-template/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/term-template/index.php)
