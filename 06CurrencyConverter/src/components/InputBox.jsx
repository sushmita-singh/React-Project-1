import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currrencyDisabled = false,
    className = "",
}) {

    const id = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1-2'>
                <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input 
                id={id}
                type="number" 
                className='outline-none w-full bg-transparent py-1.5'
                placeholder='Amount'
                disabled = {amountDisabled}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className=''>
                <p>Currency Type</p>
                <select 
                className=''
                name="" 
                id=""
                value={selectedCurrency}
                onChange={(e) => {
                    onCurrencyChange && onCurrencyChange(e.target.value)
                }}
                disabled={currrencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option value={currency} key={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox