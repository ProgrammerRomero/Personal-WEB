
import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';



export const ROUTES: Routes = [
    { path: 'home', component: ContentComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contactme', component: ContactMeComponent },

    //Any empty path, Return it home
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    //Anyother path, Return it home
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    
]