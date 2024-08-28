export namespace main {
	
	export class Passwords {
	    id: number;
	    url: string;
	    login: string;
	    password: string;
	
	    static createFrom(source: any = {}) {
	        return new Passwords(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.url = source["url"];
	        this.login = source["login"];
	        this.password = source["password"];
	    }
	}

}

