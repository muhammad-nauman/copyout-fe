import history from '@history';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import FuseUtils from '@fuse/FuseUtils';

class jwtService extends FuseUtils.EventEmitter {

    init()
    {
        axios.defaults.baseURL = process.env.REACT_APP_API_URL;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        this.setInterceptors();
        this.handleAuthentication();
    }

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if ( err.response && err.response.status === 401 && err.config && !err.config.__isRetryRequest )
                {
                    // if you ever get an unauthorized response, logout the user
                    this.emit('onAutoLogout', 'Invalid access_token');
                    this.setSession(null);
                    this.setAuthUser(null);
                }
                throw err;
            });
        });
    };

    handleAuthentication = async () => {

        let access_token = this.getAccessToken();
        console.log(access_token)

        if ( !access_token )
        {
            this.emit('onNoAccessToken');
            history.push({
                pathname: '/login'
            })

            return;
        }
        const valid = await this.isAuthTokenValid(access_token)
        console.log(valid, 2134)

        if ( valid )
        {
            this.setSession(access_token);
            if(history.location.pathname === '/login') {
                history.push({
                    pathname: '/dashboard' 
                })
            }
            this.emit('onAutoLogin', true);
        }
        else
        {
            this.setSession(null);
            this.setAuthUser(null);
            if(history.location.pathname !== '/login') {
                history.push({
                    pathname: '/login'
                })
            }
            this.emit('onAutoLogout', 'access_token expired');
        }
    };

    createUser = (data) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/auth/register', data)
                .then(response => {
                    if ( response.data.user )
                    {
                        this.setSession(response.data.access_token);
                        resolve(response.data.user);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };

    signInWithEmailAndPassword = (form) => {
        return new Promise((resolve, reject) => {
            axios.post('oauth/token', {
                    username:form.email,
                    password: form.password,
                    client_id: process.env.REACT_APP_CLIENT_ID,
                    client_secret: process.env.REACT_APP_CLIENT_SECRET,
                    grant_type: process.env.REACT_APP_GRANT_TYPE,
                
            }).then(response => {
                if ( response.data )
                {
                    this.setSession(response.data.access_token);
                    this.getAuthUser();
                    resolve(response.data.user);
                }
                else
                {
                    reject(response.data.error);
                }
            });
        });
    };

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.get('/api/auth/access-token', {
                data: {
                    access_token: this.getAccessToken()
                }
            })
                .then(response => {
                    if ( response.data.user )
                    {
                        this.setSession(response.data.access_token);
                        resolve(response.data.user);
                    }
                    else
                    {
                        this.logout();
                        reject('Failed to login with token.');
                    }
                })
                .catch(error => {
                    this.logout();
                    reject('Failed to login with token.');
                });
        });
    };

    updateUserData = (user) => {
        return axios.post('/api/auth/user/update', {
            user: user
        });
    };

    setSession = access_token => {
        if ( access_token )
        {
            localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else
        {
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    setAuthUser = user => {
        if ( user )
        {
            localStorage.setItem('AUTH_USER', JSON.stringify(user));
            return;
        }
        localStorage.removeItem('AUTH_USER');
    };

    logout = () => {
        this.setSession(null);
        this.setAuthUser(null);
    };

    isAuthTokenValid = async (access_token) => {
        if ( !access_token )
        {
            return false;
        }
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        const user = await this.getAuthUser();
        return !!user;
        // return valid;
    };

    getAccessToken = () => {
        return window.localStorage.getItem('jwt_access_token');
    };

    getAuthUser = () => {
        return new Promise((resolve, reject) => {
            axios.get('auth/user')
                .then(response => {
                    if ( response.data )
                    {
                        localStorage.setItem('auth_user', JSON.stringify(response.data))
                        history.push({ pathname: '/dashboard' })
                        resolve(response.data);
                    }
                    else
                    {
                        this.logout();
                        reject('Failed to login with token.');
                    }
                })
                .catch(error => {
                    this.logout();
                    reject('Failed to login with token.');
                });
        });
    }
}

const instance = new jwtService();
instance.init();

export default instance;
