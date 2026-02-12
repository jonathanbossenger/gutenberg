# Form

**Name:** `core/form`  
**Category:** common  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> A form.

**Keywords:** `container`, `wrapper`, `row`, `section`

## Block Relationships

**Allowed inner blocks:**
- `core/paragraph`
- `core/heading`
- `core/form-input`
- `core/form-submit-button`
- `core/form-submission-notification`
- `core/group`
- `core/columns`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `submissionMethod` | `string` | `"email"` | — |
| `method` | `string` | `"post"` | — |
| `action` | `string` | — | — |
| `email` | `string` | — | — |

## Supports

- **anchor**: `true`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true,"link":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - _FontFamily_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const { submissionMethod } = attributes;

	return (
		<form
			{ ...blockProps }
			encType={ submissionMethod === 'email' ? 'text/plain' : null }
		>
			<InnerBlocks.Content />
		</form>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:form {"action":"/submit"} -->
<form class="wp-block-form"><!-- wp:form-input {"type":"text","name":"email","label":"Email"} /-->
<!-- wp:form-submit-button /--></form>
<!-- /wp:form -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form/deprecated.js)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form/variations.js)
