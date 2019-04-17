// Make an instance of two and place it on the page.
var elem = document.querySelector('.js-particle-animation');
var params = {
    width: 400,
    height: 400
};
var two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
var circle  = two.makeCircle(10,10,10);
var circle2 = two.makeCircle(10,50,10);
var circle3 = two.makeCircle(10,90,10);

// The object returned has many stylable properties:
circle.fill = '#cae7f7';
circle.linewidth = 2;

var group = two.makeGroup(circle, circle2, circle3);



// Don't forget to tell two to render everything
// to the screen
two.update();