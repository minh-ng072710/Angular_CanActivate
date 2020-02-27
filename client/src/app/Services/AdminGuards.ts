import {Injectable} from '@angular/core'
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router'
import {Observable} from'rxjs'

@Injectable({
    providedIn:"root"
})

export class AdminGuards implements CanActivate{
    constructor(public router:Router){

    }
    canActivate(
        next:ActivatedRouteSnapshot,
        state:RouterStateSnapshot,
    ):Observable<boolean>|Promise<boolean>|boolean{
        var result=false;
        if(!result){
            this.router.navigate(["/login"]);
            return false   
        }else{
            return true
        }
    }
            
    
}