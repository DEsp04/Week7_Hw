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



//Step 5:
// // FILE: dashboard.js

// // From component folder
// import { users, issues } from '../components';

// // From layout folder
// import { header, sidebar } from '../layouts'; 


// class Dashboard {

//   loadDashboard(){

//     // Invoke methods
//     users.loadUsers();
//     issues.loadIssues();
//     header.loadHeader();
//     sidebar.loadSidebar();

//     console.log('Dashboard component is loaded');
//   }

// }

// export let dashboard = new Dashboard(); 