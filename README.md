# Daniela Andrade website
User Centric Frontend Development Milestone Project.

A modern-responsive website for Daniela Andrade, singer, songwriter and youtube singer sensation. A website to show the world about her singing talent, to promte her songs, videos and link to purchase her music. 



## UX


### Who is the client?
The client of this project is Daniela Andrade.


### Who is the users?
The user of this website are:
- Daniela fans and all other people, all gender
- Music lovers, Youtube watchers and Spotify listeners with all different background, gender and ages.


### The client's goal
- A simple, easy to use, modern and response website for different size of screens. 
- A website to promote her music, reach more people to know her music. 
- Links to client's social media websites.
- People can watch her youtube video and listen to her music on spotify and hopefully will purchase her music via Amazon. 
- Contact form, where people can sign-up and provide email address to get in-touch for upcoming news or events. Or to send message for booking requests


### Solution
- Create single-page (easy to use and less complex), modern and responsive website with the latest framework.
- Since the artist was born in the 1992, so the main target users for this website will be the Millennials (Generation Y). So it's important to include social media links such as Instagram, Facebook, Twitter, Youtube and Spotify. 
- Also the website will contains a lot of multimedia elements (pictures, audio and video) and links to Amazon website where users can purchase her music.
- The site will also include web form where users can sign-up or contact her (there is no back-end code for the form, so the form will not working since it is out of scope of the project)
- Most of her songs have mellow, reflective and gloomy feel. So the color theme of this website will balance, combination of dark and light background with pictures that match the feel of her music.


