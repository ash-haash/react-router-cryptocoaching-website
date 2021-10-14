import React, { useEffect, useState } from 'react';
import Rank from '../Rank/Rank';

const MarketRanks = () => {

    const [ranking, setRanking] = useState([]);
    useEffect(() => {
        fetch('./topCryptoCoins.json')
            .then(res => res.json())
            .then(data => setRanking(data))
    }, [])

    return (
        <div>
            <h1 style={{ color: "darkorange", fontSize: "40px", fontFamily: "cursive", padding: "50px", borderBottom: '1px solid lightgray' }} >Top Ranking Crypto Coins</h1>
            <div style={{ marginRight: '50px', marginLeft: '50px', marginBottom: '30px' }} className="row g-5">
                {
                    ranking.map(rank => <Rank
                        key={rank.id}
                        rank={rank}
                    ></Rank>)
                }
            </div>
        </div>
    );
};

export default MarketRanks;