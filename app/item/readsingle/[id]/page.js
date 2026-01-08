// import { get } from "mongoose"

const getSingleItem = async(id) => {
    const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`,{cache:"no-store"})
    const  singleItem = jsonData.singleItem
    return singleItem
}

const ReadSingleItem = async(context) => {
    const params = await context.params
    const singleItem = await getSingleItem(params.id)
    console.log(singleItem)
    return(
        <h1>個別アイテムページ</h1>
    )
}

export default ReadSingleItem