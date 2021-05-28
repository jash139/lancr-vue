export default function ({ app, route, redirect }) {
    if (app.$fire.auth) {
        const user = app.$fire.auth.currentUser;
        if (user) {
            // User signed in
            if (route.path.includes('/signup') || route.path.includes('/signin') || route.path.includes('/forgot-password')) {
                redirect('/');
            }
        } else {
            // No user 
            if (route.path.includes('/chats') || route.path.includes('/freelancers') || route.path.includes('/profile') || route.path.includes('/projects') || route.path.includes('/post-project')) {
                redirect('/signin');
            }
        }
    }
};