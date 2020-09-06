import {AfterViewInit, Component} from '@angular/core';
import {Release} from '../interfaces/release';
import {GithubService} from '../github.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {
    releases: Release[];
    displayedColumns: string[] = ['title', 'version', 'download-count'];

    constructor(private githubService: GithubService) {
    }

    ngAfterViewInit(): void {
        this.getReleases();
    }

    /**
     * Fetch the releases from the service and map them to the table format
     */
    getReleases() {
        this.githubService.getReleases().subscribe(releases => {
            this.releases = releases
                .filter(release => !!release.assets.length)
                .map<Release>(release => ({
                    url: release.html_url,
                    name: release.name,
                    version: release.tag_name,
                    downloadCount: release.assets[0].download_count
                })
            );
        });

    }

    getTotalSum(): number {
        return this.releases
            ?.map(release => release.downloadCount)
            ?.reduce((sum, downloadCount) => sum + downloadCount) ?? 0;
    }

}
