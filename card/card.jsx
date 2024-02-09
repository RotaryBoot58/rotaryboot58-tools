import './card.scss'

export default function Card({name, priceTotal, priceInstallment, installment}) {
    
    return (
        <div id="card">
            <div id="thumbnail">
                {/* <img src={Image} /> */}
            </div>
            <div id="info">
                <div id="name">
                    {name}
                </div>
                <div id="price">
                    <span id="total">R$ {priceTotal}</span>
                    <span id="installment">em {installment}x de {priceInstallment}</span>
                </div>
            </div>
        </div>
    )
}