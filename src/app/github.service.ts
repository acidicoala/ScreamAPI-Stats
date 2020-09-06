import {Injectable} from '@angular/core';
import {GithubRelease} from './interfaces/release';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class GithubService {

    constructor(private httpClient: HttpClient) {
    }

    getReleases(): Observable<GithubRelease[]> {
        const requestUrl = 'https://api.github.com/repos/acidicoala/ScreamAPI/releases';
        return this.httpClient.get<GithubRelease[]>(requestUrl)
            .pipe(
                tap(releases => console.log(releases))
            );
    }
}
