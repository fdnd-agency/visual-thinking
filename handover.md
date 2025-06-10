> click here to see previous [handover]

These are all the changes that are documented from **04/04/25 to 16/06/25**

# Table of contents

# The current status of the project
The site is works properly like before. The site is also live at [visualthinking.school](https://visualthinking.school).

What did we change exacly?
- We had refactored the base and implenmented components and improved code. We've made a list with all the refactor changes we applied to this project. You can find this full documentation in [pull-request #353](https://github.com/fdnd-agency/visual-thinking/pull/353)
## ​Biggest recent changes
- We've changed the fonts on the site. The previous ones weren't performance friendly. The fonts are changed from a import, to a `font-face`. In [pull-request #322](https://github.com/fdnd-agency/visual-thinking/pull/429) are all changes documented.
- At page '`/tekenmethodes`' There is a new filter added, where the results change based on `client-side-rendering`. Which means that the page doesn't need to reload to fetch these results. The design of the filter is also redesigned. In [pull-request #365](https://github.com/fdnd-agency/visual-thinking/pull/405) are all the changes documented.
# ​What are the biggest challenges?
### Bugs:
- De kennisclips moeten aparte pagina's worden zodat elke kennisclip apart gedeeld kunnen worden (ook verhelpt dit een navigatie crash wanneer de laatste kennisclip is bereikt) | Issue [#244](https://github.com/orgs/fdnd-agency/projects/7/views/3?pane=issue&itemId=91502863&issue=fdnd-agency%7Cvisual-thinking%7C244)
- De tekenmethodes methode pagina, als er **geen** voorbeelden aanwezig zijn crashed de navigatie (als er geen voorbeelden zijn, dit niet weergeven in de MethodHeader) | Issue [#243](https://github.com/orgs/fdnd-agency/projects/7/views/3?pane=issue&itemId=91502811&issue=fdnd-agency%7Cvisual-thinking%7C243)
- De tekenmethodes methode pagina, als er **wel** voorbeelden aanwezig zijn werkt de carrousel niet bij Firefox en komen ze klein naast elkaar te staan (zet de afbeeldingen groot onderelkaar als fallback) | Issue [#295](https://github.com/orgs/fdnd-agency/projects/7/views/3?pane=issue&itemId=94425525&issue=fdnd-agency%7Cvisual-thinking%7C295)

## Redesign: 
- De minicurssusen inhouds pagina, moet een makeover krijgen (meer input voor de gebruiker, vector animaties?, meer beeld, betere layout) | Issue [#239](https://github.com/orgs/fdnd-agency/projects/7/views/3?pane=issue&itemId=91502427&issue=fdnd-agency%7Cvisual-thinking%7C239)
- Tekencanvas verbeteren, (een zero state toevoegen, meerdere features maken, meer PE maken) | Issue [#291](https://github.com/orgs/fdnd-agency/projects/7/views/3?pane=issue&itemId=94423655&issue=fdnd-agency%7Cvisual-thinking%7C291)

## New features:
- Like feature: Charley wil graag een feature implementeren dat je een de verschillende methodes in de tekenmethodes pagina kunnen worden geliked | Issue [#198](https://github.com/orgs/fdnd-agency/projects/7/views/3?pane=issue&itemId=81353410&issue=fdnd-agency%7Cvisual-thinking%7C198) [#199](https://github.com/orgs/fdnd-agency/projects/7/views/3?pane=issue&itemId=81353431&issue=fdnd-agency%7Cvisual-thinking%7C199)

# The next step
Alle bugs uit de website halen, zie bijvoorbeeld bovenstaande issues^^ (kennisclips apparte pagina's maken, navigatie bugs bij tekenmethodes voorbeelden, etc.).
