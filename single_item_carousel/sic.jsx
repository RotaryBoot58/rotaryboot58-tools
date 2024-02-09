import './sic.scss'

import ArrowLeft from './assets/arrow-left.svg'
import ArrowRight from './assets/arrow-right.svg'

export default function Sic() {

    return (
        <div id='sic-container'>

            <div className="sic-item" id='sic-item1'>
                <a href="#sic-item3">
                    <img src={ArrowLeft} alt="ArrowLeft" />
                </a>

                <div className="sic-content">
                    1
                </div>

                <a href="#sic-item2">
                    <img src={ArrowRight} alt="ArrowRight" />
                </a>
            </div>

            <div className="sic-item" id='sic-item2'>
                <a href="#sic-item1">
                    <img src={ArrowLeft} alt="ArrowLeft" />
                </a>

                <div className="sic-content">
                    2
                </div>

                <a href="#sic-item3">
                    <img src={ArrowRight} alt="ArrowRight" />
                </a>
            </div>

            <div className="sic-item" id='sic-item3'>
                <a href="#sic-item2">
                    <img src={ArrowLeft} alt="ArrowLeft" />
                </a>
                
                <div className="sic-content">
                    3
                </div>

                <a href="#sic-item1">
                    <img src={ArrowRight} alt="ArrowRight" />
                </a>
            </div>

        </div>
    );
}