import React from 'react';
import icon_users from "../../assets/images/page1/users.svg";
import icon_hands from "../../assets/images/page1/hands.svg";

function Statistics({statistics}) {
    return (
        <div className="px-8 pb-10 mx-auto flex">
            <div className="statistics_item">
                <img src={icon_users} className="mx-auto pb-1"/>
                <div className="number">{statistics["Stories_Told"].toLocaleString('en')}</div>
                <div className="description">Stories<br/>Told</div>
            </div>
            <div className="statistics_item">
                <img src={icon_hands} className="mx-auto pb-1"/>
                <div className="number">{statistics["Affirmations_Given"].toLocaleString('en')}</div>
                <div className="description">Affirmations<br/>Given</div>
            </div>
        </div>
    );
}

export default Statistics;