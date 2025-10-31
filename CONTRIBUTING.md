> * [Here](https://github.com/fdnd-agency/.github/wiki/Conventions) you can find the FDND documentation of this conventions
> * Most up-to-date conventions can be [found here](https://github.com/fdnd-agency/visual-thinking/wiki/Conventions)

# Common Rules
* We write **everything** in _English_. 🏴󠁧󠁢󠁥󠁮󠁧󠁿

# Issues 
We want a good title and description for the issues so everything is clear for us and other people, therefore are the following rules:

* Use words that describe the issue, nothing like bug or issue. we want to understand what the issues is and avoid duplicates. 
* **Use Uppercase For The Beginning Of Every Word**, that looks pretty clean
* Use for every issue a label
* We want to work with sub-issues where needed. This for things like refactoring or building an enhancement. to keep the structure.

# Workflow 
* We work with releases, so we can see our progress and keep older code

![Image](https://github.com/user-attachments/assets/9ca1817a-2181-4c1e-9c43-a0ec0f4d3d2d)

## Branch Naming 
> * For _branch naming_, we have looked into this [link](https://dev.to/jps27cse/github-branching-name-best-practices-49ei) the learn more about this.

### `Main` 
is where the definitive code is placed

### `Development`
* We use the following branches, we have divided into subjects:
  * Bugfix, for fixing an existing feature
  * Refactor, for simplifying code and making it more structured
  * Hotfixes, for fixing after a release
  * Feature, for adding a new feature
* Include issue number, so its clear what we are working on.
  * We can also look up who is working on that issue by assigning those
* Optional: add the version of the branch. for making more options. add `v1`. If you have more versions otherwise you can leave this part out

The branch can look like this:  
`feature-header-menu-#12`

1. Add subject  
2. Add title  
3. Add issue number your working on  
4. An optionally add the version of the branch, if you want to create more options 

So we have an `main` branch, where the definitive code is. and the `development` is where the new features are made. 


# Code 
* use 1 tab indentation

## refactoring rules
* remove comments when moved to the `main`

## HTML
* use [semantic `html`](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

## CSS
> * some of these issues were documented at [CONTRIBUTIONS.MD](https://github.com/fdnd-agency/visual-thinking/blob/main/CONTRIBUTING.md#css-conventions)
> * [here](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/CSS) is a guideline for css conventions
* use `hsl()` color code
* **never** use `!important`
* Work [`mobile-first`](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/CSS#mobile-first_media_queries)

### Classnames
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


### units 
which units do we use for properties?

| properties | unit |
|----------|-----------|
| color | `hsl()`  |
| font    | `rem` |
| `padding`/`margin` | `rem` |
| duration, such as `transitons` and `animation` | `ms`  |


### structure
> * I found an article about [structuring](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing#create_logical_sections_in_your_stylesheet) the css

### custom properties
* give the subjects of code an heading by adding comments
  > * in this scenario, the comments can stay. Even in the `main`
* If you want to use colour, make sure you don't add the name of the colour inside the custom property
  * this make the variable more consistent and flexible
  * for the main colours, we use the following naming:
    *  `--color-primary`
    *  `--color-secondary`
    * `--color-tertiary (third)`
    * `--color-quaternary (fourth)`
    * `--color-quinary (fifth)`
    * `--color-senary (sixth)`
    * ... and so on
* **always** use lowercase naming
* structure the name like following:
  * add subject first. so things like `font`, `color`, `screen` first
  * after adding the subject add the relevant information about this property. Think about things like `size` or `family`. It would look like following:
    * `--font-family` 
    * `--border-radius`

### media queries
* we want the query **inside** the element. Don't place it separate from the elements. We want clarity and a nice overview of where the query is used. 
* we want to add custom properties inside the media queries
* we don't use a `max-width`
* we want to use these global dimensions for the media queries: 

| Size     | Width     |
|----------|-----------|
| x-small  | `320px`   |
| small    | `768px`   |
| medium   | `1024px`  |
| large    | `1440px`  |
| x-large  | `2560px`  |

## JavaScript
> Projectboard JS conventions [link](https://github.com/orgs/fdnd-agency/projects/7?pane=issue&itemId=80738977)

### Function names
- Camel Case (`clickHandler()`)
- If triggered by an event, use `Handler` suffix, i.e `submitHandler()`
- `;` after each expression
- Use object deconstructive for data:
```js
const { title, sprintNumber, startdate, content, etc. } = data
```

### Component conventions:
> Projectboard component conventions [link](https://github.com/orgs/fdnd-agency/projects/7?pane=issue&itemId=80739008)

#### Component names 
- Pascal Case (`CardButton.svelte`)
- Use simple but understandable names, especially for reusable components
  - Example: `Button.svelte`, not `SubmitButtonComponent.svelte`
- Do not use `component` in component names, for the same reason you don't put `function` in function names

## SvelteKit

* importing self-made components, other assets by calling it by the [`index.js`](https://github.com/fdnd-agency/visual-thinking/blob/main/src/lib/index.js)
* first thing is importing files