namespace my{
    /**
     * 测试注释111111111111111
     */
    export class B{
        protected onTest(){

        }
    }

    export class A extends B{
        protected onTest(){
            console.log(1111111111111111);
        }
    }

    export function signMix() {
        if(arguments.length === 0) return this;
        let param = arguments[0], str= this;
        if(typeof(param) === 'object') {
            for(var key in param)
                str = str.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
            return str;
        } else {
            for(var i = 0; i < arguments.length; i++)
                str = str.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
            return str;
        }
    }
}

namespace my{
    export class M{
        protected onTest(){
            console.log(1111111111111111);
        }
    }

    export class N extends M{
        protected onTest(){
            console.log(1111111111111111);
        }
    }
}
