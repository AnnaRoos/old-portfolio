const targets = document.querySelectorAll('.show-on-scroll');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  }


let observer = new IntersectionObserver((entries) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('animation-visible');
            }

        });
}, options);

targets.forEach( (target) => {
    observer.observe(target);
});




