These are all the changes that are documented from **04/04/25 to 16/06/25**

# Table of contents

-  [The Current Status of the Project](#the-current-status-of-the-project)
-  [What Did We Change Exactly?](#what-did-we-change-exactly)
   - [Refactor Overview](#refactor-overview)
-  [Biggest Recent Changes](#biggest-recent-changes)
   - [Font Optimization](#font-optimization)
   - [Filter on `/tekenmethodes`](#filter-on-tekenmethodes)
   - [Like Button on `/artikelen`](#like-button-on-artikelen)
-  [What Are the Biggest Challenges?](#what-are-the-biggest-challenges)
   - [Bugs](#bugs)
   - [Redesign Ideas](#redesign)

# The current status of the project
The site is works properly like before. The site is also live at [visualthinking.school](https://visualthinking.school).

What did we change exactly?
- We had refactored the base and implemented components and improved code. We've made a list with all the refactor changes we applied to this project. You can find this full documentation in [pull-request #353](https://github.com/fdnd-agency/visual-thinking/pull/353)
## ​Biggest recent changes
- We've changed the fonts on the site. The previous ones weren't performance friendly. The fonts are changed from a import, to a `font-face`. In [pull-request #322](https://github.com/fdnd-agency/visual-thinking/pull/429) are all changes documented.
- At page '`/tekenmethodes`' There is a new filter added, where the results change based on `client-side-rendering`. Which means that the page doesn't need to reload to fetch these results. The design of the filter is also redesigned. In [pull-request #365](https://github.com/fdnd-agency/visual-thinking/pull/405) are all the changes documented.
- For the '`/artikelen`' page there has been made a like button. We're not certain if this is being used for the site later but the backend is ready for stuff like a share button or something else. This documentation has been written in issue [issue #377](https://github.com/orgs/fdnd-agency/projects/7/views/13?filterQuery=-label%3ABacklog+-repo%3ARobin1224%2Fvisual-thinking+like&pane=issue&itemId=109618841&issue=fdnd-agency%7Cvisual-thinking%7C377). It's only available in the branch that's linked to it: [branch feature-like-button-#377](https://github.com/fdnd-agency/visual-thinking/tree/feature-like-button-%23377)
	- There was no necessity in making a like button. Be we were thinking about turning this into a share button. Where the amount of clicks are being tracked and making it easy for people to share their experience.  
# ​What are the biggest challenges?
### Bugs:
- The `/kennisclips` page are multiple video's displayed. But there are some minor bugs where the video's won't load in. This page needs to be reimagined and rebuild. We already had some idea's for this. These are all documented at: [Issue #339](https://github.com/fdnd-agency/visual-thinking/issues/339)
	- We've already looked at a new design, but the rebuilding of the page still has to be done. Our plan is to show the results on separate pages and make the main page a list overview of all the video's. By using this method the page will not crash and more structured for the user.  
- The '/minicursussen' has to be rebuild and redesigned. The interaction in this page can be improves for the user. We were thinking of giving it more of a feeling that quizes give you like kahoot and more. at [Issue #398](https://github.com/fdnd-agency/visual-thinking/issues/398), there's more of a explanation of what has to get done.
- There are multiple pages that show a list of results to the user. These lists all have a different styling. We we're thinking of making a global styling for this, which will create more consistency on the site. We've made a issue 
	- In the previous handover they also said that at the `/tekenmethode` page, when no results can be shown the website will crash. So make sure there's a state in this list for when no results can be shown. 
- the `/tekencanvas` pages can be improved. we have already reimagined this in Figma, but couldn't build it yet. There needs to be thought about the phone version, does it need to have a phone version. Maybe it's interesting to investigate how to apply this properly on all devices and make it properly usable.
## Redesign: 
Multiple students have worked on this project. We've made a [environment where all the figma files](https://icthva-my.sharepoint.com/:f:/g/personal/c_j_muhren_hva_nl/EqoM_PB4gnNCsxmZxalMaEoBmoCRm0dWhrdCbsPu01QRBw?e=TP4Ygn) can me found. 
We had worked in this [Figma](https://www.figma.com/design/IA8kp0MG1STYNqoFDIbuVj/Visual-Thinking---Page-Ideas?node-id=649-499&t=wY3WyjIDhP0Ge63j-1) sheet. We also have a [Design Rationale](https://icthva-my.sharepoint.com/:b:/g/personal/sander_wacanno_hva_nl/Ef2rkvCIGKpBjr-FCgYBK8UBjDYKmP2wTOd4Hy9396t30Q?e=BOZxEX) that goes further into the redesign, as well as a [Style Guide](https://icthva-my.sharepoint.com/:b:/g/personal/sander_wacanno_hva_nl/EcKTUV98Z5lNtFrPVNYlxvQBCtV5ecOxv8jxyptQBsu8tw?e=0zKNa3) for the made redesign. 
- The Design Rationale contains a lot of things we couldn't implement, but had at least designed and imagined.
- The current mobile header isn't really user friendly. Maybe reimagine this by implementing something like a hamburger menu instead.

