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

function welcome() {
    let a = 'Please enter your name';
    let b = 'Type your name here';

    // A prompt box is used to prompt users to inpur a value before entering a page.
    user_name = window.prompt(a, b);

    message = '<h1>Hello, welcome to my webpage, ' + user_name + '!</h1>';

    return message
}

