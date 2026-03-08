document.addEventListener('DOMContentLoaded', (e) => {
// 메인에서 아이템 애니메이션 효과
    const items = document.querySelectorAll('.grid-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            const target = entry.target;
            
            if (entry.isIntersecting) {
                target.classList.add('show');
            }

            else {
                target.classList.remove('show');
            }
        });
    }, {
        root : null,
        rootMargin: '0px',
        threshold: 0
    });

    items.forEach((item) => observer.observe(item));



    // 디테일 페이지 요소 애니메이션 효과

    const parts = document.querySelectorAll('.detail > main > .right > *');

 // Intersection Observer 생성
 const observer02 = new IntersectionObserver((entries) => {
     entries.forEach(entry => {

        const target = entry.target;

         if (entry.isIntersecting) {
             target.classList.add('show');
            //  observer02.unobserve(entry.target);
         } else{
             target.classList.remove('show');
         }
         // else 부분은 필요 없어. 한번 'show' 붙으면 안 뗄 거니까.
     });
 }, {
     // 옵션 설정 (화면 하단에서 얼마나 올라왔을 때 보인다고 판단할지)
     // rootMargin: '0px 0px -75px 0px' => 뷰포트 하단에서 75px 위에 트리거 라인 설정
     // threshold: 0 => 요소가 1px이라도 보이면 콜백 함수 실행
     rootMargin: '0px 0px -10px 0px',
     threshold: 0
 });

 // 아까 찾아둔 요소들을 각각 observer에게 관찰하라고 등록
 parts.forEach(item => {
     observer02.observe(item);
 });

 // requestAnimationFrame 부분은 이제 필요 없어짐!

 // mobile bottom menu
    const mMenuBtn = document.querySelector('.m-menu-btn');
    const mMenuNav = document.querySelector('.m-nav');
    const mMenuClose = document.querySelector('.m-nav-close');

    mMenuBtn.addEventListener('click', () => {
        mMenuNav.classList.toggle('active');
    });

    mMenuClose.addEventListener('click', () => {
        mMenuNav.classList.remove('active');
    });

});

    // cursor
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('.grid-item .thumb').forEach(thumb => {
        thumb.addEventListener('mouseenter', () => {
            cursor.classList.add('visible');
        });
        thumb.addEventListener('mouseleave', () => {
            cursor.classList.remove('visible');
        });
    });
    