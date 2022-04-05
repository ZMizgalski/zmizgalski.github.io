import { Project } from './project.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Level-Crossing-Python-Server',
      link: 'https://github.com/ZMizgalski/Level-Crossing-Python-Server',
      description: '',
    },
    {
      name: 'Level-Crossing-Python-Client',
      link: 'https://github.com/ZMizgalski/Level-Crossing-Python-Client',
      description: '',
    },
    {
      name: 'Level-Crossing-Angular',
      link: 'https://github.com/ZMizgalski/Level-Crossing-Angular',
      description: '',
    },
    {
      name: 'Level-Crossing-Server-Side-Java',
      link: 'https://github.com/ZMizgalski/Level-Crossing-Server-Side-Java',
      description: '',
    },
    {
      name: 'Level-Crossing-Client-Side-Java ',
      link: 'https://github.com/ZMizgalski/Level-Crossing-Client-Side-Java',
      description: '',
    },
    {
      name: 'Shop-Backend-Spring-Boot-Java',
      link: 'https://github.com/ZMizgalski/Shop-Backend-Spring-Boot-Java',
      description: '',
    },
    {
      name: 'Simple-File-Upload-Angular',
      link: 'https://github.com/ZMizgalski/Simple-File-Upload-Angular',
      description: '',
    },
    {
      name: 'Simple-File-Upload-Spring-Boot-Java',
      link: 'https://github.com/ZMizgalski/Simple-File-Upload-Spring-Boot-Java',
      description: '',
    },
    {
      name: 'Example-Data-Share-Angular',
      link: 'https://github.com/ZMizgalski/Example-Data-Share-Angular',
      description: '',
    },
    {
      name: 'Example-Data-Share-Spring-Boot-Java',
      link: 'https://github.com/ZMizgalski/Example-Data-Share-Spring-Boot-Java',
      description: '',
    },
    {
      name: 'Example-Data-Share-Spring-Boot-Java',
      link: 'https://github.com/ZMizgalski/Example-Data-Share-Spring-Boot-Java',
      description: '',
    },
    {
      name: 'Can-Sat-Website',
      link: 'https://github.com/ZMizgalski/Can-Sat-Website',
      description: '',
    },
    {
      name: 'Star-Wars-Example',
      link: 'https://github.com/ZMizgalski/Star-Wars-Example',
      description: '',
    },
    {
      name: 'Example-Portfolio-Website',
      link: 'https://github.com/ZMizgalski/Example-Portfolio-Website',
      description: '',
    },
    {
      name: 'Library-Spring-Boot-Java',
      link: 'https://github.com/ZMizgalski/Library-Spring-Boot-Java',
      description: '',
    },
    {
      name: 'Library-Example-Angular',
      link: 'https://github.com/ZMizgalski/Library-Example-Angular',
      description: '',
    },
  ];
}
