# Input Field

**Name:** `core/form-input`  
**Category:** common  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> The basic building block for forms.

**Keywords:** `input`, `form`

## Block Relationships

**Ancestor blocks:**
- `core/form`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | `string` | `"text"` | — |
| `name` | `string` | — | — |
| `label` | `rich-text` | `"Label"` | Source: `rich-text`. Selector: `.wp-block-form-input__label-content`. Role: `content` |
| `inlineLabel` | `boolean` | `false` | — |
| `required` | `boolean` | `false` | Source: `attribute`. Selector: `.wp-block-form-input__input`. HTML attribute: `required` |
| `placeholder` | `string` | — | Source: `attribute`. Selector: `.wp-block-form-input__input`. HTML attribute: `placeholder`. Role: `content` |
| `value` | `string` | `""` | Source: `attribute`. Selector: `input`. HTML attribute: `value` |
| `visibilityPermissions` | `string` | `"all"` | — |

## Supports

- **anchor**: `true`
- **reusable**: `false`
- **spacing**:
  - margin: `["top","bottom"]`
- **__experimentalBorder**:
  - radius: `true`
  - _SkipSerialization_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"radius":true}`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { type, name, label, inlineLabel, required, placeholder, value } =
		attributes;

	const borderProps = getBorderClassesAndStyles( attributes );
	const colorProps = getColorClassesAndStyles( attributes );

	const inputStyle = {
		...borderProps.style,
		...colorProps.style,
	};

	const inputClasses = clsx(
		'wp-block-form-input__input',
		colorProps.className,
		borderProps.className
	);
	const TagName = type === 'textarea' ? 'textarea' : 'input';

	const blockProps = useBlockProps.save();

	// Note: radio inputs aren't implemented yet.
	const isCheckboxOrRadio = type === 'checkbox' || type === 'radio';

	if ( 'hidden' === type ) {
		return <input type={ type } name={ name } value={ value } />;
	}

	return (
		<div { ...blockProps }>
			{ /* eslint-disable jsx-a11y/label-has-associated-control */ }
			<label
				className={ clsx( 'wp-block-form-input__label', {
					'is-label-inline': inlineLabel,
				} ) }
			>
				{ ! isCheckboxOrRadio && (
					<span className="wp-block-form-input__label-content">
						<RichText.Content value={ label } />
					</span>
				) }
				<TagName
					className={ inputClasses }
					type={ 'textarea' === type ? undefined : type }
					name={ name || getNameFromLabel( label ) }
					required={ required }
					aria-required={ required }
					placeholder={ placeholder || undefined }
					style={ inputStyle }
				/>
				{ isCheckboxOrRadio && (
					<span className="wp-block-form-input__label-content">
						<RichText.Content value={ label } />
					</span>
				) }
			</label>
			{ /* eslint-enable jsx-a11y/label-has-associated-control */ }
		</div>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:form-input {"type":"text","name":"field-name","label":"Field Label"} -->
<div class="wp-block-form-input"><label for="field-name">Field Label</label><input type="text" id="field-name" name="field-name"/></div>
<!-- /wp:form-input -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-input/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-input/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-input/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-input/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-input/deprecated.js)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-input/variations.js)
