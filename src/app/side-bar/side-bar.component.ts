import { LinkModel } from './linkModel.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  links: LinkModel[] = [
    { link: '/home', name: 'Home', outsideLink: false, icon: 'pi-home' },
    { link: '/projects', name: 'Projects', outsideLink: false, icon: 'pi-folder' },

    { link: 'https://github.com/ZMizgalski', name: 'Github', outsideLink: true, icon: 'pi-github' },
    {
      link: 'https://www.linkedin.com/in/zbigniew-mizgalski-951863236/',
      name: 'Linkedin',
      outsideLink: true,
      icon: 'pi-linkedin',
    },
  ];

  constructor(private router: Router) {}

  public makeRoute(link: LinkModel): void {
    if (link.outsideLink) {
      window.open(link.link, '_blank');
    } else {
      this.router.navigate([link.link]);
    }
  }
}
