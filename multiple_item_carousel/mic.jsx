import './mic.scss'

import ArrowLeft from './assets/arrow-left.svg'
import ArrowRight from './assets/arrow-right.svg'

export default function Mic() {

    return (
        <div id='mic-container'>

            <div className="mic-item" id='mic-item-1'>
                <a href="#mic-item-2">
                    <img src={ArrowLeft} alt="ArrowLeft" />
                </a>

                <div className="content">
                </div>

                <a href="#mic-item-2">
                    <img src={ArrowRight} alt="ArrowRight" />
                </a>
            </div>

            <div className="mic-item" id='mic-item-2'>
                <a href="#mic-item-1">
                    <img src={ArrowLeft} alt="ArrowLeft" />
                </a>
                <div className="content">
                    2
                </div>
                <a href="#mic-item-1">
                    <img src={ArrowRight} alt="ArrowRight" />
                </a>
            </div>
        </div>
    );
}