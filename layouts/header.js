import { UserProfile } from '../components/user-profile.js';

class Header { 
  loadHeader() { 
    //Create a new instance
    const UserProfile = new UserProfile();

    //Call the method (component)
    loadUserProfile.loadUserProfile();
    
    //Output loading status
    console.log('Header component is loaded...')
  }
}


export { Header }