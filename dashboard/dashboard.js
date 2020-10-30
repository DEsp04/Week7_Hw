//From component folder
import { Users } from '../components/users.js';
import { Issues } from '../components/issues.js';

//From layout folder
import { Header } from '../layouts/header.js';
import { SideBar } from '../layouts/sidebar.js';






class Dashboard { 
  loadDashboard() { 
    //call their method
    const users = new Users();
    users.loadUsers();

    const issues = new Issues();
    issues.loadIssues();

    const header = new Header();
    header.loadHeader();

    const sidebar = new SideBar();
    sidebar.loadSideBar();

    console.log('Dashboard is loaded...')
  }
}


export { Dashboard };