# Social Icons

**Name:** `core/social-links`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Display icons linking to your social profiles or sites.

**Keywords:** `links`

## Block Relationships

**Allowed inner blocks:**
- `core/social-link`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `iconColor` | `string` | — | — |
| `customIconColor` | `string` | — | — |
| `iconColorValue` | `string` | — | — |
| `iconBackgroundColor` | `string` | — | — |
| `customIconBackgroundColor` | `string` | — | — |
| `iconBackgroundColorValue` | `string` | — | — |
| `openInNewTab` | `boolean` | `false` | — |
| `showLabels` | `boolean` | `false` | — |
| `size` | `string` | — | — |

## Supports

- **align**: `"left"`, `"center"`, `"right"`
- **anchor**: `true`
- **html**: `false`
- **__experimentalExposeControlsToChildren**: `true`
- **layout**:
  - allowSwitching: `false`
  - allowInheriting: `false`
  - allowVerticalAlignment: `false`
  - default: `{"type":"flex"}`
- **color**:
  - enableContrastChecker: `false`
  - background: `true`
  - gradients: `true`
  - text: `false`
  - _DefaultControls_ (experimental): `{"background":false}`
- **spacing**:
  - blockGap: `["horizontal","vertical"]`
  - margin: `true`
  - padding: `true`
  - units: `["px","em","rem","vh","vw"]`
  - _DefaultControls_ (experimental): `{"blockGap":true,"margin":true,"padding":false}`
- **interactivity**:
  - clientNavigation: `true`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`
- **contentRole**: `true`
- **listView**: `true`

## Context

**Provides Context:**

- `openInNewTab` → attribute `openInNewTab`
- `showLabels` → attribute `showLabels`
- `iconColor` → attribute `iconColor`
- `iconColorValue` → attribute `iconColorValue`
- `iconBackgroundColor` → attribute `iconBackgroundColor`
- `iconBackgroundColorValue` → attribute `iconBackgroundColorValue`

## Block Styles

| Style Name | Label | Default |
|------------|-------|---------|
| `default` | Default | Yes |
| `logos-only` | Logos Only | No |
| `pill-shape` | Pill Shape | No |

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( props ) {
	const {
		attributes: {
			iconBackgroundColorValue,
			iconColorValue,
			showLabels,
			size,
		},
	} = props;

	const className = clsx( size, {
		'has-visible-labels': showLabels,
		'has-icon-color': iconColorValue,
		'has-icon-background-color': iconBackgroundColorValue,
	} );
	const blockProps = useBlockProps.save( { className } );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <ul { ...innerBlocksProps } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:social-links -->
<ul class="wp-block-social-links"><!-- wp:social-link {"url":"https://twitter.com","service":"twitter"} /--></ul>
<!-- /wp:social-links -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/social-links/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/social-links/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/social-links/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/social-links/deprecated.js)
