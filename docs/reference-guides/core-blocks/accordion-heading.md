# Accordion Heading

**Name:** `core/accordion-heading`  
**Category:** design  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Displays a heading that toggles the accordion panel.

## Block Relationships

**Parent blocks (direct):**
- `core/accordion-item`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `openByDefault` | `boolean` | `false` | — |
| `title` | `rich-text` | — | Source: `rich-text`. Selector: `.wp-block-accordion-heading__toggle-title`. Role: `content` |
| `level` | `number` | — | — |
| `iconPosition` | `string` | `"right"` | Enum: `left`, `right` |
| `showIcon` | `boolean` | `true` | — |

## Supports

- **anchor**: `true`
- **color**:
  - background: `true`
  - gradients: `true`
- **align**: `false`
- **interactivity**: `true`
- **spacing**:
  - padding: `true`
  - _DefaultControls_ (experimental): `{"padding":true}`
  - _SkipSerialization_ (experimental): `true`
  - _Selector_ (experimental): `.wp-block-accordion-heading__toggle`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"style":true,"width":true}`
- **typography**:
  - _SkipSerialization_ (experimental): `["textDecoration","letterSpacing"]`
  - fontSize: `true`
  - _FontFamily_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true,"fontFamily":true}`
- **shadow**: `true`
- **visibility**: `false`
- **lock**: `false`

## Context

**Uses Context:**

- `core/accordion-icon-position`
- `core/accordion-show-icon`
- `core/accordion-heading-level`

## CSS Selectors

- **typography**:
  - letterSpacing: `.wp-block-accordion-heading .wp-block-accordion-heading__toggle-title`
  - textDecoration: `.wp-block-accordion-heading .wp-block-accordion-heading__toggle-title`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { level, title, iconPosition, showIcon } = attributes;
	const TagName = 'h' + ( level || 3 );
	const typographyProps = getTypographyClassesAndStyles( attributes );

	const blockProps = useBlockProps.save();
	const spacingProps = getSpacingClassesAndStyles( attributes );

	return (
		<TagName { ...blockProps }>
			<button
				type="button"
				className="wp-block-accordion-heading__toggle"
				style={ spacingProps.style }
			>
				{ showIcon && iconPosition === 'left' && (
					<span
						className="wp-block-accordion-heading__toggle-icon"
						aria-hidden="true"
					>
						+
					</span>
				) }
				<RichText.Content
					className="wp-block-accordion-heading__toggle-title"
					tagName="span"
					value={ title }
					style={ {
						letterSpacing: typographyProps.style.letterSpacing,
						textDecoration: typographyProps.style.textDecoration,
					} }
				/>
				{ showIcon && iconPosition === 'right' && (
					<span
						className="wp-block-accordion-heading__toggle-icon"
						aria-hidden="true"
					>
						+
					</span>
				) }
			</button>
		</TagName>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:accordion-heading -->
<h3 class="wp-block-accordion-heading">Accordion Section Title</h3>
<!-- /wp:accordion-heading -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion-heading/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion-heading/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion-heading/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion-heading/deprecated.js)
