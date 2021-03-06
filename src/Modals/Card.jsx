import React from 'react';
import '../Styles/Card.css'
import Ricvhey from "../FirstModuleImages/Richey_Rich_Estate.png"
import Blueville from "../FirstModuleImages/Blueville_Estate.png"
import Downtown from "../FirstModuleImages/Downtown_Shopping_Strip.png"
import Extreme from "../FirstModuleImages/Extreme_Techology_Park.png"
import Lean from "../FirstModuleImages/Lean_Leisure_Health.png"
import ONeill from "../FirstModuleImages/ONeill_Monster_Mail.png"
import Accommodation from "../FirstModuleImages/Scaled_Accommodation.png"
import Downs from "../FirstModuleImages/White_Downs_Estate.png"

const Card = ({ CardName, data, ImageName }) => {
    let url;
    let CardSize;
    let ButtonsAgrument = Object.assign([], data.ButtonsAgrument);
    let BAIndex = ButtonsAgrument.findIndex(el => el.DispaingImage === ImageName);
    switch (CardName) {
        case 'Richey_Rich_Estate':
            url = Ricvhey;
            CardSize = 300;
            break;
        case 'Blueville_Estate':
            url = Blueville;
            CardSize = 300;
            break;
        case 'Downtown_Shopping_Strip':
            url = Downtown;
            CardSize = 80;
            break;
        case 'Extreme_Techology_Park':
            url = Extreme;
            CardSize = 200;
            break;
        case 'Lean_Leisure_Health':
            url = Lean;
            CardSize = 100;
            break;
        case 'ONeill_Monster_Mail':
            url = ONeill;
            CardSize = 200;
            break;
        case 'Scaled_Accommodation':
            url = Accommodation;
            CardSize = 100;
            break;
        case 'White_Downs_Estate':
            url = Downs;
            CardSize = 300;
            break;
        default:
            url = Ricvhey;
            CardSize = 300;
    };

    const CardStyle = {
        background: 'white',
        backgroundImage: 'url(' + url + ')',
        backgroundSize: '100%, 100%',
        height: '100%',
        width: '100%',
        marginLeft: '2.5%',
        marginTop: '2.5%',
        backgroundRepeat: 'no-repeat',
    };

    function Calculate(event, inputNum) {
        if (['0', '1', '2', '3', '5', '8', '13', '21'].includes(event.target.value) || event.target.value === '') {

            // Subtracting a number that was before the input was updated. Made to reset the value if the number is erased.
            if (ButtonsAgrument[BAIndex].Input[inputNum] !== '') {
                ButtonsAgrument[BAIndex].Input[3] = parseFloat(ButtonsAgrument[BAIndex].Input[3]) - parseFloat(ButtonsAgrument[BAIndex].Input[inputNum]);
                let WSJF = parseFloat(ButtonsAgrument[BAIndex].Input[3]) / CardSize;
                ButtonsAgrument[BAIndex].Input[4] = WSJF.toFixed(3);
            }

            // Adding a new input
            if (event.target.value !== '') {
                ButtonsAgrument[BAIndex].Input[3] = parseFloat(ButtonsAgrument[BAIndex].Input[3]) + parseFloat(event.target.value);
                let WSJF = parseFloat(ButtonsAgrument[BAIndex].Input[3]) / CardSize;
                ButtonsAgrument[BAIndex].Input[4] = WSJF.toFixed(3);
            }
            ButtonsAgrument[BAIndex].Input[inputNum] = event.target.value;
            data.setButtonsAgrument(ButtonsAgrument);
        }
    }

    return (
        <div style={CardStyle}>
            <div className="FM_Card__Content">
                <div>
                    <input className='FM_Input_1'
                        type="text"
                        value={ButtonsAgrument[BAIndex].Input[0]}
                        onChange={event => Calculate(event, 0)} />

                    <input className='FM_Input_2'
                        type="text"
                        value={ButtonsAgrument[BAIndex].Input[1]}
                        onChange={event => Calculate(event, 1)} />

                    <input className='FM_Input_3'
                        type="text"
                        value={ButtonsAgrument[BAIndex].Input[2]}
                        onChange={event => Calculate(event, 2)} />
                </div>
                <div >
                    <h1 className='FM_SumOfInputs'>{ButtonsAgrument[BAIndex].Input[3]}</h1>
                </div>
                <div>
                    <h1 className='FM_WSHFRank'>{ButtonsAgrument[BAIndex].Input[4]}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card;