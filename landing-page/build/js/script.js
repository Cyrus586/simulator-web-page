// Get references to the button and dropdown menu
const button = document.getElementById( 'dropdown-button' );
const menu = document.getElementById( 'dropdown-menu' );

// Toggle the dropdown menu when the button is clicked
button.addEventListener( 'click', function () {
    menu.classList.toggle( 'hidden' );
} );

// Close the dropdown menu when clicking outside of it
document.addEventListener( 'click', function ( event ) {
    if ( !menu.contains( event.target ) && !button.contains( event.target ) ) {
        menu.classList.add( 'hidden' );
    }
} );


// Get references to the button and dropdown menu
const buttonEl = document.getElementById( 'dropdown-more' );
const menuEl = document.getElementById( 'dropdown-more-menu' );

// Toggle the dropdown menu when the button is clicked
buttonEl.addEventListener( 'click', function () {
    menuEl.classList.toggle( 'hidden' );
} );

// Close the dropdown menu when clicking outside of it
document.addEventListener( 'click', function ( event ) {
    if ( !menuEl.contains( event.target ) && !buttonEl.contains( event.target ) ) {
        menuEl.classList.add( 'hidden' );
    }
} );

// Script for navigation bar
const bar = document.getElementById( 'ham-menu' );
const nav = document.getElementById( 'nav-menu' );
const close = document.getElementById( 'close-menu' );




if ( bar ) {
    bar.addEventListener( 'click', () => { 
        nav.classList.add( 'active' ); 
    } );
}

if ( close ) {
    close.addEventListener( 'click', () => {
        nav.classList.remove( 'active' );
    } );
}


