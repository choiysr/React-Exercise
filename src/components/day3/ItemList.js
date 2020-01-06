import React from 'react'
import ItemDetails from './ItemDetails'

// 상품 목록을 가져와서 출력해야하기 때문에 props(=arr)를 받자
const ItemList = ({arr, changeItem}) => {

    const lis = arr.map(item =><li key={item.pno}><ItemDetails pno={item.pno} pname={item.pname} price={item.price}
     amount = {item.amount} changeItem = {changeItem}/></li>)
    // [상위 컴포넌트에서 function 전달 전 arr만 받을때 쓸 수 있음]
    // {...someting} property를 여러개 전달해야 할 때 쓰는 '전개'연산자. 
    // 배열/객체에 사용할 수 있다. 
    // case1. (item) => <ItemDetails {pno={item.pno}...blah blah></ItemDetails> ...이런식으로 할 필요 x 
    // case2. const lis = arr.map(item =><li key={item.pno}><ItemDetails {...item}/></li>)

    return (
        <ul>
            {lis}
        </ul>
    )

}

export default ItemList