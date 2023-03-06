function closeIt() {
    document.querySelector('.mobile-nav-menu').style.display = 'none';
    console.log('wire');
    document.body.style.overflow = 'scroll';
}

let union = document.querySelector('#union');
union.addEventListener('click', function() {
    document.querySelector('.mobile-nav-menu').style.display = 'block';
    document.body.style.overflow = 'hidden';
})

