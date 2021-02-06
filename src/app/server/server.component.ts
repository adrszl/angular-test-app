import { Component, OnInit } from '@angular/core';

@Component({ // decorator
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        p {
            color: dodgerblue;
        }
    `]
})

export class ServerComponent implements OnInit {
    
    serverId: number = 10158;
    serverStatus: string = 'offline';
    statusColor: string = '';
    allowNewServer: boolean = false;

    constructor() {

    }

    ngOnInit() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    getServerStatus() {
        if (this.serverStatus === 'offline') {
            this.statusColor = 'color: red';
        } else {
            this.statusColor = 'color: green';
        }

        return this.serverStatus;
    }
}