# Accordion

**Name:** `core/accordion`  
**Category:** design  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Displays a foldable layout that groups content in collapsible sections.

## Block Relationships

**Allowed inner blocks:**
- `core/accordion-item`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `iconPosition` | `string` | `"right"` | — |
| `showIcon` | `boolean` | `true` | — |
| `autoclose` | `boolean` | `false` | — |
| `headingLevel` | `number` | `3` | — |
| `levelOptions` | `array` | — | — |

## Supports

- **anchor**: `true`
- **html**: `false`
- **align**: `"wide"`, `"full"`
- **background**:
  - backgroundImage: `true`
  - backgroundSize: `true`
  - _DefaultControls_ (experimental): `{"backgroundImage":true}`
- **color**:
  - background: `true`
  - gradients: `true`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"style":true,"width":true}`
- **spacing**:
  - padding: `true`
  - margin: `["top","bottom"]`
  - blockGap: `true`
- **shadow**: `true`
- **layout**: `true`
- **ariaLabel**: `true`
- **interactivity**: `true`
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

- `core/accordion-icon-position` → attribute `iconPosition`
- `core/accordion-show-icon` → attribute `showIcon`
- `core/accordion-heading-level` → attribute `headingLevel`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save() {
	const blockProps = useBlockProps.save( {
		role: 'group',
	} );
	return <div { ...useInnerBlocksProps.save( blockProps ) } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:accordion -->
<div class="wp-block-accordion"><!-- wp:accordion-item -->
<!-- wp:accordion-heading -->
<h3 class="wp-block-accordion-heading">Section Title</h3>
<!-- /wp:accordion-heading -->
<!-- wp:accordion-panel -->
<div class="wp-block-accordion-panel"><!-- wp:paragraph -->
<p>Panel content here.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:accordion-panel -->
<!-- /wp:accordion-item --></div>
<!-- /wp:accordion -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion/index.php)
