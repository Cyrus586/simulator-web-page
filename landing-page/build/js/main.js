
const textElement = document.querySelector( '.animated-text' );
const randomTexts = [
    "From Conecpt to Schematic, Design Swifty",
    "Design Filters, Adapters, and More",
    "Toubleshoot Circuits with Ease",
    "Dive Deep into Arduino & IoT",
    "Empower Your Electronics Journey",
    "Source & compare Components as You Design",
    "Connect with Prototypers & Manufactures",
    "Bring Your Electronics Vision to life"
];

let currentIndex = 0;

function writeRandomText() {
    if ( currentIndex < randomTexts.length ) {
        const currentText = randomTexts[ currentIndex ];
        let currentTextIndex = 0;

        function addNextCharacter() {
            if ( currentTextIndex < currentText.length ) {
                textElement.textContent += currentText.charAt( currentTextIndex );
                currentTextIndex++;
                setTimeout( addNextCharacter, 100 ); 
            } else {
                currentIndex++;
                setTimeout( eraseText, 50 ); 
            }
        }

        addNextCharacter();
    } else {
        currentIndex = 0;
        setTimeout( writeRandomText, 1500 ); 
    }
}

function eraseText() {
    if ( textElement.textContent.length > 0 ) {
        textElement.textContent = textElement.textContent.slice( 0, -1 );
        setTimeout( eraseText, 50 ); 
    } else {
        setTimeout( writeRandomText, 1500 ); 
    }
}

writeRandomText();






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
