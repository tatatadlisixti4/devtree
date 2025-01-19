import {UserHandle} from "../types"

type HandleDataProps = {
    data: UserHandle
}
export default function HandleData({data} : HandleDataProps) {
    return (
        <div>{data.handle}</div>
    )
}
