import {DevTreeLink} from "../types"

type DevTreeItemProps = {
    item: DevTreeLink
}
export default function DevTreeInput({item}: DevTreeItemProps) {
    
    return (
        <div className="bg-white shadow-sm p-5 flex item-center gap-3">
            <div
                className="w-12 h-12 bg-cover"
                style={{backgroundImage: `url('/social/icon_${item.name}.svg')`}}
            ></div>
            <input 
                type="text" 
                className="flex-1 border border-gray-100 rounded-lg"
            />
        </div>
    )
}