import React, { useState } from 'react'

export default function Sample() {
    const [color, setColor] = useState('white')
    return (
        <div
            style={{
                backgroundColor: color,
                height: '100vh'
            }}
        >
            <button onClick={() => setColor('pink')} style={{ backgroundColor: 'pink' }}>
                PINK</button>

            <button onClick={() => setColor('yellow')} style={{ backgroundColor: 'yellow' }}>
                YELLOW</button>

            <button onClick={() => setColor('blue')} style={{ backgroundColor: 'blue' }}>
                BLUE</button>

        </div>
    )
}
