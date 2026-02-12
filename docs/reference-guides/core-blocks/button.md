# Button

**Name:** `core/button`  
**Category:** design  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Prompt visitors to take action with a button-style link.

**Keywords:** `link`

## Block Relationships

**Parent blocks (direct):**
- `core/buttons`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `tagName` | `string` | `"a"` | Enum: `a`, `button` |
| `type` | `string` | `"button"` | — |
| `url` | `string` | — | Source: `attribute`. Selector: `a`. HTML attribute: `href`. Role: `content` |
| `title` | `string` | — | Source: `attribute`. Selector: `a,button`. HTML attribute: `title`. Role: `content` |
| `text` | `rich-text` | — | Source: `rich-text`. Selector: `a,button`. Role: `content` |
| `linkTarget` | `string` | — | Source: `attribute`. Selector: `a`. HTML attribute: `target`. Role: `content` |
| `rel` | `string` | — | Source: `attribute`. Selector: `a`. HTML attribute: `rel`. Role: `content` |
| `placeholder` | `string` | — | — |
| `backgroundColor` | `string` | — | — |
| `textColor` | `string` | — | — |
| `gradient` | `string` | — | — |
| `width` | `number` | — | — |

## Supports

- **anchor**: `true`
- **splitting**: `true`
- **align**: `false`
- **alignWide**: `false`
- **color**:
  - _SkipSerialization_ (experimental): `true`
  - gradients: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **typography**:
  - _SkipSerialization_ (experimental): `["fontSize","lineHeight","textAlign","fontFamily","fontWeight","fontStyle","textTransform","textDecoration","letterSpacing"]`
  - fontSize: `true`
  - lineHeight: `true`
  - textAlign: `true`
  - _FontFamily_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _WritingMode_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **reusable**: `false`
- **shadow**:
  - _SkipSerialization_ (experimental): `true`
- **spacing**:
  - _SkipSerialization_ (experimental): `true`
  - padding: `["horizontal","vertical"]`
  - _DefaultControls_ (experimental): `{"padding":true}`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
  - _SkipSerialization_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"style":true,"width":true}`
- **interactivity**:
  - clientNavigation: `true`

## Block Styles

| Style Name | Label | Default |
|------------|-------|---------|
| `fill` | Fill | Yes |
| `outline` | Outline | No |

## CSS Selectors

- **root**: `.wp-block-button .wp-block-button__link`
- **typography**:
  - writingMode: `.wp-block-button`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes, className } ) {
	const {
		tagName,
		type,
		fontSize,
		linkTarget,
		rel,
		style,
		text,
		title,
		url,
		width,
	} = attributes;

	const TagName = tagName || 'a';
	const isButtonTag = 'button' === TagName;
	const buttonType = type || 'button';
	const borderProps = getBorderClassesAndStyles( attributes );
	const colorProps = getColorClassesAndStyles( attributes );
	const spacingProps = getSpacingClassesAndStyles( attributes );
	const shadowProps = getShadowClassesAndStyles( attributes );
	const typographyProps = getTypographyClassesAndStyles( attributes );
	const buttonClasses = clsx(
		'wp-block-button__link',
		colorProps.className,
		borderProps.className,
		typographyProps.className,
		{
			// For backwards compatibility add style that isn't provided via
			// block support.
			'no-border-radius': style?.border?.radius === 0,
			[ `has-custom-font-size` ]: fontSize || style?.typography?.fontSize,
		},
		__experimentalGetElementClassName( 'button' )
	);
	const buttonStyle = {
		...borderProps.style,
		...colorProps.style,
		...spacingProps.style,
		...shadowProps.style,
		...typographyProps.style,
		writingMode: undefined,
	};

	// The use of a `title` attribute here is soft-deprecated, but still applied
	// if it had already been assigned, for the sake of backward-compatibility.
	// A title will no longer be assigned for new or updated button block links.

	const wrapperClasses = clsx( className, {
		[ `has-custom-width wp-block-button__width-${ width }` ]: width,
	} );

	return (
		<div { ...useBlockProps.save( { className: wrapperClasses } ) }>
			<RichText.Content
				tagName={ TagName }
				type={ isButtonTag ? buttonType : null }
				className={ buttonClasses }
				href={ isButtonTag ? null : url }
				title={ title }
				style={ buttonStyle }
				value={ text }
				target={ isButtonTag ? null : linkTarget }
				rel={ isButtonTag ? null : rel }
			/>
		</div>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Button text</a></div>
<!-- /wp:button -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/button/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/button/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/button/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/button/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/button/deprecated.js)
