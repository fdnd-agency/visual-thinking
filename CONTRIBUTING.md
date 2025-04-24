# Contributing
## Pull request:
Zorg ervoor dat de pullrequest wordt gemaakt in de layout dat automatisch is gegenereerd bij het opstellen van een pullrequest.

## Code conventions:
Alle code conventies zijn ook te vinden in het [projectboard](https://github.com/orgs/fdnd-agency/projects/7/views/3) in de kolom 'Other'.

### HTML conventions:
> Projectboard HTML conventions [link](https://github.com/orgs/fdnd-agency/projects/7/views/3?pane=issue&itemId=80738995)
- /

<br>

### CSS conventions:
> Projectboard CSS conventions [link](https://github.com/orgs/fdnd-agency/projects/7?pane=issue&itemId=80738999)

#### Classnames
- Kebab Case (`kebab-class-button`)
- Keep styles scoped to specific components as much as possible
- Colors that are reused in several places should be in the `global.css` file
- If you use a selctor list ( , ) each selector gets a new line. Example:

```css
 one,
 two {
 /* content */
 }
```
- Use `rem` instead of `em`, `px`

<br>

### JavaScript conventions:
> Projectboard JS conventions [link](https://github.com/orgs/fdnd-agency/projects/7?pane=issue&itemId=80738977)

#### Function names
- Camel Case (`clickHandler()`)
- If triggered by an event, use `Handler` suffix, i.e `submitHandler()`
- `;` after each expression
- Use object deconstructive for data:
```js
const { title, sprintNumber, startdate, content, etc. } = data
```

<br>

### Component conventions:
> Projectboard component conventions [link](https://github.com/orgs/fdnd-agency/projects/7?pane=issue&itemId=80739008)

#### Component names 
- Pascal Case (`CardButton.svelte`)
- Use simple but understandable names, especially for reusable components
  - Example: `Button.svelte`, not `SubmitButtonComponent.svelte`
- Do not use `component` in component names, for the same reason you don't put `function` in function names

<br>
