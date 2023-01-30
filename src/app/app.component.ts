import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import SwiperCore, { Navigation, Pagination, SwiperOptions, Mousewheel } from 'swiper';
import { SwiperEvents } from 'swiper/types';

declare var $: any;

SwiperCore.use([Navigation, Pagination, Mousewheel]);




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})

export class AppComponent implements OnInit {

  logged: boolean = false;

  public size767 = false;

  @ViewChild('#swiperNew') swiper: any;
  testSwiper: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleBg()
  }

  imageObject: Array<any> = [];
  flip0: string = 'inactive';
  flip1: string = 'inactive';
  flip2: string = 'inactive';
  flip3: string = 'inactive';
  flip4: string = 'inactive';
  flip5: string = 'inactive';
  config: SwiperOptions = {
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 1,
    spaceBetween: 150,
    longSwipes: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    }
  };

  password: any = "";

  ngOnInit(): void {

    // Init BG
    this.handleBg();

    // Init bookblock
    $('#bb-bookblock').bookblock({
      startPage: 3,
      shadows: false,
    });

    // Fix bootstrap outside navclick
    $(window).on('click', function (event) {
      // element over which click was made
      var clickOver = $(event.target)
      if ($('.navbar .navbar-toggler').attr('aria-expanded') == 'true' && clickOver.closest('.navbar').length === 0) {
        // Click on navbar toggler button
        $('button[aria-expanded="true"]').click();
      }
    });
  }

  handleNavigation(page) {
    switch (page) {
      case "#welcome":
        if (window.innerWidth <= 767) {
          this.testSwiper.slideTo(0, 250);
        } else {
          $("#bb-bookblock").bookblock("jump", 2)
        }
        break;
      case "#party":
        if (window.innerWidth <= 767) {
          this.testSwiper.slideTo(1, 250);
        } else {
          $("#bb-bookblock").bookblock("jump", 3)
        }
        break;
      case "#location":
        if (window.innerWidth <= 767) {
          this.testSwiper.slideTo(2, 250);
        } else {
          $("#bb-bookblock").bookblock("jump", 4)
        }
        break;
      case "#dresscode":
        if (window.innerWidth <= 767) {
          this.testSwiper.slideTo(3, 250);
        } else {
          $("#bb-bookblock").bookblock("jump", 5)
        }
        break;
      case "#info":
        if (window.innerWidth <= 767) {
          this.testSwiper.slideTo(4, 250);

        } else {
          $("#bb-bookblock").bookblock("jump", 6)
        }
        break;
      case "#rsvp":
        if (window.innerWidth <= 767) {
          this.testSwiper.slideTo(5, 250);
        } else {
          $("#bb-bookblock").bookblock("jump", 7)
        }
        break;
    }
  }


  onBeforeTransition(
    eventParams: Parameters<SwiperEvents['beforeTransitionStart']>
  ) {
    const [swiper, speed, internal] = eventParams;
  }

  public checkLogin() {
    if (this.password === "rakkauttavain") {
      $("main").show();
      $(".login-overlay").hide();
      this.logged = true;
      $("#bb-bookblock").bookblock("jump", 2)
      $("swiper").addClass("visible");
      $(".kutsu-mob-front").first().click();
    } else {
      $("#invalid").show();
    }
  }

  toggleFlip(number) {
    console.log(number)
    switch (number) {
      case 0: 
      this.flip0 = (this.flip0 == 'inactive') ? 'active' : 'inactive';
      break;
      case 1: 
      this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
      break;
      case 2: 
      this.flip2 = (this.flip2 == 'inactive') ? 'active' : 'inactive';
      break;
      case 3: 
      this.flip3 = (this.flip3 == 'inactive') ? 'active' : 'inactive';
      break;
      case 4: 
      this.flip4 = (this.flip4 == 'inactive') ? 'active' : 'inactive';
      break;
      case 5: 
      this.flip5 = (this.flip5 == 'inactive') ? 'active' : 'inactive';
      break;
    }
    
  }

  onSwiper(any) {
    this.testSwiper = any;
  }
  /*   onSlideChange() {
      console.log('slide change');
    } */

  handleBg() {
    if (window.innerWidth <= 767) {
      $("body").removeClass("bg-horizontal");
      $("body").addClass("bg-vertical");
      $(".login-overlay").removeClass("bg-horizontal");
      $(".login-overlay").addClass("bg-vertical");
    } else {
      $("body").removeClass("bg-vertical");
      $("body").addClass("bg-horizontal");
      $(".login-overlay").removeClass("bg-vertical");
      $(".login-overlay").addClass("bg-horizontal");
    }
  }
}
