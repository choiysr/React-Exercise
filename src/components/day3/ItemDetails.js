import React, {useState} from 'react'

const ItemDetails = ({pno,pname,price,amount,changeItem}) => {


    const [amountValue, setAmountValue] = useState(amount)

    const handleChange = (e) => {
        if(e.target.value<0) {
            alert("수량은 0이 될 수 없습니다.")
            setAmountValue(0)
            return
        }
        setAmountValue(e.target.value)
        changeItem(pno,e.target.value)
    }

    const srcFile = '/samples/'+pname+'.jpg'

    return (
            <div>
                <img src={srcFile}></img>
                <span>{pname}  </span>
                <span>  {price}  </span>
                <span>  <input type='number' value={amountValue} onChange={handleChange}></input></span>
                <hr></hr>
            </div>
    )   
}

export default ItemDetails