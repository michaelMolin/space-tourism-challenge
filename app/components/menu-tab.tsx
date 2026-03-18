import type { MenuTabType } from "../interfaces/menu-tab";

export default function MenuTab(props: MenuTabType)
{
    return(
        <div className="h-400 hover:border-b-white hover:border-b-2 transition-all delay-150">
            <h4 className="text-preset-8 text-blue-300">{props.voice}</h4>
        </div>
    )
}