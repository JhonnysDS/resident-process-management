import { Routes } from '@angular/router';
import { LoginComponent } from './components/public/auth/login/login.component';
import { RegisterComponent } from './components/public/auth/register/register.component';
export const routes: Routes = [
    {
        path: 'auth',
        children:[
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    }

];
