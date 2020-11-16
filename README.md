# Bro=nament a site for Gaming Tournaments

![Responsive screen grab of homepage](assets/images/responsive-bronament.png)

A website built to help friends combine their competitive nature and friendships *Bro-nament*. 
The website will contain a javaScript based tournament system that can be used as a extra resourse when friends gather together.

## Ease of use

Most current tournament based sites require registration and a fee. This site will build a bracket based on the amount of players and progress them on button click.
There is no need for any registration or fees as it is all client-side based. 

### Supported Brackets

The site currently supports:
* 2 players
* 4 players
* 8 players

Onclick events will trigger the amount of brackets to generate. Players will then enter their names into the brackets.

If the individual wins their match, clicking the icon next to their name will progress them through the brackets.

It can be used on all devices.

Hosted on [GitHub Pages](https://leeton1412.github.io/cosmic-rodney/)
Repository on [GitHub.com](https://github.com/leeton1412/bronament)

## License
>This project is created for everyone and is avaliable upon request [Bro-nament](https://github.com/leeton1412/bronament). 


## UX

#### Goals

The aim of this website is to provide a quick, easy to use, and intuative system so friends can quickly build and play tournaments between each other

#### Users

The predicted users of the site will be Friendship Groups, Tournament Organisers, Gaming Websites and Small Event Organisers.

### User Stories 
1. A group of friends looking to compete against each other in a tournament environment.
2. Tournament Organisers looking to create a more simplictic approach.
3. Tournament Organisers looking for a cheaper approach for smaller events.
4. Gaming websites looking to create articles on Esports.
5. A Small event Organiser looking to find a quick solution to a Esports competitive tournament setting.
6. Fans of Esports who wish to create their own brackets and predict player movement.

## Thoughts Behind The Design

The website colors and fonts are designed to give the page a dark intense feel. Having competed in Esports, the feeling of an intense atmosphere is something I can relate to.
I believe that this sort of feeling is important to give the site a competitive feeling.

### Colors and theme of the website.

* Revolver:   ![#333238](https://via.placeholder.com/15/333238/333238)
* Manatee:   ![#94929b](https://via.placeholder.com/15/94929b/94929b)
* Black: ![#000000](https://via.placeholder.com/15/000000/000000)
* Cloudy: ![#aba599](https://via.placeholder.com/15/413f3f/413f3f)

### Font Choices 
Header font throughout the website are chosen to mimic a Retro Gaming feel:

    *font-family: 'Monoton', cursive; 

Elements such as paragraphs are a complementing font and Bootstrap recommended:

    *font-family: 'Segoe UI', 'Source Sans Pro', 'Calibri', 'Candara', 'Arial', 'sans-serif';;

### WireFrames 

Here you will find the Wireframes created for the website on [Yumpu](https://www.yumpu.com/en/document/view/63484230/cosmic-rodney-basic-wireframes)
Designed using [Balsamiq](https://balsamiq.com/)

### Features 

- Easy Navigation.
- Use of external css animation to create Flicker effect and Rotate effect [Animista](https://animista.net/)
- Hover affects on certain icons.
- Wikipedia API powered game information ensuring it stays relevant.
- Tournament bracket supporting 2, 4 and 8 players.
- Buttons to hide Wikipedia information so its not displayed on call. 
- Easy use of "button move" to provide clean client side experience
- Countdown intro page using original Street fighter 2 sounds
- Live contact form using [Emailjs](https://www.emailjs.com)
- Social Media buttons to create more contact points 
- Extra content buttons
- Responsive Mobile first design
- [Bootstrap](https://getbootstrap.com/) 
    - HTML class utilites
    - Grid system
    - Layout Change
    - Input form

### Features Still to Include 

Due to limitations with current personal working arrangements and Covid-19, the time I spent on this project did not give me the required time to implement every thing at launch. 

- Toornament API
    - I have recieved premission to use [Toornament](https://www.toornament.com/en_US/) API. This will create a much better user experience and a useable server. 
- Personal Tournament Data.
    - No current knowledge on servers. Would like to save the information for each user to create a league. 
- Bracket linking
    - Create a better design for the input forms. 

### Technologies Used:

Technologies used in the making of this page are:

- [HTML](https://www.w3schools.com/whatis/whatis_html.asp)
    - Used to structure the site. 
- [CSS](https://www.w3schools.com/whatis/whatis_css.asp)
    - Used to style the website. 
- [Javascript](https://www.w3schools.com/js/DEFAULT.asp)
    - Used for Count Down on index.html, Game information on landing.html, Tournament movement and bracket building in tournament.html, and live contact form on contact.html. 
- [Jquery](https://jquery.com/download/)
    - Used to create brackets for Tournament.html
- [Google Chrome](https://www.google.com/chrome/)
    - Used to inspect the website via dev tools.
- [Google](http://www.google.com)
    - Used to conduct searches.
- [Animista](https://animista.net/)
    - Used to display effects on Landing page and Tournament page..
- [Codepen](https://codepen.io/ericagulto/full/KgdyqJ/)
    - Used to create a simple header and footer.
- [Emailjs](https://www.emailjs.com/docs/)
    - Used to create a live contact form.
- [Bootstrap 4](https://getbootstrap.com/)
    - Used for helping create a mobile responsive website. 
- [CDN.js](https://cdnjs.com/)
    - Used to import different plugins.
- [Gitpod](https://www.gitpod.io/)
    - Used to build the website.
- [GitHub](https://github.com/)
    - Used for Repository.
- [Gitpages](https://pages.github.com/)
    - Used to Host the website. 
- [Am I Responsive?](http://ami.responsivedesign.is/)
    - Used to check the responsive design of the website.
- [Befunky](https://www.befunky.com/)
    - Used to resize all images on the website.




### Technologies used for testing.

# [W3c Markup Validation](https://validator.w3.org/)

Used to look for any potential problems.
- Problems.
    - Gallery did not contain any alt tags. This has been changed. 
    - Event page contained h3 tag after a label tag and is not allowed. This has been changed. 

# [Am I Responsive?](http://ami.responsivedesign.is/)

This website was used to check the layout on various screen sizes. 
- Problems
    - Gallery footer doesnt stick to page on screen size 768 x 1024.
        - This problem has been fixed.

### Deployment

The website is hosted on [GitHub Pages](https://leeton1412.github.io/bronament/)

The process:
- Host a git repository on Github.
- In the settings for the repository scroll down till Github Pages section.
- Select which Branch you would like in source section. (Normally Master Branch)
- Change the address of your website if required 
- Save changes. 
- The page is now ready to be viewed.
- The generic page set up will be 'yourusername'.github.io/'thereponame'

### Credits

## Content 

- All images from this website are obtained from [Cosmic Rodney Facebook page](https://en-gb.facebook.com/cosmicrodney/)

- Band Bio information is personally composed by the band members. 

- Gallery Ekko lightbox is botained from [Ekko lightbox](https://ashleydw.github.io/lightbox/)

- Nav bar basic structure obtained from [CodePen](https://codepen.io/ericagulto/full/KgdyqJ/)

- Hover affects obtained from [Hover.css](https://ianlunn.github.io/Hover/)

- Event Calendar obtained from [Bootsnipp](https://bootsnipp.com/snippets/VgzeR)

## Acknowledgments 

- Thanks to Seun Owonikoko @seun_mentor
- Stuart Crang For encouraging me to join the course
- My current Linkedin Group for help and motivation. 
- Cosmic Rodney for allowing me to build a site for them. 
- Code institute for providing me with the tools to chase my dreams






    



