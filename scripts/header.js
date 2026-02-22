

const headerScript = () => {    
    document.addEventListener('DOMContentLoaded', () => {
        const body = document.querySelector('body');
        const mobileMenu = body.querySelector(".mobile-menu-wrapper");
        const mobMenuBtn = body.querySelector(".mobile-menu-button");
        const mobileMenuClass = "mobile-menu-button";
        const mobileMenuActiveClass = "mobile-menu-active";
        const handleClick = (e) => {
            e.stopPropagation();
            const target = e.target;
            const classes = target.classList;
            if(classes.contains(mobileMenuClass)) {
                if(classes.contains(mobileMenuActiveClass)) {
                    mobMenuBtn.classList.remove(mobileMenuActiveClass);
                    mobileMenu.classList.remove(mobileMenuActiveClass);
                } else {
                    mobMenuBtn.classList.add(mobileMenuActiveClass);
                    mobileMenu.classList.add(mobileMenuActiveClass);
                }
            }      
        }
        {/* Add a global event listener */}
        document.addEventListener("click", handleClick);
    });
}

headerScript();