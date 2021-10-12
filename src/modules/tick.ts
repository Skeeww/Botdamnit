import { Debug } from "../utils/debug"

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
        this.modules.forEach((m) => {
            Debug.bot(`[${m.name}] module loaded`)
        })
    }

    run(){
        this.modules.forEach((m) => {
            m.exec()
            setInterval(() => m.exec(), this.freq)
        })
    }
}

export { IModule, Tick }