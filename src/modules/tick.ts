interface IModule {
    name: string
    exec: Function
}

class Tick {
    private freq: number
    private modules: Array<IModule>

    constructor(freq: number, modules: Array<IModule>){
        this.freq = freq
        this.modules = modules
    }

    run(){
        this.modules.forEach(m => {
            m.exec(this.freq)
        })
    }
}

export { IModule, Tick }