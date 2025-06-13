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
- For the '`/artikelen`' page there has been made a like button. We're not certain if this is being used for the site later but the backend is ready for stuff like a share button or something else. This documentation has been written in issue [issue #377](https://github.com/orgs/fdnd-agency/projects/7/views/13?filterQuery=-label%3ABacklog+-repo%3ARobin1224%2Fvisual-thinking+like&pane=issue&itemId=109618841&issue=fdnd-agency%7Cvisual-thinking%7C377). It's only available in the branch that's linked to it: [branch feature-like-button-#377](https://github.com/fdnd-agency/visual-thinking/tree/feature-like-button-%23377)
	- There was no necessity in making a like button. Be we were thinking about turning this into a share button. Where the amount of clicks are being tracked and making it easy for people to share their experience.  
# ​What are the biggest challenges?
### Bugs:
- The `/kennisclips` page are multiple video's displayed. But there are some minor bugs where the video's won't load in. This page needs to be reimagined and rebuild. We already had some idea's for this. These are all documented at: [Issue #339](https://github.com/fdnd-agency/visual-thinking/issues/339)
	- We've already looked at a new design, but the rebuilding of the page still has to be done. Our plan is to show the results on separate pages and make the main page a list overview of all the video's. By using this method the page will not crash and more structured for the user.  
- The '/minicursussen' has te be rebuild and redesigned. The interaction in this page can be improves for the user. We were thinking of giving it more of a feeling that quizes give you like kahoot and more. at Issue #398, there's more of a explanation of what has to get done.
- There are multiple pages that show a list of results to the user. These lists all have a different styling. We we're thinking of making a global styling for this, which will create more consistency on the site. We've made a issue 
	- In the previous handover they also said that at the `/tekenmethode` page, when no results can be shown the website will crash. So make sure there's a state in this list for when no results can be shown. 
- the `/tekencanvas` pages can be improved. we have already reimagined this in Figma, but couldn't build it yet. There needs to be thought about the phone version, does it need to have a phone version. Maybe it's interesting to investigate how to apply this properly on all devices and make it properly usable.
## Redesign: 
- The current mobile header isn't really user friendly. Maybe reimagine this by implementing something like a hamburger menu instead.
# The next step
Alle bugs uit de website halen, zie bijvoorbeeld bovenstaande issues^^ (kennisclips apparte pagina's maken, navigatie bugs bij tekenmethodes voorbeelden, etc.).
