import React, {useState} from 'react'
import ItemList from './ItemList'
import ItemTotal from './ItemTotal'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

const ItemComponent = ({arr}) => {



    const [total, setTotal] = useState(0)
    // setItems를 해주지 않으면 각 item들의 amount가 변경될때 마다 다른 amount가 0으로 초기됨.
    // => so 기존 item들을  상태유지 시킬 필요가 있음.
    const [items, setItems] = useState(arr)

    const changeItem = (pno, amount) => {
        console.log("changeItem...", pno, amount)
        const target = items.filter(item => item.pno===pno)[0]
        console.log("target : " + target)
        target.amount  = parseInt(amount)
        console.log(items)

        setItems(items)
        
        let sum = 0;
        items.forEach(item => {
            sum += item.price * item.amount
        })
        setTotal(sum)
    }

    return (
        <div>
            <h3>Item Component</h3>
            <ItemList arr={items} changeItem={changeItem}></ItemList>
            <ItemTotal total={total}></ItemTotal>
            <hr></hr>
        </div>
    )
}

export default ItemComponent