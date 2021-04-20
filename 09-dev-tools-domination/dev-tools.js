const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

    // In dev tools, select attribute, break on attribute modifications

    // Regular
    console.log('Hello');

    // Interpolated
    console.log('Hello I am a %s string!', 'interpolated');

    // Styled
    console.log('%c I am some great text', 'font-size: 20px; background: red;');

    // warning!
    console.warn('Oh dear...');

    // Error :|
    console.error('Really, oh dear...');

    // Info
    console.info('Factoid!');

    // Testing
    console.assert(1 === 2, 'That is wrong!') // Only fires if wrong...

    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong!');
    
    // clearing
    //console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/richard-sistern')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data'); // same name as before
            console.log(data);
        });

    // table
    console.table(dogs);
