function createNavItem(text, href) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    h3.appendChild(a);
    li.appendChild(h3);
    return li;
}

document.getElementById('nodeButton').addEventListener('click', function () {
    const myList = document.getElementById('myList');

    myList.appendChild(createNavItem('Assignments', '/~bdd6280/header.html'));
    myList.appendChild(createNavItem('Claim a prize on this page!', '/~bdd6280/asg3/index.html'));

    const h3Tags = myList.querySelectorAll('a');
    h3Tags.forEach(function(anchor) {
        anchor.style.color = 'green';
    });
});
