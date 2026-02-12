# Accordion Item

**Name:** `core/accordion-item`  
**Category:** design  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Wraps the heading and panel in one unit.

## Block Relationships

**Parent blocks (direct):**
- `core/accordion`

**Allowed inner blocks:**
- `core/accordion-heading`
- `core/accordion-panel`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `openByDefault` | `boolean` | `false` | — |

## Supports

- **html**: `false`
- **color**:
  - background: `true`
  - gradients: `true`
- **interactivity**: `true`
- **spacing**:
  - margin: `["top","bottom"]`
  - blockGap: `true`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"style":true,"width":true}`
- **shadow**: `true`
- **layout**:
  - allowEditing: `false`
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
- **contentRole**: `true`

## Context

**Provides Context:**

- `core/accordion-open-by-default` → attribute `openByDefault`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { openByDefault } = attributes;
	const blockProps = useBlockProps.save( {
		className: clsx( {
			'is-open': openByDefault,
		} ),
	} );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );
	return <div { ...innerBlocksProps } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:accordion-item -->
<!-- wp:accordion-heading -->
<h3 class="wp-block-accordion-heading">Section Title</h3>
<!-- /wp:accordion-heading -->
<!-- wp:accordion-panel -->
<div class="wp-block-accordion-panel"><!-- wp:paragraph -->
<p>Content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:accordion-panel -->
<!-- /wp:accordion-item -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion-item/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion-item/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion-item/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion-item/index.php)
