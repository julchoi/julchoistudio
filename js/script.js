document.addEventListener('DOMContentLoaded', (e) => {
    
    //Gallery View (Images)
    var msnry = new Masonry('.grid', {
         itemSelector: '.grid-item', 
         columnWidth: '.grid-sizer',
         percentPosition: true,
         gutter : 20,
         fitWidth : false
        });

    //Work List (Menu)
    class workList extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `<section class="detail">
                    <!-- work list -->
                    <div class="list-group" id="listGroup">

                        <ul class="featured">
                            <li>
                                <p class="list-title">Featured Work</p>
                            </li>
                            <li data-id="1">
                                <a href="morii.html">
                                    <span>2024</span>
                                    <span>MORII Magazine</span>
                                    <span>Editorial</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="2">
                                <a href="ahole.html">
                                    <span>2024</span>
                                    <span>AHOLE</span>
                                    <span>Typeface</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="3">
                                <a href="commdsgn.html">
                                    <span>2024</span>
                                    <span>COMM DSGN</span>
                                    <span>Branding</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="4">
                                <a href="heynike.html">
                                    <span>2024</span>
                                    <span>Hey, Nike!</span>
                                    <span>UX/UI</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <ul class="all">
                            <li>
                                <p class="list-title">All Work</p>
                            </li>
                            <li data-id="5">
                                <a href="airplan.html">
                                    <span>2024</span>
                                    <span>Airplan</span>
                                    <span>UX/UI</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="6">
                                <a href="crafty.html">
                                    <span>2024</span>
                                    <span>Crafty Critter</span>
                                    <span>UX/UI</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="7">
                                <a href="p2p.html">
                                    <span>2023</span>
                                    <span>Pedal to Petal</span>
                                    <span>Branding</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="8">
                                <a href="yearbook.html">
                                    <span>2023</span>
                                    <span>Yearbook Design</span>
                                    <span>Editorial</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="9">
                                <a href="notdefined">
                                    <span>2022</span>
                                    <span>SOLE Magazine</span>
                                    <span>Editorial</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li data-id="10">
                                <a href="notdefined">
                                    <span>2022</span>
                                    <span>COMM DSGN</span>
                                    <span>Branding</span>
                                    <span class="icon">
                                        <img src="assets/images/icons/Arrow right.svg" alt="">
                                    </span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </section>`
        }
    }

    customElements.define('work-list', workList);

       // 해당 페이지에서 리스트 요소 활성화
       const workDetail = document.querySelectorAll(".detail .list-group > ul > li > a");
       const currentPath = window.location.pathname; // 현재 페이지 경로
   
       workDetail.forEach((link) => {
           const linkPath = new URL(link.href, window.location.origin).pathname;
           if (linkPath === currentPath) {
               link.parentNode.classList.add("active");
           }
       });


        // image hover시 list도 hover effect
        document.querySelectorAll(".grid .grid-item").forEach((img) => {
        img.addEventListener("mouseenter", function () {
            const id = this.dataset.id; // 이미지의 data-id 값 가져오기
            document.querySelector(`.list-group li[data-id="${id}"]`)?.classList.add("hover");
        });
      
        img.addEventListener("mouseleave", function () {
          const id = this.dataset.id;
          
          // hover class 제거
          document.querySelector(`.list-group li[data-id="${id}"]`)?.classList.remove("hover");
        });
    });

    document.querySelectorAll("work-list .list-group li").forEach((list) => {
        list.addEventListener("mouseenter", function () {
            const id = this.dataset.id; // 이미지의 data-id 값 가져오기
            document.querySelector(`.grid .grid-item[data-id="${id}"] a`)?.classList.add("active");
        });
      
        list.addEventListener("mouseleave", function () {
          const id = this.dataset.id;
          
          // hover class 제거
          document.querySelector(`.grid .grid-item[data-id="${id}"] a`)?.classList.remove("active");
        });
    });


    //about페이지에서 스크롤시 하단 요소 애니메이션 작업
    let lastScrollTop = 0;
    let ticking = false;
    const targetElement = document.querySelector(".hide-bottom");
    
    function onScroll() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll - lastScrollTop > 3) { 
            targetElement.style.transform = "translateY(100%)";
            targetElement.style.opacity = "0";
        } else if (lastScrollTop - currentScroll > 3) {
            targetElement.style.transform = "translateY(0)";
            targetElement.style.opacity = "1";
        }

        lastScrollTop = currentScroll; // 스크롤 값 갱신
        ticking = false;
    }

    window.addEventListener("scroll", function () {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    });

});