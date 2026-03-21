import type { TabType } from "../interfaces/tab"

export default function Tab(props: TabType)
{
    return(
        <div>
            <div className="h-400 transition-all delay-150
                border-r-2 border-r-transparent hover:border-r-white/50 active:border-r-white 
                md:border-r-transparent md:border-b-2 md:border-b-transparent md:hover:border-b-white/50 md:hover:border-r-transparent md:active:border-b-white md:active:border-r-transparent 
            ">
                <h4 className="text-preset-8 text-white">
                    {props.is_menu && <span className="text-preset-8-bold">{props.index} </span>}
                    {props.voice}
                </h4>
            </div>
        </div>
       
    )
}