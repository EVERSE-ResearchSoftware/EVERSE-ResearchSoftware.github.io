# EVERSE Website

## Overview

This is the source for the EVERSE website. The website is built with the [Hugo](https://gohugo.io) static website engine and the [Blowfish theme](https://blowfish.page).

### Directory Layout

The directory layout follows the usual Hugo scheme. The most important directories are:

- `content` holds the text content for the site, mostly in [markdown](https://en.wikipedia.org/wiki/Markdown), which is a very simple markup language
  - The subdirectory structure in the `content` directory maps to ´website URLs
- `assets` has content that will be processed by Hugo when building the website - particular images and icons; it also contains any customisation to the CSS styles
- `static` has content that will be available, but is not processed, e.g., PDFs
- `config` contains the files that configure Hugo and Blowfish, in particular the `menus.yaml` file defines the top bar and footer menus

These should be the only directories that you care about if you want to add or update content on the site. If you wish to do some deeper customisation of the site then the `layouts` directory has page templates and Hugo shortcode files.

### Modifying and Adding Content

#### Setup

You will need to [install Hugo](https://gohugo.io/installation/) and checkout the code for the website from [GitHub](https://github.com/EVERSE-ResearchSoftware/EVERSE-ResearchSoftware.github.io) (actually, it's recommended that you *fork* the project and work on your own copy).

```sh
git clone --recursive https://github.com/MY-GITHUB-USERNAME/EVERSE-ResearchSoftware.github.io 
```

(The `--recursive` is needed to get the Blowfish theme submodule.)

Assuming you intent to contribute your changes back to the main EVERSE website, it's best to now create a branch with a meaningful name, from which you will later make a pull request.

#### Edit

If you want to modify the content of a page, simply open the relevant markdown file and update it. Usual markdown syntax is, of course, supported. You will see use of some special Hugo *shortcodes* that can do some things that markdown cannot (e.g., the `figure` shortcode for more image handling options, the `flex-columns` shortcode for multi-column layouts; Blowish also has [bunch of nice shortcodes](https://blowfish.page/docs/shortcodes/) to make badges, buttons, alerts, etc.).

To add new content:

- Create a new markdown file as it would appear in the website hierarchy. E.g., `content/about/wombats.md` would create a page that would get rendered, when deployed, to `https://everse.software/about/wombats/`.
- If necessary, add a menu item for the new page in `config/menus.yaml`

#### Preview Changes

Run `hugo serve` in the base directory of your check that the changes work as you expect.

#### Pull Request

When you are happy, push the changes to your fork, then make a pull request back to the main EVERSE repository.

## Faces of EVERSE
On our webpage we also want to present the EVERSE members. As a member you can have your own page about yourself. For this, we would ask you to:

1. Create a new branch in the repository.
2. Create a new folder in `content/about/people` with your name "FirstnameLastname" with an `index.md`file. You can check the templates (i.e. [Graeme Stewart](https://github.com/EVERSE-ResearchSoftware/EVERSE-ResearchSoftware.github.io/tree/main/content/about/people/GraemeStewart) or Sanje Fenkart) on how to setup the header.
3. Your profile information should contain: your name ("First Name + Last Name"), your job title (e.g. "Data scientist", "Training Developer", etc...), your affiliation (your institute or organisation) and then 2-3 sentences about yourself and your work.
4. To show your involvement in EVERSE you should add metadata in the YAML header. See the examples linked above! For example: if you are part of Work Package 1 you can add a ```wp1``` label in the header under ```params```. Similarly labels for work package leaders can be added too (```wp1wpl```) and you set these labels to ```true```. This will automatically link you to the dedicated pages of work packages.
5. Also under ```params``` you should add your contact information:
```
params:
    media:
      email: [address]
      github: [link]
      link: [link to website]
      linkedin: [handle link]
      bluesky: [handle link]
 ```     
  You can add your desired means of contact here. A dedicated shortcode under `layouts/shortcodes/inser-media-links.html` processes the information. (Note that ```link``` connects to a webpage about you, like a personal one.) \

If you don't want to link your email directly, you can also choose to spell out your address and obscure it (`me AT my.institute`).

6. The same applies for tagging your affiliation under: 
```
params:
    institute: [name]
```

This will automatically link you to the dedicated entry of the tagged [Consortium partner](https://everse.software/about/consortium/). You can find the according label acronym [here](https://github.com/EVERSE-ResearchSoftware/EVERSE-ResearchSoftware.github.io/tree/main/content/about/partners). 

7. Please add a picture of yourself using the filename `feature.jpg` (potrait format/square). Your jpeg should have at least 256 px (or a minimum of 100 KB). You can find the command for the correct layout and insertion for the image in the example files.

For further information on how to add new content see the instruction on "Modifying and Adding content" above.


## Problems? Issues?

If you see something wrong with the site, or you want to suggest a change, please open a [GitHub Issue](https://github.com/EVERSE-ResearchSoftware/EVERSE-ResearchSoftware.github.io/issues/new).

## Help

Graeme, Nikos and Aspa can try and help you if you get stuck.
