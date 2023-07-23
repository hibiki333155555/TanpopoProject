import React, { useEffect, useState } from 'react';
import { Typewriter } from '../components/Typewriter';

export function Moji() {
    const text = 'T0ANPOPO PROJECT is kind of aaaaaaaaaaaabbbbbbbbbbbbbTANPOPO PROJECT is kind of aaaaaaaaaaaabbbbbbbbbbbbbTANPOPO PROJECT is kind of aaaaaaaaaaaabbbbbbbbbbbbb';
    return(
        <div>
            <h1>
                {Typewriter(text)}
            </h1>
        </div>
    );
}
