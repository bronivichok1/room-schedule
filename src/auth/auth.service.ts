// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import ActiveDirectory from 'activedirectory2';

@Injectable()
export class AuthService {
    private config = {
        url: process.env.LDAP_URL,
        baseDN: process.env.LDAP_SEARCH_BASE,
        username: process.env.LDAP_BIND_DN,
        password: process.env.LDAP_BIND_CREDENTIALS,
        attributes:{
            user:['title','cn']
        }
    };

    private ad = new ActiveDirectory(this.config);

    async validateUser(username: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.ad.authenticate(username, password, (err, auth) => {
                if (err) {
                    reject(err);
                    return;
                }

                if (auth) {
                    this.getUserDetails(username, resolve, reject);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            });
        });
    }

    private getUserDetails(username: string, resolve: Function, reject: Function) {
        this.ad.findUser(username, (err, user) => {
            if (err) {
                reject(err);
                return;
            }
            
            if (user) {
                const title = user.title || 'No title available';
                const name = user.cn || 'No cn available';
                resolve({ name, title });
            } else {
                reject(new Error('User not found'));
            }
        });
    }
}