# Group

**Name:** `core/group`  
**Category:** design  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Gather blocks in a layout container.

**Keywords:** `container`, `wrapper`, `row`, `section`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `tagName` | `string` | `"div"` | — |
| `templateLock` | `string \| boolean` | — | Enum: `all`, `insert`, `contentOnly`, `false` |

## Supports

- **__experimentalOnEnter**: `true`
- **__experimentalOnMerge**: `true`
- **__experimentalSettings**: `true`
- **align**: `"wide"`, `"full"`
- **anchor**: `true`
- **ariaLabel**: `true`
- **html**: `false`
- **background**:
  - backgroundImage: `true`
  - backgroundSize: `true`
  - _DefaultControls_ (experimental): `{"backgroundImage":true}`
- **color**:
  - gradients: `true`
  - heading: `true`
  - button: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **shadow**: `true`
- **spacing**:
  - margin: `["top","bottom"]`
  - padding: `true`
  - blockGap: `true`
  - _DefaultControls_ (experimental): `{"padding":true,"blockGap":true}`
- **dimensions**:
  - minHeight: `true`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"style":true,"width":true}`
- **position**:
  - sticky: `true`
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
- **layout**:
  - allowSizingOnChildren: `true`
- **interactivity**:
  - clientNavigation: `true`
- **allowedBlocks**: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes: { tagName: Tag } } ) {
	return <Tag { ...useInnerBlocksProps.save( useBlockProps.save() ) } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:paragraph -->
<p>Inner content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/group/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/group/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/group/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/group/deprecated.js)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/group/variations.js)
