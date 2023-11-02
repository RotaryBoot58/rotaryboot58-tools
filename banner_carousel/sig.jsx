import './sig.scss'

import ArrowLeft from './assets/arrow-left.svg'
import ArrowRight from './assets/arrow-right.svg'

export default function Sig() {

    return (
        <div id='sig-container'>

            <div className="sig-item" id='sig-item1'>
                <a href="#sig-item3">
                    <img src={ArrowLeft} alt="ArrowLeft" />
                </a>

                <div className="sig-content">
                    1
                </div>

                <a href="#sig-item2">
                    <img src={ArrowRight} alt="ArrowRight" />
                </a>
            </div>

            <div className="sig-item" id='sig-item2'>
                <a href="#sig-item1">
                    <img src={ArrowLeft} alt="ArrowLeft" />
                </a>

                <div className="sig-content">
                    2
                </div>

                <a href="#sig-item3">
                    <img src={ArrowRight} alt="ArrowRight" />
                </a>
            </div>

            <div className="sig-item" id='sig-item3'>
                <a href="#sig-item2">
                    <img src={ArrowLeft} alt="ArrowLeft" />
                </a>
                
                <div className="sig-content">
                    3
                </div>

                <a href="#sig-item1">
                    <img src={ArrowRight} alt="ArrowRight" />
                </a>
            </div>

        </div>
    );
}