### Wireframes
Here are the wireframes for desktop and mobile layout:
- [Desktop](https://milestone01.gallerio.us/assets/media/sketch-desktop.jpg)
- [Mobile](https://milestone01.gallerio.us/assets/media/sketch-mobile.jpg)




## Features
This is single-page website. And each section will have different features and layouts. To add dynamic of the site, the background of each sections will alternate dark and light background. Also the paragraph will alternate left-aligned and right-aligned (except for mobile, see below [Mobile vs Desktop](#Mobile-vs-Desktop-Layout) layout)


### HOME section
- The home section will have a video background. To reduce the data-usage for mobile users, static background will be used instead. 
- The 'Daniela Andrade' text and profile image will be on the left side (about 1/3 of the page width). 
- There is catchy 'typewriter-animation' effect just to spice-up the site a little bit.  
- There are links to the client's social media websites. 
- Since this home secton will cover 100% of the viewport height, there is small arrow pointing down to indicate there's more content below. Clicking the down-arrow will bring to the About section.


### ABOUT section
- The about section will have darker background and the content will be right-aligned. 
- The background image will be on the left side. 
- There is a light to dark gradient overlay on top of the background image so the white text will be easier to read on darker overlay background. 


### MUSIC section
- This music section has lighter theme background. The text are left-aligned.
- Use Bootstrap's card and media components. The card components are used to display the album artwork. Clicking the cards will bring users to the amazon website to buy or listen the album or singles. 
- Also there are embedded songs clips from the client's spotify channel which allow users to listen and also visit the client's spotify channel. 
- There is parallax background for this music section.


### VIDEO section.
- This video section has darker background and light text and the text are right-aligned. 
- Use Bootstrap's carousel component. The carousel item contains youtube video (use the youtube iframe) so users can play and watch the video directly on the website. Clicking the video title (on the top left corner) will bring users to client's youtube channel. 
- There is parallax background for this video section.


### CONTACT section
- The contact section has lighter background with dark text and the text are left-aligned. 
- Use Bootstrap's form classes. The layout of the form will be on the left side and the background (with gradient overlay) will be on the right side. 
- There is custom form validation with the javascript. The sample cusom form validation code are provided in the bootstrap website:
`https://getbootstrap.com/docs/4.3/components/forms/?#validation`


### FOOTER section
- The same social media links as in the home section are also available in the footer section
- There is disclaimer for the website and use Bootstrap's modal component.

### Mobile vs Desktop Layout
There are few differences layout between mobile and desktop, described as follow:

|                |Mobile                          |Desktop                     |
|----------------|-------------------------------|-----------------------------|
|Navigation bar | Navigation-bar menu will collapse to 'hamburger menu' icon|Navigation-bar with menu items on the right side|
|HOME section|Background is static image (to reduce data-usage for mobile users) and the text will be center-aligned | Background is video background and the text will be left-aligned |
|   | Profile icon will be a bit smaller | Profile icon will a bit bigger |
|ABOUT section | The background image will be about 10% visible. | Background image will be 100% visible on the left side and content will be on the right side|
|   | Text header and paragraph will be left-aligned | Text header and paragraph will be right-aligned |
|   | Content is less (only 2 paragraph) | Content is more; 3 paragraph (Tablet) and 4 paragraph (Desktop)
| CONTACT section | The background image will be about 10% visible | Background image will be 100% visible on the right side and the form will be on the left side. 



## Technologies Used

In order to create modern and responsive website, these are technologies will be used:
- HTML
- CSS
- [Google Fonts](https://fonts.google.com/)
    - to style the website fonts.
- [Bootstrap 4](https://getbootstrap.com/)
    - to simplify responsive layout for various screen sizes
- [JQuery](https://jquery.com)
    - to add Bootstrap form validation and scroll-spy functionality
- [Fontawesome](https://fontawesome.com/):
    - for all the icons
- [gauger.io](https://gauger.io/fonticon/):
    - for converting fontawesome icons to .ico file (used as fave-icon)
- [TypedJs](https://mattboldt.com/demos/typed-js/)
    - to display typewriter effect in the page header (home section)
- [YouTube](https://www.youtube.com)
    - use youtube iFrame to embed video in the video section
- [Spotify](https://www.spotify.com)
    - use spotify iFrame to embed audio in the music section



## Testing
The website had been tested to multiple devices and multiple browsers:
- iOS smartphones and tablet (Safari Browser)
- Android smartphones and table (Firefox, Chrome and Opera browsers)
- Desktop (Firefox, Chrome and Opera browsers with mobile and deskop layout)

Also run the audit within Chrome DevTools to checkPerformance, Accessibility, Best Practices and SEO of the  website.


### Navigation tests
- Click the Brand (mic icon & Artist's Name on the top left) and the 'Home' button in the main navigation bar will scroll the page up to the beginning.
- Click 'About' button will scroll the page to the About page
- Click 'Music' button will scroll the page to the Music page
- Click 'Video' button will scroll the page to the Video carousel page
- Click 'Contact' button will scroll the page to the Contact Form page


#### Music Page tests
- Under Album, Singles and EPs section, click the album artworks will open Amazon website for that particular album/single in new tab
- Under Cover Songs section, click the play button should play the embedded audio clips from Spotify.


#### Video Page tests
- Click the left & right arrows in the carousel will show previous and next video.
- Click the play button in the center of the image will play the video
- Click the indicators will go slide the carousel to the correct carousel item (1st indicator will slide to 1st item, 2nd indicator to 2nd item and so on).


### Contact Page tests
The form is not functioning since there is no back-end script to handle the request. It is out of the scope of this project. But the basic form validation (with Javascript) should work as follows: 
- Submitting the empty form will show error messages in red about the required fields
- Submitting the form with an invalid or empty name or email address or message will show a relevant error messages in red.
- Submitting the form with all valid inputs will do nothing. It will show the valid messageg in green and the page might just reload. 



## Deployment
This is a static website. No server configuration required on your hosting server.
- To deploy this project, go to my github page: https://github.com/manuhal/milestone-01
- Click the 'Clone or Download' button. And you copy the link and clone it to your folder on your desktop (with git-clone), for example:

    `git clone git@github.com:<USERNAME>/<REPOSITORY-NAME>`

- Or you can download the zip file and unzip it to your desktop
- User FTP program/app (eg: [FileZilla](https://filezilla-project.org/)) and upload the folder to your web hosting of your choice. 
- If you want to preview this website locally on your machine, simply open the index.html file with your web browser.



## Credits


### Content
- The text for section About was partially copied from https://heightline.com/daniela-andrade-age-wiki-ethnicity/


### Media
The imagges used in this site were obtained from:
- https://www.pexels.com/
- https://www.discogs.com/artist/4436499-Daniela-Andrade
- https://www.youtube.com/channel/UC2vPHIqjFdpPVMa2PGwJuYg
- https://www.amazon.com/Daniela-Andrade/e/B01DE1K6O6


### Acknowledgements
- Special thanks to my mentor [Simen Daehlin](https://github.com/Eventyret) for his tips, ideas and other helpful informations when making this site.
- I received inspiration for this project from these following sites:
    - https://themes.getbootstrap.com/
    - https://www.adobe.com/products/xd.html
    - http://cnncreativemarketing.com/project/chasinglife/





