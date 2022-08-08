# Weekday Planner

### I've implemented a planner from an incomplete code. 

#### Below i have detailed the process of making this possible.

<br>

Link to live site: https://michaelw1996.github.io/Week_planner/

<br>

## Structure & changes based on width via media query [Expected behaviour]:

Header:

    Top of the Page, formed of 2 parts, a heading (my name) and naviation items that send the user down the page to the appropiate section on the page. A glow is present when hovering over as an indication that the element can be clicked

    Behaviour (mobile):

        Elements are stacked vertically
        Nav items take up full width

    Behaviour (tablet):

        Nav items now display in line, but are still under the heading
        Nav items now take up only the width required by their content, and are centre aligned

    Behaviour (desktop):

        Heading & Nav items now all in a line
        Nav items now take up only the width required by their content, and are aligned to the right

Hero Image:

    A faded background image with Heading and a profile picture displayed on top

    Behaviour (mobile):

        Elements stacked vertically
        All center aligned

    Behaviour (tablet):

        Elements now horizontal with large gap, with vertical alignment (both being half way up the background image)

    Behaviour (desktop):

        As before, but heading Now moved vertically to the bottom

About Me:

    A heading & Paragraph giving a breif bio

    Behaviour (mobile & tablet):

        Elements stacked vertically

    Behaviour (desktop):

        Heading moves to left, in alignnment with Work Heading, a black border also appears

Work:

    A heading & cards detailing services with images demostrating the particular service also linking to relevant site, a glow is present when hovering over as an indication that the element can be clicked

    Behaviour (mobile):

        Heading and cards vertically aligned
        Cards all same size, full width of page, stacked vertically, card text at bottom of each card

    Behaviour (tablet):

        Card text moved to top of card

    Behaviour (desktop):

        Heading now taking up left side
        Cards are stacked 2 per row in remaining space
        first card takes space of 2 normal cards
        Card text is now top left

Contact: 

    List of links to Github, email and LinkedIn, elements glow to signal that they can be clicked

    Behaviour (mobile & tablet):

        Links vertically aligned taking full width

    Behaviour (desktop):

        Links horizontally aligned, width determined by content, aligned to centre of page
        Black border appears above

Footer: 

    Note at bottom of page, no changes to element by width   


Screenshots below

Mobile:

![Live site](./assets/images/Mobile%20top.jpg)

<br>

![Live site](./assets/images/Mobile%20Work.jpg)

<br>

![Live site](./assets/images/Mobile%20bottom.jpg)

<br>

Tablet:

![Live site](./assets/images/Tablet%20top.jpg)

<br>

![Live site](./assets/images/Tablet%20Work.jpg)

<br>

![Live site](./assets/images/Tablet%20bottom.jpg)

<br>

Desktop:

![Live site](./assets/images/Desktop%20Top.jpg)

<br>

![Live site](./assets/images/Desktop%20work.jpg)

<br>

![Live site](./assets/images/Desktop%20bottom.jpg)

<br>


## Code notes

HTML:

    Made use of different containers through the page attemping to use specific sematic elements to limit the need to lots of ids and classes in the CSS

CSS:

    Added notes to CSS to explain elements involved and effects
    Notes added to Media Quueries to explain purpose and effects

Accesibility

    Accesility should be good on the site thanks to use of appropriate HTML containers as well as adding in alternative text for images using the "alt=" attribute on the <img> tags.


Coded by Michael Walters