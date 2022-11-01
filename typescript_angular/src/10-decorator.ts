//decorators
//class decorator
function apiVersion(version:string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Rafaela"});
    };
}

function minLength(length: number) {
    return (target:any, key:string) => {
        let _value = target[key];
        
        const getter = () => "[play]" + _value;
        const setter = (value:string) => {
           if (value.length < length) {
            throw new Error(`Valor mínimo do que ${length}`)
           } else {
            _value = value;
           }
        }
        Object.defineProperty(target, key ,{
            get: getter,
            set: setter,
        });
    };
    
}

class Api {
    @minLength(5)
    name: string;

    constructor(name:string) {
        this.name = name;
    }
}
const api = new Api("produtos");
console.log(api.name);


