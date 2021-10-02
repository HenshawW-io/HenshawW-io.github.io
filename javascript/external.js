// document.write('Where is my JS code?');

// window.alert(5 + 6);

// window.alert('5 + 6');

// document.write('<h1>A heading</h1>');
// document.write('<p>A sentence.</p>');

// const x = 'web';
// const y = 'mapping';
// const out = x + y;
// document.write(out);

// // A prompt box is used to prompt users to input a value before entering a page.
// user_name = window.prompt('Please enter your name', 'Type your name here');
// document.write(user_name);

// // there are many ways to use the prompt feature
// sign = window.prompt(); // open the blank prompt window
// sign = prompt(); // open the blank prompt window
// sign = window.prompt('Are you feeling lucky?'); // open the window with text "Are you feeling lucky?"
// sign = window.prompt('Are you feeling lucky?', 'Sure'); // open the window with text "Are you feeling lucky?" and default value "Sure"

// x = 22;
// const y = 33;
// document.writeln(x + y);
// document.writeln('<br>');
// document.writeln(x += 33);

// document.writeln("<button onclick='condition()'>Conditional Test</button>");

// function condition() {
//     x = confirm('Are you sure you want to proceed?');
//     if (x) {
//         document.writeln('You chose Okay!');
//     }
//     else {
//         document.writeln('You chose Cancel!');
//     }
// }

// arr = ['Joe', 'April', 'Mark', 'Sara'];
// uname = window.prompt("What's your name?");

// document.write('<h1>Hello. Welcome to my webpage, ' + uname + '!</h1>');

var webmaps = 
[
    ['Zillow',
    'https://www.zillow.com/homes/for_rent/',
    'The Zillow Rental Listings map, developed by Zillow, Inc., \
    provides users a robust spatial view of houses and apartments \
    for rent in an area of their choosing. The application provides \
    selection by lasso method for spatial filtering. As the main \
    purpose is finding the ideal house/apartment for the user, \
    there are many attribute filtering methods as well. \
    Users can filter by number of bedrooms and bathrooms, \
    house type, square footage, lot size, age, number of \
    stories, basement, tours, pet policy, other amenities, \
    type of view, number of days on the site, and any keywords. \
    If I was signed into my Zillow account, I could save this \
    home to my account for later viewing. One flaw I find in this \
    web mapping application is the lack of a distance tool. \
    What if I wanted to find homes within 30 miles of a particular \
    city? After signing in, it would also be useful to export the \
    user’s list of saved homes to a CSV file for offline viewing.'
    ],
    ['Windy Weather Map',
    'https://www.windy.com/',
    'The Windy Weather Map, developed by Windy, offers advanced \
    capabilities for the visualization, tracking, and forecasting \
    of climate and weather patterns. This application is as \
    intuitive as it can be given the all the functionality it \
    offers. If I were asked to redesign the application, I probably \
    would provide an option to change the color ramps. I would also \
    modify how the layers are presented on the main screen, as I \
    found the two separate menus pointing to the same master panel \
    of layers confusing. A simple bubble that presents a scrollable \
    list of all layers would have taken up less space. However, \
    I am aware that the paid version of this application might \
    provide these features.'
    ]
];

function welcome() {
    let a = 'Please enter your name';
    let b = 'Type your name here';

    // A prompt box is used to prompt users to inpur a value before entering a page.
    user_name = window.prompt(a, b);

    message = '<h1>Hello, welcome to my webpage, ' + user_name + '!</h1>';

    return message
}

function webmap_table() {
    document.write('<table width=100%>');
    for (var row = 0; row < webmaps.length; row++) {
        document.write('<tr>');
        for (var column = 0; column < webmaps[0].length; column++) {
            document.write('<td text-align="left">' + webmaps[row][column] + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}
